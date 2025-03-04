import { HoverImageProps } from './hover-image.props.ts';
import { FC, useEffect, useState } from 'react';

export const HoverImage: FC<HoverImageProps> = ({ imageUrls }) => {
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        const imageElement = document.querySelector('img');
        if (!imageElement) return;

        let interval: number;
        const handleMouseEnter = () => {
            interval = setInterval(() => {
                setImageIndex((prev) => (prev + 1) % imageUrls.length);
            }, 175);
        };
        const handleMouseLeave = () => {
            if (interval) {
                clearInterval(interval);
            }
        };

        imageElement.addEventListener('mouseenter', handleMouseEnter);
        imageElement.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            handleMouseLeave();
            imageElement.removeEventListener('mouseenter', handleMouseEnter);
            imageElement.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <>
            <img
                id="portrait"
                src={imageUrls[imageIndex]}
                style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                    // transform: 'scale(1.25)',
                    transformOrigin: 'center',
                }}
                alt={'A photo of Xavier smiling, during a dark night.'}
            />
        </>
    );
};
