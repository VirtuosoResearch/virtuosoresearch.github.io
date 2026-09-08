import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './Highlights.css';

type Slide = {
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

/* Two frames of the same size sit side by side, each cycling through its own
   list: photos on the left, posters on the right. Both start on a random slide
   so the page doesn't open on the same pair every visit.

   To add to either rotation, drop the file in public/gallery/ and add an entry.
   Large images are worth downscaling first (a -sm copy near 900px for the frame
   and a -lg copy near 1600px for the lightbox) so the home page isn't loading
   camera JPEGs or print posters. An entry whose file is missing is dropped from
   the rotation rather than shown broken, which is why the defense photo can be
   added later without touching this file. */
const photos: Slide[] = [
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
    {
        src: 'gallery/group-dinner-2025-lg.jpg',
        thumb: 'gallery/group-dinner-2025-sm.jpg',
        caption: 'Lab dinner in Boston',
        date: 'Summer 2025',
    },
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

const posters: Slide[] = [
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
    /* A recorded talk can join either rotation; the tile gets a play badge and
       the lightbox opens the player:
    {
        src: 'https://img.youtube.com/vi/Wm61qG0XVB0/maxresdefault.jpg',
        videoId: 'Wm61qG0XVB0',
        caption: 'Boosting multitask learning on graphs',
        date: 'KDD 2023',
    },
    */
];

/* Slightly different periods, so the two frames drift apart instead of always
   changing at the same moment. */
const PHOTO_INTERVAL_MS = 6000;
const POSTER_INTERVAL_MS = 8000;

const tileOf = (slide: Slide) => slide.thumb ?? slide.src;

type FrameProps = {
    slides: Slide[];
    /* Which frame this is. Both crop to fill; posters get a wider mat and are
       anchored to their top edge. */
    kind: 'photo' | 'poster';
    intervalMs: number;
    paused: boolean;
    onOpen: (index: number) => void;
    onMissing: (src: string) => void;
};

const SlideFrame: React.FC<FrameProps> = ({
    slides,
    kind,
    intervalMs,
    paused,
    onOpen,
    onMissing,
}) => {
    /* The slide on screen is tracked by src rather than by position, because the
       list shrinks when a file turns out to be missing: an index would then
       silently point at a different slide and the caption would stop matching
       the image. */
    const [position, setPosition] = useState(() => ({
        current: slides[Math.floor(Math.random() * slides.length)].src,
        previous: null as string | null,
        /* Bumped on every change so the two crossfading layers get fresh keys
           and their animations restart. */
        tick: 0,
    }));
    const [held, setHeld] = useState(false);

    const count = slides.length;

    useEffect(() => {
        if (paused || held || count < 2) {
            return;
        }

        const timer = setInterval(() => {
            setPosition((prev) => {
                const at = slides.findIndex((slide) => slide.src === prev.current);
                return {
                    current: slides[(Math.max(at, 0) + 1) % count].src,
                    previous: prev.current,
                    tick: prev.tick + 1,
                };
            });
        }, intervalMs);

        return () => clearInterval(timer);
    }, [paused, held, count, intervalMs, slides]);

    /* Falls back to the first slide if the one on screen was the one that went
       missing. */
    const index = Math.max(
        slides.findIndex((slide) => slide.src === position.current),
        0
    );
    const current = slides[index];
    const previous = slides.find((slide) => slide.src === position.previous) ?? null;
    const next = slides[(index + 1) % count];

    return (
        <button
            type="button"
            className={`highlight-tile highlight-${kind}`}
            onClick={() => onOpen(index)}
            /* Holding still while someone is reading the caption or about to
               click, rather than changing under them. */
            onMouseEnter={() => setHeld(true)}
            onMouseLeave={() => setHeld(false)}
            onFocus={() => setHeld(true)}
            onBlur={() => setHeld(false)}
            aria-label={
                current.videoId
                    ? `Play recording: ${current.caption}`
                    : `Enlarge: ${current.caption}`
            }
        >
            <div className="highlight-frame">
                {previous && (
                    <img
                        key={`out-${position.tick}-${previous.src}`}
                        className="highlight-layer highlight-layer-out"
                        src={tileOf(previous)}
                        alt=""
                        aria-hidden="true"
                    />
                )}
                <img
                    key={`in-${position.tick}-${current.src}`}
                    className="highlight-layer highlight-layer-in"
                    src={tileOf(current)}
                    alt={current.caption}
                    onError={() => onMissing(current.src)}
                />
                {current.videoId && (
                    <span className="highlight-play" aria-hidden="true">
                        <svg viewBox="0 0 68 48" width="52" height="37">
                            <path
                                className="highlight-play-body"
                                d="M66.5 7.7a8.6 8.6 0 0 0-6-6C55.2 0 34 0 34 0S12.8 0 7.5 1.6a8.6 8.6 0 0 0-6 6.1A90 90 0 0 0 0 24a90 90 0 0 0 1.5 16.3 8.6 8.6 0 0 0 6 6C12.8 48 34 48 34 48s21.2 0 26.5-1.6a8.6 8.6 0 0 0 6-6.1A90 90 0 0 0 68 24a90 90 0 0 0-1.5-16.3z"
                            />
                            <path className="highlight-play-arrow" d="M45 24 27 14v20z" />
                        </svg>
                    </span>
                )}
                {/* Fetches the next slide while this one is on screen, so the
                    change is instant and a missing file is caught before it is
                    ever put on screen. */}
                {count > 1 && (
                    <img
                        className="highlight-preload"
                        src={tileOf(next)}
                        alt=""
                        aria-hidden="true"
                        onError={() => onMissing(next.src)}
                    />
                )}
            </div>
            <div className="highlight-caption">
                <span className="highlight-caption-text">{current.caption}</span>
                <span className="highlight-caption-date">{current.date}</span>
            </div>
        </button>
    );
};

type OpenState = { list: 'photos' | 'posters'; index: number };

const Highlights: React.FC = () => {
    /* Files that failed to load, so a slot that hasn't been filled in yet drops
       out of its rotation. */
    const [missing, setMissing] = useState<string[]>([]);
    const [open, setOpen] = useState<OpenState | null>(null);

    const markMissing = useCallback((src: string) => {
        setMissing((prev) => (prev.includes(src) ? prev : [...prev, src]));
    }, []);

    const livePhotos = useMemo(
        () => photos.filter((slide) => !missing.includes(slide.src)),
        [missing]
    );
    const livePosters = useMemo(
        () => posters.filter((slide) => !missing.includes(slide.src)),
        [missing]
    );

    const openList = open === null ? [] : open.list === 'photos' ? livePhotos : livePosters;

    const close = useCallback(() => setOpen(null), []);

    const step = useCallback(
        (delta: number) => {
            setOpen((prev) =>
                prev === null || openList.length === 0
                    ? prev
                    : { ...prev, index: (prev.index + delta + openList.length) % openList.length }
            );
        },
        [openList.length]
    );

    /* Keyboard control while the lightbox is open, plus a scroll lock so the
       page behind it doesn't move under the overlay. */
    useEffect(() => {
        if (open === null) {
            return;
        }

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                close();
            } else if (event.key === 'ArrowRight') {
                step(1);
            } else if (event.key === 'ArrowLeft') {
                step(-1);
            }
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [open, close, step]);

    if (livePhotos.length === 0 && livePosters.length === 0) {
        return null;
    }

    const shown = openList.length === 0 ? null : openList[open!.index % openList.length];

    return (
        <div className="section highlights">
            <h3>Photos and Posters</h3>
            <div className="highlights-row">
                {livePhotos.length > 0 && (
                    <SlideFrame
                        slides={livePhotos}
                        kind="photo"
                        intervalMs={PHOTO_INTERVAL_MS}
                        paused={open !== null}
                        onOpen={(index) => setOpen({ list: 'photos', index })}
                        onMissing={markMissing}
                    />
                )}
                {livePosters.length > 0 && (
                    <SlideFrame
                        slides={livePosters}
                        kind="poster"
                        intervalMs={POSTER_INTERVAL_MS}
                        paused={open !== null}
                        onOpen={(index) => setOpen({ list: 'posters', index })}
                        onMissing={markMissing}
                    />
                )}
            </div>

            {shown && (
                <div
                    className="lightbox"
                    role="dialog"
                    aria-modal="true"
                    aria-label={shown.caption}
                    onClick={close}
                >
                    <button
                        type="button"
                        className="lightbox-close"
                        onClick={close}
                        aria-label="Close"
                    >
                        &times;
                    </button>

                    {openList.length > 1 && (
                        <button
                            type="button"
                            className="lightbox-arrow lightbox-prev"
                            onClick={(event) => {
                                event.stopPropagation();
                                step(-1);
                            }}
                            aria-label="Previous"
                        >
                            &#8249;
                        </button>
                    )}

                    {/* Clicks inside the figure shouldn't fall through to the
                        backdrop handler that closes the lightbox. */}
                    <figure
                        className="lightbox-figure"
                        onClick={(event) => event.stopPropagation()}
                    >
                        {shown.videoId ? (
                            <div className="lightbox-video">
                                <iframe
                                    src={`https://www.youtube.com/embed/${shown.videoId}?autoplay=1`}
                                    title={shown.caption}
                                    allow="autoplay; encrypted-media; fullscreen"
                                    allowFullScreen
                                />
                            </div>
                        ) : (
                            <img src={shown.src} alt={shown.caption} />
                        )}
                        <figcaption>
                            <span className="lightbox-caption-text">{shown.caption}</span>
                            <span className="lightbox-caption-date">
                                {shown.date}
                                {openList.length > 1 &&
                                    ` · ${(open!.index % openList.length) + 1} / ${openList.length}`}
                            </span>
                        </figcaption>
                    </figure>

                    {openList.length > 1 && (
                        <button
                            type="button"
                            className="lightbox-arrow lightbox-next"
                            onClick={(event) => {
                                event.stopPropagation();
                                step(1);
                            }}
                            aria-label="Next"
                        >
                            &#8250;
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Highlights;
