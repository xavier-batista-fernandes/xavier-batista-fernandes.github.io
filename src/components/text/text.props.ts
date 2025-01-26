import React, { CSSProperties } from 'react';

export interface TextProps {
    children: React.ReactNode;
    color?: string;
    fontFamily?: string;
    fontSize?: string;
    fontWeight?: CSSProperties['fontWeight'];
    textAlign?: CSSProperties['textAlign'];
}
