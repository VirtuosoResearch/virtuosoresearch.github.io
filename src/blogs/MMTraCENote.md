Dec 5, 2025

## Learning Multimodal Embeddings for Traffic Accident Prediction and Causal Estimation
<!-- 
<p align="center">
<a href="https://arxiv.org/pdf/2512.02920">Paper</a> |
<a href="https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/YDP6KQ&faces-redirect=true">Dataset</a> | 
<a href="https://github.com/VirtuosoResearch/MMTraCE">Code</a>
</p>

- Authors: [Ziniu Zhang](https://ziniuzhang.github.io/), [Minxuan Duan](https://www.minxuanduan.com/), [Haris N. Koutsopoulos](https://mobility.mit.edu/people/haris-koutsopoulos/) and [Hongyang R. Zhang](https://www.hongyangzhang.com/) -->

## Abstract

We consider analyzing traffic accident patterns using both road network data and satellite images aligned to road graph nodes. Previous work for predicting accident occurrences relies primarily on road network structural features while overlooking physical and environmental information from the road surface and its surroundings. In this work, we construct a large multimodal dataset across six U.S. states, containing nine million traffic accident records from official sources, and one million high-resolution satellite images for each node of the road network. Additionally, every node is annotated with features such as the region's weather statistics and road type (e.g., residential vs. motorway), and each edge is annotated with traffic volume information (i.e., Average Annual Daily Traffic). 

Utilizing this dataset, we conduct a comprehensive evaluation of multimodal learning methods that integrate both visual and network embeddings. Our findings show that integrating both data modalities improves prediction accuracy, achieving an average AUROC of 90.1\%, which is a 3.7\% gain over graph neural network models that only utilize graph structures. With the improved embeddings, we conduct a causal analysis based on a matching estimator to estimate the key contributing factors influencing traffic accidents. We find that accident rates rise by 24\% under higher precipitation, by 22\% on higher-speed roads such as motorways, and by 29\% due to seasonal patterns, after adjusting for other confounding factors. Ablation studies confirm that satellite imagery features are essential for achieving accurate prediction.

We have released our [paper](https://arxiv.org/pdf/2512.02920), [dataset](https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/YDP6KQ&faces-redirect=true), and [code](https://github.com/VirtuosoResearch/MMTraCE).

<div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.5rem; margin-bottom: 1.5rem;">
  <img src="/images/mmtrace/image_sample_MA1.png" style="width:100%; height:auto;" />
  <img src="/images/mmtrace/image_sample_motorway.png" style="width:100%; height:auto;" />
  <img src="/images/mmtrace/image_sample_MA0.png" style="width:100%; height:auto;" />
  <img src="/images/mmtrace/image_sample_NV0.png" style="width:100%; height:auto;" />
  <img src="/images/mmtrace/image_sample_mix0.png" style="width:100%; height:auto;" />
  <img src="/images/mmtrace/image_sample_link.png" style="width:100%; height:auto;" />
</div>

## MMTraCE dataset

MMTraCE combines several real-world data sources to describe both the structure of road networks and the conditions in which accidents happen. The dataset covers six U.S. states and includes road graphs, satellite images, accident history, weather information, and traffic volume. Below is a short overview of how each part is collected.

- **Road Network** We build the road graph for each state using public mapping data such as OpenStreetMap. Road segments are merged into clean edges, and each node keeps its exact latitude and longitude. Road type, direction, and length are preserved.

- **Satellite Images** For every road-network node, we download a high-resolution satellite image from a commercial imagery service similar to Mapbox. Each image is centered on the node and shows about 200×200 meters of area. This produces more than one million aligned images.

- **Traffic Accident Records** Accident records come directly from state Departments of Transportation. Each state provides its own format, so we standardize them, extract time and location, and match every accident to the closest road segment.

- **Weather Data** Weather features are taken from national meteorological systems such as NOAA. We use measurements like temperature, precipitation, wind speed, and pressure, and align them to nearby road-network nodes using spatial interpolation.

- **Traffic Volume** Traffic flow information such as Average Annual Daily Traffic (AADT) comes from state DOT traffic monitoring programs. These values are mapped to the corresponding road edges using geospatial matching.

- **Final Alignment** All data sources are aligned in a shared coordinate system so that each road node has an image, weather context, road attributes, and nearby accident history. This integration produces a multimodal dataset suitable for prediction and causal analysis.

<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); text-align: center; gap: 0.5rem; margin-bottom: 1.5rem;">
  <img src="/images/mmtrace/stat1.png" style="width:100%; height:auto;" />
  <img src="/images/mmtrace/stat2.png" style="width:100%; height:auto;" />
</div>

**statistics** of the total number of edges, average edge length in meters, road network density, availability of traffic volume, period of accident records, total number of accident records, and total number of satellite images. 

<div style="text-align: center; margin-bottom: 1rem;">
  <img src="/images/mmtrace/road_count.png" style="max-width:70%; height:auto;" />
</div>

**The proportion of different road types among six states' road networks.**  Residential roads account for the vast majority of the total, making up approximately 74.5% of all roads. Other types, such as tertiary, secondary, and primary, contribute much smaller proportions by comparison.

## Main Results

<div style="text-align: center; margin-bottom: 1rem;">
  <img src="/images/mmtrace/main_result.png" style="max-width:99%; height:auto;" />
</div>

**Main results of GNNs, vision models, and multimodal fusion strategies.** The performance is evaluated using the mean absolute error (MAE) and area under the ROC curve (AUROC) on the test split.        
**A leave-one-out analysis is also attached.** To account for variability, each experiment is repeated with three different random seeds, and we report the averaged results along with standard deviations.

## Causal Analysis

<div style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); text-align: center; gap: 0.5rem; margin-bottom: 1.5rem;">
  <img src="/images/mmtrace/MA_spring.png" style="width:100%; height:auto;" />
  <img src="/images/mmtrace/MA_winter.png" style="width:100%; height:auto;" />
  <img src="/images/mmtrace/IAA_spring.png" style="width:100%; height:auto;" />
  <img src="/images/mmtrace/IAA_winter.png" style="width:100%; height:auto;" />
</div>

**Seasonal accident counts of Massachusetts and Iowa.** It is evident that accident points are more densely distributed in winter, indicating a higher frequency of incidents likely due to adverse weather conditions.


<div style="text-align: center; margin-bottom: 1rem;">
  <img src="/images/mmtrace/AAT.png" style="max-width:99%; height:auto;" />
</div>

**Average treatment effect on the treated (ATT) among all six states.** We analyze the effect of seasonal variation, road type, and precipitation. We vary for different years to compute the mean and standard deviations.

<div style="text-align: center; margin-bottom: 1rem;">
  <img src="/images/mmtrace/transfer.png" style="max-width:35%; height:auto;" />
</div>

**Cross-state AUROC performance of the GIN + MoE model**, computed over six states. Each entry shows the score when training on one state (represented by rows) and testing on another state (represented by columns). Darker colors indicate better transferability.

## Contact

Feel free to contact us by sending an email to all authors if you have any questions.

## BibTex

<p>If you find MMTraCE useful for your work, please cite:</p>

<pre><code class="language-bibtex">@inproceedings{zhang2026learning,
  title={Learning Multimodal Embeddings for Traffic Accident Prediction and Causal Estimation},
  author={Zhang, Ziniu and Duan, Minxuan and Koutsopoulos, Haris N. and Zhang, Hongyang R.},
  booktitle={Conference on Knowledge Discovery and Data Mining (KDD)},
  year={2026}
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
