Dec 5, 2025

## Learning Multimodal Embeddings for Traffic Accident Prediction and Causal Estimation

#### Michael Zhang

## Abstract

We consider analyzing traffic accident patterns using both road network data and satellite images aligned to road graph nodes. Previous work for predicting accident occurrences relies primarily on road network structural features while overlooking physical and environmental information from the road surface and its surroundings. In this work, we construct a large multimodal dataset across six U.S. states, containing nine million traffic accident records from official sources, and one million high-resolution satellite images for each node of the road network. Additionally, every node is annotated with features such as the region's weather statistics and road type (e.g., residential vs. motorway), and each edge is annotated with traffic volume information (i.e., Average Annual Daily Traffic). Utilizing this dataset, we conduct a comprehensive evaluation of multimodal learning methods that integrate both visual and network embeddings. Our findings show that integrating both data modalities improves prediction accuracy, achieving an average AUROC of $90.1\%$, which is a $3.7\%$ gain over graph neural network models that only utilize graph structures. With the improved embeddings, we conduct a causal analysis based on a matching estimator to estimate the key contributing factors influencing traffic accidents. We find that accident rates rise by $24\%$ under higher precipitation, by $22\%$ on higher-speed roads such as motorways, and by $29\%$ due to seasonal patterns, after adjusting for other confounding factors. Ablation studies confirm that satellite imagery features are essential for achieving accurate prediction. We release the dataset and the experimental code for using this dataset at 

<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem; margin-bottom: 1.5rem;">
  <img src="./static/images/image_sample_MA1.png" width="32%" />
  <img src="./static/images/image_sample_motorway.png" width="32%" />
  <img src="./static/images/image_sample_MA0.png" width="32%" />
  <img src="./static/images/image_sample_NV0.png" width="32%" />
  <img src="./static/images/image_sample_mix0.png" width="32%" />
  <img src="./static/images/image_sample_link.png" width="32%" />
</div>

## 1. MMTraCE dataset

MMTraCE combines several real-world data sources to describe both the structure of road networks and the conditions in which accidents happen. The dataset covers six U.S. states and includes road graphs, satellite images, accident history, weather information, and traffic volume. Below is a short overview of how each part is collected.

- **Road Network** We build the road graph for each state using public mapping data such as OpenStreetMap. Road segments are merged into clean edges, and each node keeps its exact latitude and longitude. Road type, direction, and length are preserved.

- **Satellite Images** For every road-network node, we download a high-resolution satellite image from a commercial imagery service similar to Mapbox. Each image is centered on the node and shows about 200×200 meters of area. This produces more than one million aligned images.

- **Traffic Accident Records** Accident records come directly from state Departments of Transportation. Each state provides its own format, so we standardize them, extract time and location, and match every accident to the closest road segment.

- **Weather Data** Weather features are taken from national meteorological systems such as NOAA. We use measurements like temperature, precipitation, wind speed, and pressure, and align them to nearby road-network nodes using spatial interpolation.

- **Traffic Volume** Traffic flow information such as Average Annual Daily Traffic (AADT) comes from state DOT traffic monitoring programs. These values are mapped to the corresponding road edges using geospatial matching.

- **Final Alignment** All data sources are aligned in a shared coordinate system so that each road node has an image, weather context, road attributes, and nearby accident history. This integration produces a multimodal dataset suitable for prediction and causal analysis.

## 2. Methods

<figure style="text-align:center;">
  <img src="/images/mmtrace/" alt="pipeline" style="width:100%; max-width:800px;">
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
