import './container.css';
import { ContainerProps } from './container.props.ts';
import React from 'react';

export const Container: React.FC<ContainerProps> = ({
    children,
    height = '100%',
    width = '100%',
    position,
    padding,
    margin,
    backgroundColor,
    overflow,
    display,
    justifyContent,
    alignItems,
    flexDirection,
    gap,
}) => {
    return (
        <div
            style={{
                height,
                width,
                position,
                padding,
                margin,
                backgroundColor,
                overflow,
                display,
                justifyContent,
                alignItems,
                flexDirection,
                gap,
            }}
        >
            {children}
        </div>
    );
};
