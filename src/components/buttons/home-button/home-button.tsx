import './home-button.css';
import { HomeButtonProps } from './home-button.props.ts';
import React from 'react';

export const HomeButton: React.FC<HomeButtonProps> = ({
    children,
    margin,
    onClick,
}) => {
    return (
        <button onClick={onClick} style={{ margin }}>
            {children}
        </button>
    );
};
