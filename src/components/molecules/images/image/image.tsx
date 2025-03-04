import './image.css';
import { ImageProps } from './image.props.ts';
import { FC } from 'react';

export const Image: FC<ImageProps> = ({
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
