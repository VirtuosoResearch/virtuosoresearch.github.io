Aug 10, 2025

## Efficient Ensemble for Fine-tuning Language Models on Multiple Datasets

#### Michael Zhang

## Abstract

We propose an ensemble method for fine-tuning language models on multiple datasets by grouping them into a small number of sets, training one small adapter per group, and combining them with weights. Using a first-order approximation of low-rank adaptation, we estimate performance from base model gradients, achieving 105× speedup compared to full fine-tuning while outperforming QLoRA with minimal overhead.

## 1. Motivations

In many applications, fine-tuning language models involves multiple data sources. Existing methods have several limitations. Directly applying a base fine-tuning method often leads to negative interference across tasks. Pretraining a shared adapter and then fine-tuning it for each task may increases computational cost.

To figure out the relationship of tasks, several works evaluate the similarities betweeen tasks or data samples. Influence functions evaluate how slight changes to individual training examples affect model predictions ([Koh and Liang, 2017](https://proceedings.mlr.press/v70/koh17a/koh17a.pdf)). Datamodeling uses random sampling and surrogate models to approximate the impact of adding or removing specific training samples on prediction loss ([Park et al., 2023](https://arxiv.org/pdf/2303.14186)). Task affinity grouping computes a task affinity matrix by computing gradient similarity between tasks ([Fifty et al., 2021](https://proceedings.neurips.cc/paper_files/paper/2021/file/e77910ebb93b511588557806310f78f1-Paper.pdf)). Our [prior work](https://arxiv.org/pdf/2409.19458) has explored efficent methods to estimate the fine-tuned result. Inspired by them, we propose an efficient grouping method without performing any fine-tuning. 

## 2. Methods

<figure style="text-align:center;">
  <img src="/images/EnsembleLoRA/ensemblelora_pipeline.png" alt="pipeline" style="width:100%; max-width:800px;">
  <figcaption style="text-align:center;"><em>Figure 1: Overview of our methods.</em></figcaption>
</figure>

Our approach efficiently identifies relationships between datasets by analyzing their effects on the output performance of the model function. We divide the datasets into different groups and train their corresponding adapters. Then, we design an ensemble method to combine the outputs from each adapter.

First, we compute task affinity scores, which typically requires evaluating multiple subset combinations via fine-tuning. We observe that the relative parameter changes during fine-tuning are small, on average less than 0.2\% across LoRA, Adapter, QLoRA, and QAdapter, so we approximate fine-tuning results using a first-order Taylor’s expansion. This yields a relative error within 9\% while using 105× less computation compared to actual fine-tuning.


<figure style="text-align:center;">
  <img src="/images/EnsembleLoRA/appro_error.png" alt="appro_error" style="width:60%; max-width:800px;">
  <figcaption style="text-align:left;"><em>Figure 2: The approximation error for Llama and GPT-J models with up to 34 billion parameters for LoRA, QLoRA, adapter, and QAdapter. We report the average and the standard deviation based on the results from 50 randomly sampled task subsets of size 3.</em></figcaption>
</figure>

Next, we apply several gradient boosting steps to reduce the loss in groups that currently have high training errors. In each step, we identify the group with the highest error and train a new adapter that learns to predict the model’s uncertainty, specifically, one minus the predicted probability of the correct class. This new adapter is then used to update the current adapter for that group. After several iterations, we obtain a final ensemble of adapters for each group.

## 3. Experiments

Empirically, our method improves accuracy by 10\% compared to QLoRA with few more computation and additional memory. It achieves comparable performance with 45\% less computation and memory compared to approaches without doing Taylor’s expansion to estimate. Compared to full fine-tuning, our method improves accuracy by 4\% while using much less computation and memory. All the results are based on the Llama-8B model.


<figure style="text-align:center;">
  <img src="/images/EnsembleLoRA/trade_off.png" alt="trade_off" style="width:60%; max-width:800px;">
  <figcaption style="text-align:left;"><em>Figure 3: We compare error rate, computation cost, and memory usage across our approach and baselines when fine-tuning Llama-8B on ten NLP tasks. MTL-FT refers to first fine-tuning a shared LoRA on all the datasets, and then fine-tuning the low-rank adapter on each dataset, while Full FT refers to full fine-tuning of the entire model.</em></figcaption>
</figure>

## 4. Generalization ability

Beyond experimental results, we also analyze empirical generalization error and sharpness using the trace of the Hessian. We find that small adapters tend to achieve the best generalization performance. Ensembles consistently yield lower generalization errors than individual adapters. Quantized adapters show smaller generalization errors than full models.

<figure style="text-align:center;">
  <img src="/images/EnsembleLoRA/generalization_error.png" alt="generalization_error" style="width:100%; max-width:800px;">
  <figcaption style="text-align:left;"><em>Figure 4: Illustrating the empirical generalization errors and sharpness measures with respect to QLoRA weights.</em></figcaption>
</figure>

## 5. Conclusion
We present an ensemble method of low-rank adapters for adapting language models across multiple datasets. First, we develop an efficient task affinity grouping algorithm, with a first-order approximation for estimating task affinities and a clustering step to partition tasks into groups. Then, we construct an ensemble for groups of tasks, consisting of adapters fine-tuned on each group with additional boosting steps. Our method consistently improves fine-tuning performance with minimal computational overhead. Lastly, we analyze the sharpness measures of low-rank adapters.

Our implementation is open-sourced at [https://github.com/VirtuosoResearch/EnsembleLoRA](https://github.com/VirtuosoResearch/EnsembleLoRA).
For future works, we can adapt this ensemble learning method to prompt engineering or reinforcement learning setting.

## BibTex
<!-- If you find EnsembleLoRA useful for your work, please cite:

```bibtex
@inproceedings{li2025efficient,
  title={Efficient Ensemble for Fine-tuning Language Models on Multiple Datasets},
  author={Li, Dongyue and Zhang, Ziniu and Wang, Lu and Zhang, Hongyang R},
  booktitle={Association for Computational Linguistics (ACL)},
  year={2025}
}
``` -->

<p>If you find EnsembleLoRA useful for your work, please cite:</p>

<pre><code class="language-bibtex">@inproceedings{li2025efficient,
  title={Efficient Ensemble for Fine-tuning Language Models on Multiple Datasets},
  author={Li, Dongyue and Zhang, Ziniu and Wang, Lu and Zhang, Hongyang R},
  booktitle={Association for Computational Linguistics (ACL)},
  year={2025}
}
</code></pre>

<style>
pre code{
  display:block;
  padding:1rem;
  border-radius:8px;
  background:#f5f5f5;
  overflow:auto;
  font-size:0.95rem;
}
</style>
