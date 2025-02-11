import React from 'react';

export interface HomeButtonProps {
    children: React.ReactNode;
    primaryColor?: string;
    secondaryColor?: string;
    fontSize?: string;
    width?: string;
    margin?: string;
    onClick: () => void;
}
