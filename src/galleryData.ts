// src/galleryData.ts

export type Slide = {
    /* Full-size file, opened in the lightbox. For a recorded talk this is the
       still shown on the tile. */
    src: string;
    /* Smaller copy for the frame; falls back to src when absent. */
    thumb?: string;
    caption: string;
    date: string;
    /* Set for a recorded talk: the tile gets a play badge and the lightbox
       opens the player rather than an image. */
    videoId?: string;
};

/* Each list below is one rotating frame. Posters and talks sit side by side on
   the home page; photos have their own frame on the Resources page. Every frame
   starts on a random slide so the page doesn't open on the same one every visit.

   To add a photo or poster, drop the file in public/gallery/ and add an entry.
   Large images are worth downscaling first (a -sm copy near 900px for the frame
   and a -lg copy near 1600px for the lightbox) so the pages aren't loading
   camera JPEGs or print posters. An entry whose file is missing is dropped from
   its rotation rather than shown broken.

   To add a recorded talk, put its YouTube id in videoId and its thumbnail in
   src: https://img.youtube.com/vi/<id>/maxresdefault.jpg, or hqdefault.jpg for
   a video that has no maxresdefault (older or 4:3 uploads). */

export const photos: Slide[] = [
    {
        src: 'gallery/dongyue-defense-lg.jpg',
        thumb: 'gallery/dongyue-defense-sm.jpg',
        caption: 'Dongyue Li defends his PhD thesis',
        date: 'September 2026',
    },
    {
        src: 'gallery/lab-dinner-2026-lg.jpg',
        thumb: 'gallery/lab-dinner-2026-sm.jpg',
        caption: 'Celebrating after the defense',
        date: 'September 2026',
    },
    {
        src: 'gallery/jsm-2025-lg.jpg',
        thumb: 'gallery/jsm-2025-sm.jpg',
        caption: 'JSM at Nashville',
        date: 'August 2025',
    },
    /*
        {
            src: 'gallery/group-dinner-2025-lg.jpg',
            thumb: 'gallery/group-dinner-2025-sm.jpg',
            caption: 'Lab dinner in Boston',
            date: 'Summer 2025',
        },
    */
    {
        src: 'gallery/informs-2023-lg.jpg',
        thumb: 'gallery/informs-2023-sm.jpg',
        caption: 'Session photo at the INFORMS Annual Meeting',
        date: 'October 2023',
    },
    {
        src: 'gallery/icml-2022-lg.jpg',
        thumb: 'gallery/icml-2022-sm.jpg',
        caption: 'At the poster session at ICML',
        date: 'July 2022',
    },
];

export const posters: Slide[] = [
    {
        src: 'gallery/poster-gradsel-lg.jpg',
        thumb: 'gallery/poster-gradsel-sm.jpg',
        caption: 'Linear-time demonstration selection for in-context learning',
        date: 'EMNLP 2025',
    },
    {
        src: 'gallery/poster-policygradex-lg.jpeg',
        thumb: 'gallery/poster-policygradex-sm.jpeg',
        caption: 'Scalable Multi-Objective and Meta Reinforcement Learning via Gradient Estimation',
        date: 'AAAI 2026',
    },
    {
        src: 'gallery/poster-mmtrace-lg.jpg',
        thumb: 'gallery/poster-mmtrace-sm.jpg',
        caption: 'Multimodal embeddings for traffic accident prediction and causal estimation',
        date: 'KDD 2026',
    },
    {
        src: 'gallery/poster-gradex-lg.jpg',
        thumb: 'gallery/poster-gradex-sm.jpg',
        caption: 'Scalable fine-tuning from multiple data sources',
        date: 'Findings of EMNLP 2024',
    },
    {
        src: 'gallery/poster-ensemble-lora-lg.jpg',
        thumb: 'gallery/poster-ensemble-lora-sm.jpg',
        caption: 'Efficient ensemble for fine-tuning language models',
        date: 'ACL 2025',
    },
    {
        src: 'gallery/poster-road-safety-lg.jpg',
        thumb: 'gallery/poster-road-safety-sm.jpg',
        caption: 'Graph neural networks for road safety modeling',
        date: 'NeurIPS 2023',
    },
    {
        src: 'gallery/poster-gnn-generalization-lg.jpg',
        thumb: 'gallery/poster-gnn-generalization-sm.jpg',
        caption: 'Generalization in graph neural networks',
        date: 'AISTATS 2023',
    },
    {
        src: 'gallery/poster-negative-transfers-lg.jpg',
        thumb: 'gallery/poster-negative-transfers-sm.jpg',
        caption: 'Identification of negative transfers in multitask learning',
        date: 'TMLR 2023',
    },
    {
        src: 'gallery/poster-noise-stability-lg.jpg',
        thumb: 'gallery/poster-noise-stability-sm.jpg',
        caption: 'Noise stability optimization for flat minima',
        date: 'TMLR 2024',
    },
    {
        src: 'gallery/poster-edge-centrality-lg.jpg',
        thumb: 'gallery/poster-edge-centrality-sm.jpg',
        caption: 'Optimal intervention on weighted networks via edge centrality',
        date: 'SDM 2023',
    },
    {
        src: 'gallery/poster-finetuning-regularization-lg.jpg',
        thumb: 'gallery/poster-finetuning-regularization-sm.jpg',
        caption: 'Improved regularization and robustness for fine-tuning',
        date: 'NeurIPS 2021',
    },
    {
        src: 'gallery/poster-task-clustering-lg.jpg',
        thumb: 'gallery/poster-task-clustering-sm.jpg',
        caption: 'Approximate clustering for extracting task relationships',
        date: 'NeurIPS 2023 workshop',
    },
];

export const talks: Slide[] = [
    {
        src: 'https://img.youtube.com/vi/Wm61qG0XVB0/maxresdefault.jpg',
        videoId: 'Wm61qG0XVB0',
        caption: 'Boosting multitask learning on graphs through higher-order task affinities',
        date: 'KDD 2023',
    },
    {
        src: 'https://img.youtube.com/vi/hkMp4N4Fghs/hqdefault.jpg',
        videoId: 'hkMp4N4Fghs',
        caption: 'Generalization effects of linear transformations in data augmentation',
        date: 'Workshop on Equivariance and Data Augmentation, 2020',
    },
];
