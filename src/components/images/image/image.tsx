import './image.css';
import { ImageProps } from './image.props.ts';
import React from 'react';

export const Image: React.FC<ImageProps> = ({
    height = '100%',
    width = '100%',
    borderRadius,
    overflow,
    src,
    alt,
}) => {
    return (
        <img
            src={src}
            alt={alt}
            style={{ height, width, borderRadius, overflow }}
        />
    );
};
