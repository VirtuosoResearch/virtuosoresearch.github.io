import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Slide, photos, posters, talks } from './galleryData';
import './Highlights.css';

/* How a frame crops what it shows:
   - photo: fills the frame.
   - poster: fills the frame anchored to the top edge, with a wider mat.
   - talk: the whole still is shown, so a slide's text isn't cut off at the
     sides of a 16:9 recording. */
type FrameKind = 'photo' | 'poster' | 'talk';

type FrameConfig = {
    kind: FrameKind;
    slides: Slide[];
    intervalMs: number;
};

/* Frames of the same size sit side by side, each cycling through its own list.
   The lists themselves live in galleryData.ts. Slightly different periods, so
   neighbouring frames drift apart instead of always changing at the same
   moment. Declared once here rather than inline in a page, so the frames keep
   the same identity across renders and their timers aren't restarted. */
const HOME_FRAMES: FrameConfig[] = [
    { kind: 'poster', slides: posters, intervalMs: 18000 },
    { kind: 'talk', slides: talks, intervalMs: 21000 },
];

const PHOTO_FRAMES: FrameConfig[] = [
    { kind: 'photo', slides: photos, intervalMs: 15000 },
];

const tileOf = (slide: Slide) => slide.thumb ?? slide.src;

type FrameProps = {
    slides: Slide[];
    kind: FrameKind;
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

type OpenState = { frame: number; index: number };

type GalleryProps = {
    title: string;
    frames: FrameConfig[];
};

const Gallery: React.FC<GalleryProps> = ({ title, frames }) => {
    /* Files that failed to load, so a slot that hasn't been filled in yet drops
       out of its rotation. */
    const [missing, setMissing] = useState<string[]>([]);
    const [open, setOpen] = useState<OpenState | null>(null);

    const markMissing = useCallback((src: string) => {
        setMissing((prev) => (prev.includes(src) ? prev : [...prev, src]));
    }, []);

    /* Positions are kept, so a frame's index still matches `frames` and the
       lightbox state, even when a frame has run out of slides. */
    const liveFrames = useMemo(
        () =>
            frames.map((frame) => ({
                ...frame,
                slides: frame.slides.filter((slide) => !missing.includes(slide.src)),
            })),
        [frames, missing]
    );

    const openList = open === null ? [] : liveFrames[open.frame].slides;

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

    const shownFrames = liveFrames.filter((frame) => frame.slides.length > 0);

    if (shownFrames.length === 0) {
        return null;
    }

    const shown = openList.length === 0 ? null : openList[open!.index % openList.length];

    return (
        <div className="section highlights">
            <h3>{title}</h3>
            <div
                className={
                    shownFrames.length === 1
                        ? 'highlights-row highlights-row-single'
                        : 'highlights-row'
                }
            >
                {liveFrames.map(
                    (frame, frameIndex) =>
                        frame.slides.length > 0 && (
                            <SlideFrame
                                key={frame.kind}
                                slides={frame.slides}
                                kind={frame.kind}
                                intervalMs={frame.intervalMs}
                                paused={open !== null}
                                onOpen={(index) => setOpen({ frame: frameIndex, index })}
                                onMissing={markMissing}
                            />
                        )
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

/* Home page: posters and recorded talks side by side. */
const Highlights: React.FC = () => <Gallery title="Posters and Talks" frames={HOME_FRAMES} />;

/* Resources page: the photo rotation on its own. */
export const PhotoGallery: React.FC = () => <Gallery title="Photos" frames={PHOTO_FRAMES} />;

export default Highlights;
