Feb 25, 2026

# Efficiently Learning Branching Networks for Multitask Algorithmic Reasoning

#### Dongyue Li

Reasoning is tied to the ability of a learning system to make inductive inferences based on its internally stored states. It is the fundamental difference between simply memorizing a pattern and actually figuring out a problem from scratch. Building models that can reliably execute this kind of logic remains one of the central challenges in artificial intelligence. The literature tackled this challenge through mathematical formalisms, such as using Bayesian networks to carefully model probabilistic reasoning under uncertainty. As modern neural networks have scaled into massive, generalized systems, an approach has emerged: evaluating and shaping reasoning through the lens of algorithmic execution.

## Algorithmic Reasoning

Algorithmic reasoning characterizes a neural network's reasoning ability by how well it can learn to mimic the step-by-step computations performed by classical algorithms. As a concrete example, imagine asking an AI to navigate a complex, unseen city grid to find the shortest route. A standard neural network, acting purely on pattern recognition, might just guess a path based on similar-looking maps it memorized during training. The moment it encounters a new city layout, it gets lost. A model capable of algorithmic reasoning can learn to execute a procedure like Dijkstra's algorithm. Thus, algorithmic reasoning focuses on teaching neural networks how to perform step-by-step logical inference by learning to execute classical algorithms. Instead of just memorizing the final output, the network learns the internal mechanics of the algorithm.

### How Are the Tasks Defined?

In algorithmic reasoning, tasks are defined by algorithmic trajectories. A trajectory contains the input, the final output, and a sequence of intermediate steps that capture the state of the algorithm at every computational step.

- Because algorithms generally manipulate sets of objects and relations, data is typically represented as a graph of nodes and edges.
- Predicting an intermediate algorithmic step is often formulated as a node-labeling classification task. For example, when running a Breadth-First Search (BFS), the network is trained to predict the index of the predecessor node in the current traversal path at each individual step.

To help understand the definition, let's look at an example illustrated in a figure below on a toy graph with five nodes, for three algorithms (breadth-first search, depth-first search, and Bellman-Ford). To understand the encoding, each intermediate step is labeled by the predecessor of each node along the traversal path, leading to a node label vector for each step. The node labels are initially the indices of the nodes. 

- In BFS, starting from node 1, the first step visits node 2. Hence, we update node 2's label as 1, which is its predecessor. In step 2, node 3 is visited, hence its node label is 1. Step 3 visits node 4 (with predecessor 2) and Step 4 visits node 5 with predecessor 2.
- In DFS, the first step 1 visits node 2, whose predecessor becomes 1. Step 2 visits node 3, whose predecessor is 2. Step 3 visits node 4 from 3 and step 4 visits node 5 from 4.
- Notice that in step 2, BFS and Bellman-Ford follow the same traversal path, but DFS follows a different path.

![1](/images/AlgorithmicReasoningNote/tasks.png)

To unify research in this area, the CLRS Algorithmic Reasoning Benchmark (CLRS-30) [1] was created. It provides strictly defined trajectories for 30 classical algorithms sourced from the famous *Introduction to Algorithms* textbook, spanning everything from sorting and searching to complex dynamic programming and graph traversals.

The existing benchmark adopts an encode-process-decode model architecture for learning algorithmic reasoning tasks.

- In particular, each intermediate step is treated as a node labeling sub-task, and the loss objective sums over all the intermediate node labeling sub-tasks. 

- Prior work has found that message-passing neural networks can learn to accurately predict both the intermediate and final steps of a graph algorithm (where a graph is sampled from a fixed distribution).  

## Multitask Algorithmic Reasoning

If we can teach a network one algorithm, the natural next question is: can we design a model capable of solving multiple algorithmic reasoning tasks simultaneously?

