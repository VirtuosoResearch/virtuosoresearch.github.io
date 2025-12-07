Dec 5, 2025

## Learning Multimodal Embeddings for Traffic Accident Prediction and Causal Estimation

#### Michael Zhang

## Abstract

We consider analyzing traffic accident patterns using both road network data and satellite images aligned to road graph nodes. Previous work for predicting accident occurrences relies primarily on road network structural features while overlooking physical and environmental information from the road surface and its surroundings. In this work, we construct a large multimodal dataset across six U.S. states, containing nine million traffic accident records from official sources, and one million high-resolution satellite images for each node of the road network. Additionally, every node is annotated with features such as the region's weather statistics and road type (e.g., residential vs. motorway), and each edge is annotated with traffic volume information (i.e., Average Annual Daily Traffic). Utilizing this dataset, we conduct a comprehensive evaluation of multimodal learning methods that integrate both visual and network embeddings. Our findings show that integrating both data modalities improves prediction accuracy, achieving an average AUROC of 90.1\%, which is a 3.7\% gain over graph neural network models that only utilize graph structures. With the improved embeddings, we conduct a causal analysis based on a matching estimator to estimate the key contributing factors influencing traffic accidents. We find that accident rates rise by 24\% under higher precipitation, by 22\% on higher-speed roads such as motorways, and by 29\% due to seasonal patterns, after adjusting for other confounding factors. Ablation studies confirm that satellite imagery features are essential for achieving accurate prediction.

<div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.5rem; margin-bottom: 1.5rem;">
  <img src="/images/mmtrace/image_sample_MA1.png" style="width:100%; height:auto;" />
  <img src="/images/mmtrace/image_sample_motorway.png" style="width:100%; height:auto;" />
  <img src="/images/mmtrace/image_sample_MA0.png" style="width:100%; height:auto;" />
  <img src="/images/mmtrace/image_sample_NV0.png" style="width:100%; height:auto;" />
  <img src="/images/mmtrace/image_sample_mix0.png" style="width:100%; height:auto;" />
  <img src="/images/mmtrace/image_sample_link.png" style="width:100%; height:auto;" />
</div>
## 1. MMTraCE dataset

MMTraCE combines several real-world data sources to describe both the structure of road networks and the conditions in which accidents happen. The dataset covers six U.S. states and includes road graphs, satellite images, accident history, weather information, and traffic volume. Below is a short overview of how each part is collected.

- **Road Network** We build the road graph for each state using public mapping data such as OpenStreetMap. Road segments are merged into clean edges, and each node keeps its exact latitude and longitude. Road type, direction, and length are preserved.

- **Satellite Images** For every road-network node, we download a high-resolution satellite image from a commercial imagery service similar to Mapbox. Each image is centered on the node and shows about 200×200 meters of area. This produces more than one million aligned images.

- **Traffic Accident Records** Accident records come directly from state Departments of Transportation. Each state provides its own format, so we standardize them, extract time and location, and match every accident to the closest road segment.

- **Weather Data** Weather features are taken from national meteorological systems such as NOAA. We use measurements like temperature, precipitation, wind speed, and pressure, and align them to nearby road-network nodes using spatial interpolation.

- **Traffic Volume** Traffic flow information such as Average Annual Daily Traffic (AADT) comes from state DOT traffic monitoring programs. These values are mapped to the corresponding road edges using geospatial matching.

- **Final Alignment** All data sources are aligned in a shared coordinate system so that each road node has an image, weather context, road attributes, and nearby accident history. This integration produces a multimodal dataset suitable for prediction and causal analysis.


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
