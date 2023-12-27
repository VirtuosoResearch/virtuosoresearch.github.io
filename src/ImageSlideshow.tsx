// ImageSlideshow.tsx
import React, { useState, useEffect } from 'react';
import './ImageSlideshow.css';

const ImageSlideshow: React.FC = () => {
    // const path = require('path.join');
    const imageUrls = [
		'home_images/NeurIPS_2021_Poster.png',
		'home_images/task_modeling_poster.png',
		'home_images/NeurIPS_2023_Poster.png',
		'home_images/AISTATS2023.jpg',
		'home_images/noise-stability-optimization-poster.png',
		'home_images/NeurIPS_Instruction_Workshop_2023.png',
		'home_images/SDM_2023_Poster.png',
//        'ai3.jpg',
////        'home_images/icml22.jpeg',
//        'home_images/informs23.JPEG',
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        // Set up a timer to automatically advance to the next image every 3 seconds
        const timer = setInterval(nextImage, 26000);

        // Clear the timer when the component unmounts
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="slideshow-container">
            <div className="slideshow-nav">
                <button onClick={prevImage} className="nav-button prev-button">
                    &lt;
                </button>
                <button onClick={nextImage} className="nav-button next-button">
                    &gt;
                </button>
            </div>
            <a href={imageUrls[currentImageIndex]}>
                <img
                    src={imageUrls[currentImageIndex]}
                    alt={`Image ${currentImageIndex + 1}`}
                    className="slideshow-image"
                />
            </a>
        </div>
    );
};

export default ImageSlideshow;
