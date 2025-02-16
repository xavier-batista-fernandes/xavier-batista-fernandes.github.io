import { CSSProperties, ReactNode } from 'react';

export interface TextProps {
    children: ReactNode;
    color?: string;
    fontFamily?: string;
    fontSize?: string;
    fontWeight?: CSSProperties['fontWeight'];
    margin?: string;
    textAlign?: CSSProperties['textAlign'];
}
