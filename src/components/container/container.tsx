import React from 'react';
import './container.css';
import { ContainerProps } from './container.props';

export const Container: React.FC<ContainerProps> = ({
    children,
    height = '100%',
    width = '100%',
    position,
    left,
    right,
    top,
    bottom,
    padding,
    margin,
    background,
    backgroundColor,
    overflow,
    display,
    justifyContent,
    alignItems,
    flexDirection,
    gap,
    boxShadow,
    zIndex,
    border,
    transition,
}) => {
    const style: React.CSSProperties = {
        height,
        width,
        padding,
        margin,
        background,
        backgroundColor,
        overflow,
        position,
        display,
        boxShadow,
        border,
        transition,
    };

    if (position !== 'static') {
        if (left !== undefined) style.left = left;
        if (right !== undefined) style.right = right;
        if (top !== undefined) style.top = top;
        if (bottom !== undefined) style.bottom = bottom;
        if (zIndex !== undefined) style.zIndex = zIndex;
    }

    if (display === 'flex') {
        if (justifyContent !== undefined) style.justifyContent = justifyContent;
        if (alignItems !== undefined) style.alignItems = alignItems;
        if (flexDirection !== undefined) style.flexDirection = flexDirection;
        if (gap !== undefined) style.gap = gap;
    }

    return <div style={style}>{children}</div>;
};
