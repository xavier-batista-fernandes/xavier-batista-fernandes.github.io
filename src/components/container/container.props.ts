import React, { CSSProperties } from 'react';

export interface ContainerProps {
    children?: React.ReactNode;
    height?: string;
    width?: string;
    margin?: string;
    backgroundColor?: string;
    display?: CSSProperties['display'];
    justifyContent?: CSSProperties['justifyContent'];
    alignItems?: CSSProperties['alignItems'];
    flexDirection?: CSSProperties['flexDirection'];
    gap?: string;
}
