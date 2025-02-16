import { HoverImageProps } from './hover-image.props.ts';
import { FC, useEffect, useState } from 'react';

export const HoverImage: FC<HoverImageProps> = ({ imageUrls }) => {
    const [imageSrc, setImageSrc] = useState(imageUrls[0]);
    let imageIndex = 0;

    useEffect(() => {
        const imageElement = document.querySelector('img');
        if (!imageElement) return;

        let interval: number;
        const handleMouseEnter = () => {
            interval = setInterval(() => {
                imageIndex = (imageIndex + 1) % imageUrls.length;
                setImageSrc(imageUrls[imageIndex]);
            }, 200);
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
                src={imageSrc}
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
