import React from 'react';

export interface HomeButtonProps {
    children: React.ReactNode;
    width?: string;
    margin?: string;
    onClick: () => void;
}
