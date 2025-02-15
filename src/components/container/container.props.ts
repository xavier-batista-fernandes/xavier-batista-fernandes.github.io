import React, { CSSProperties } from 'react';

export interface ContainerProps {
    children?: React.ReactNode;
    height?: CSSProperties['height'];
    width?: CSSProperties['width'];
    position?: CSSProperties['position'];
    left?: CSSProperties['left'];
    right?: CSSProperties['right'];
    top?: CSSProperties['top'];
    bottom?: CSSProperties['bottom'];
    padding?: CSSProperties['padding'];
    margin?: CSSProperties['margin'];
    background?: CSSProperties['background'];
    backgroundColor?: CSSProperties['backgroundColor'];
    overflow?: CSSProperties['overflow'];
    display?: CSSProperties['display'];
    justifyContent?: CSSProperties['justifyContent'];
    alignItems?: CSSProperties['alignItems'];
    flexDirection?: CSSProperties['flexDirection'];
    gap?: CSSProperties['gap'];
    boxShadow?: CSSProperties['boxShadow'];
    border?: CSSProperties['border'];
    zIndex?: CSSProperties['zIndex'];
    transition?: CSSProperties['transition'];
}
