import React, { CSSProperties } from 'react';

export interface ContainerProps {
    children?: React.ReactNode;
    height?: string;
    width?: string;
    position?: CSSProperties['position'];
    padding?: string;
    margin?: string;
    backgroundColor?: string;
    overflow?: CSSProperties['overflow'];
    display?: CSSProperties['display'];
    justifyContent?: CSSProperties['justifyContent'];
    alignItems?: CSSProperties['alignItems'];
    flexDirection?: CSSProperties['flexDirection'];
    gap?: string;
}
