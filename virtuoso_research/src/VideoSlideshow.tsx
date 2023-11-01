import React, { useState, useEffect } from 'react';
import './VideoSlideshow.css';

const videoUrls = [
    'https://www.youtube.com/embed/Wm61qG0XVB0',
    'https://www.youtube.com/embed/NpEaa2P7qZI',
    // Add more video urls here
];

const VideoSlideshow: React.FC = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const nextVideo = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
    };

    const prevVideo = () => {
        setCurrentVideoIndex((prevIndex) =>
            prevIndex === 0 ? videoUrls.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        // Set up a timer to automatically advance to the next video every 16 seconds (since you have two videos)
        const timer = setInterval(nextVideo, 16000);

        // Clear the timer when the component unmounts
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="video-slideshow-container">
            <div className="video-slideshow-nav">
                <button onClick={prevVideo} className="video-nav-button video-prev-button">
                    &lt;
                </button>
                <button onClick={nextVideo} className="video-nav-button video-next-button">
                    &gt;
                </button>
            </div>
            <div className="video-container">
                <iframe
                    width="640"
                    height="385"
                    src={videoUrls[currentVideoIndex]}
                    title={`Video ${currentVideoIndex + 1}`}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default VideoSlideshow;