This problem is inherently difficult due to the negative interference, when execution steps differ drastically between algorithms. For instance, BFS and Bellman-Ford might share the exact same intermediate node labels in their first step, but a Depth-First Search will quickly branch off into a different traversal path. If a single processor is forced to predict all three simultaneously, interference is unavoidable. Conversely, training separate networks for multiple tasks scales poorly, drastically increasing memory costs at inference time.

### Learning Branching Neural Networks

We now describe a new algorithm that automatically learns one neural network for multitask algorithmic reasoning.  Our approach involves learning a branching network that can be applied on top of any base model, enabling more flexible parameter sharing based on estimated task similarity scores. 

For example:

- For GNNs, one can instantiate multiple networks per layer and assign a specific GNN to each task at each layer. See the Figure below for several examples of branching GNNs.
- For LLMs, one can apply parameter-efficient fine-tuning such as low-rank adapters (LoRA), and design a branching structure of LoRAs on top of a pretrained LLM.

We present three examples of branching GNNs, each designed to learn a pair of algorithms. As shown in the toy graph above, all three algorithms share identical node labels in the first step, so the same initial GNN layer applies to all. BFS and Bellman–Ford continue to share encodings in steps 2 and 3, thus reusing the second layer, while DFS branches out. 

<figure style="text-align:center;">
  <img src="/images/AlgorithmicReasoningNote/branching_examples.png" alt="pipeline" style="width:100%; max-width:800px;">
</figure>

The primary challenge in building such a network is determining the optimal structure. If we have $n$ tasks, $L$ layers, and each layer can be split into $k$ branches, the number of possible tree configurations is $k^{nL}$. For even a modest number of tasks and layers, this search space is large, making an exhaustive search impossible. 

To address this, we design an approach named AutoBRANE [2] to automatically find a branching structure from task data efficiently without the need for exhaustive training. In a high-level, the algorithm has two components. First, we design an algorithm that, given a set of algorithmic reasoning tasks, partitions them into (at most) disjoint groups via convex optimization. Second, we search for a branching network by recursively performing the partitioning from the first layer until layer $L$.

### Partitioning at One Layer

We first describe the procedure that, given a subset of tasks $S\subseteq \set{1, \dots, n}$ at one layer, determines a disjoint partition of $S$, corresponding to the branching structure at next layer. The procedure involves two main steps as illustrated in a Figure below. 

- First, we estimate task affinity scores based on partitioning inherited from previous layers. Each task affinity score between two tasks measures the average performance of a target when another task appears in the same subset of it. To compute such task affinity scores, it is analogous to the feature importance score used in random forests, which evaluates model performances trained on randomly sampled task subsets [3]. 
- After computing the task affinity score matrix, we generate a partition of the tasks by maximizing the estimated affinity scores within clusters via a convex relaxation program. 

![2](/images/AlgorithmicReasoningNote/task_affinity_scores.png)

Computing the task affinity scores requires training networks for repeatedly on many subsets. Instead, we design an algorithm that estimates affinity scores *without repeated training*. The key idea is to use *a first-order approximation of the network output around an initialization*.

- We apply a first-order approximation of the network output around a pretrained network initiation, such as one trained on all tasks.  

- Then, applying the approximation in the model loss in training the network on a subset tasks, we can estimate the network parameters fine-tuned on a subset of tasks by *solving a logistic regression problem using the gradients as features*.

Therefore, we replace the repeated training on random subsets with solving logistic regression problems on the gradients of each subset. Crucially, the running time is $O(|S|)$, which involves training the initialization on all tasks and evaluating the gradients on the samples in $S$. We illustrate the procedure in a figure below. 

<figure style="text-align:center;">
  <img src="/images/AlgorithmicReasoningNote/illustration_approach.png" alt="pipeline" style="width:80%; max-width:800px;">
</figure>

### Learning Branching Structures

