import './container.css';
import { ContainerProps } from './container.props.ts';
import React from 'react';

export const Container: React.FC<ContainerProps> = ({
    children,
    height = '100%',
    width = '100%',
    margin,
    backgroundColor,
    display,
    justifyContent,
    flexDirection,
    gap,
}) => {
    return (
        <div
            style={{
                height,
                width,
                margin,
                backgroundColor,
                display,
                justifyContent,
                flexDirection,
                gap,
            }}
        >
            {children}
        </div>
    );
};
