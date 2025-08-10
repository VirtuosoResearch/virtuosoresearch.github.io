Aug 10, 2025

## Efficient Ensemble for Fine-tuning Language Models on Multiple Datasets

#### Michael Zhang

## 1. Motivations

In many applications, fine-tuning language models involves multiple data sources. Existing methods have several limitations. Directly applying a base fine-tuning method often leads to negative interference across tasks. Pretraining a shared adapter and then fine-tuning it for each task increases computational cost.

## 2. Methods

![pipeline](/images/EnsembleLoRA/ensemblelora_pipeline.png)

*Figure 1: Overview of our methods.*

Our approach efficiently identifies relationships between datasets by analyzing their effects on the output performance of the model function. We divide the datasets into different groups and train their corresponding adapters. Then, we design an ensemble method to combine the outputs from each adapter.

![appro_error](/images/EnsembleLoRA/appro_error.png)

*Figure 2: The approximation error for Llama and GPT-J models with up to 34 billion parameters for LoRA, QLoRA, adapter, and QAdapter. We report the average and the standard deviation based on the results from 50 randomly sampled task subsets of size 3.*

First, we compute task affinity scores, which typically requires evaluating multiple subset combinations via fine-tuning. We observe that the relative parameter changes during fine-tuning are small, on average less than $0.2\%$ across LoRA, Adapter, QLoRA, and QAdapter, so we approximate fine-tuning results using a first-order Taylor’s expansion. This yields a relative error within $9\%$ while using $105\times$ less computation compared to actual fine-tuning.

Next, we apply several gradient boosting steps to reduce the loss in groups that currently have high training errors. In each step, we identify the group with the highest error and train a new adapter that learns to predict the model’s uncertainty, specifically, one minus the predicted probability of the correct class. This new adapter is then used to update the current adapter for that group. After several iterations, we obtain a final ensemble of adapters for each group.

## 3. Experiments

![trade_off](/images/EnsembleLoRA/trade_off.png)

*Figure 3: We compare error rate (one minus accuracy), computation cost, and memory usage across our approach and baselines when fine-tuning Llama-3-8B on ten NLP tasks. MTL-FT refers to first fine-tuning a shared LoRA on all the datasets, and then fine-tuning the low-rank adapter on each dataset, while Full FT refers to full fine-tuning of the entire model.*

![main_result](/images/EnsembleLoRA/main_result_ensemble.png)

*Table 1: We report the test accuracy (%) of our method, as compared with baselines. We also compute the average test accuracy across ten NLP datasets, along with the number of FLOPs and memory usage for fine-tuning Llama-8B using QLoRA. We run each experiment with three random seeds and report the standard deviations.*

Empirically, our method improves accuracy by $10\%$ with only $8\%$ more computation and $9$ GB of additional memory compared to QLoRA. It achieves comparable performance with $45\%$ less computation and memory compared to approaches without doing Taylor’s expansion to estimate. Compared to full fine-tuning, our method improves accuracy by $4\%$ while using $92\%$ less computation and saving $52$ GB of memory. All the results are based on the Llama-8B model.

## 4. Generalization ability

![generalization_error](/images/EnsembleLoRA/generalization_error.png)

*Figure 4: Illustrating the empirical generalization errors and sharpness measures with respect to QLoRA weights.*

Beyond experimental results, we also analyze empirical generalization error and sharpness using the trace of the Hessian. We find that small adapters tend to achieve the best generalization performance. Ensembles consistently yield lower generalization errors than individual adapters. Quantized adapters show smaller generalization errors than full models.


#### Our implementation is open-sourced at [https://github.com/VirtuosoResearch/EnsembleLoRA](https://github.com/VirtuosoResearch/EnsembleLoRA), and it can be easily adapted to other settings.