Next, we search for a branching network via a top-down procedure. The algorithm begins with a single network with one module per layer. Starting at the first layer, tasks are grouped into $k_1$ clusters, creating $k_1$ modules. If $k_1 = 2$, tasks are split into two groups. The procedure continues recursively: Each group is further split at the next layer. If both are split into two groups, the second layer then contains four modules. This continues until the last layer. We illustrate a splitting of a branching network with GNN as the base model below. 

<figure style="text-align:center;">
  <img src="/images/AlgorithmicReasoningNote/illustration_of_splitting.png" alt="pipeline" style="width:100%; max-width:800px;">
</figure>

In summary, in terms of running time, at each layer, the algorithm takes $O(n)$ time to find a partitioning, since the union of sets is at most $n$. In total, AutoBRANE takes $O(nL)$ time. Regarding memory usage,  suppose the last layer contains $k$ clusters, and at each layer, the number of clusters grows by a constant factor.  Then the total number of nodes in the tree is roughly $k$.

### Empirical Evaluations

When applying our approach, AutoBRANE, to the CLRS benchmark, we find that our approach achieves the best trade-off between error rate, GPU hours, and memory usage, as compared to existing multitask and branching network baselines. We show the results of using MPNN or edge transformers [2] as the base model. AutoBRANE outperforms a single multitask network by 3.7%, demonstrating the effectiveness of branching networks in leveraging positive task transfer. It also achieves the best overall trade-off, reducing the average error rate by 1.2% compared to the strongest baseline, while using 48% fewer GPU hours and 26% less memory.

<figure style="text-align:center;">
  <img src="/images/AlgorithmicReasoningNote/illustration_of_results.png" alt="pipeline" style="width:100%; max-width:800px;">
</figure>

Moreover, the resulting branching structure aligns well with task similarities in their intermediate steps, revealing three major clusters. The largest includes BFS, Bellman-Ford, and several DFS-based algorithms. Notably, BFS and Bellman-Ford are grouped together, consistent with observations from [4]. Five DFS-related tasks, including topological sort and DAG shortest paths, are clustered around DFS. Prim’s and Dijkstra’s algorithms form a group, reflecting their shared greedy edge-selection strategy. Kruskal’s and Floyd-Warshall are grouped as well, both involving edge selection within components. 

![2](/images/AlgorithmicReasoningNote/tree_graph_algorithms.png)

Our approach also applies to text-based graph reasoning tasks, by constructing a branching structure of LoRA adapters on a large language model. 
AutoBRANE is compared against MTN, which fine-tunes a single LoRA adapter across all tasks, and the strongest multitask baseline. On the CLRS-Text benchmark, AutoBRANE improves average test accuracy by 5.5% relative to MTN and by 3.2% over the existing multitask baseline. This highlights the advantage of the branching structure in capturing varying levels of task similarity. To demonstrate the broader applicability of our approach, we also evaluate on the GraphQA and GraphWiz datasets and observe quantitatively similar gains.

If you are interested in more mathematical details or getting started with AutoBRANE, our paper is out on [arxiv](https://arxiv.org/pdf/2512.01113) and our code can be found on [github](https://github.com/VirtuosoResearch/Algorithmic-reasoning-code).

## References

[1] Veličković, Petar, Adrià Puigdomènech Badia, David Budden, Razvan Pascanu, Andrea Banino, Misha Dashevskiy, Raia Hadsell, and Charles Blundell. The CLRS Algorithmic Reasoning Benchmark. ICML 2022.

[2] Li, Dongyue, Zhenshuo Zhang, Minxuan Duan, Edgar Dobriban, and Hongyang R. Zhang. Efficiently Learning Branching Networks for Multitask Algorithmic Reasoning. KDD 2025.

[3] Li, Dongyue, Aneesh Sharma, and Hongyang R. Zhang. Scalable multitask learning using gradient-based estimation of task affinity. KDD 2024.

[4] Veličković, Petar, Rex Ying, Matilde Padovano, Raia Hadsell, and Charles Blundell. Neural execution of graph algorithms. ICLR 2020.

