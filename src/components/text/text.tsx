import './text.css';
import { TextProps } from './text.props.ts';
import React from 'react';

export const Text: React.FC<TextProps> = ({
    children,
    color = 'black',
    fontFamily = 'inherit',
    fontSize,
    fontWeight,
    margin = '0',
    textAlign = 'center',
}) => {
    return <p style={{ color, fontFamily, fontSize, fontWeight, margin, textAlign }}>{children}</p>;
};
