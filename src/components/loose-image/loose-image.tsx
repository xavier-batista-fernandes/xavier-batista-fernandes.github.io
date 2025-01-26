import './loose-image.css';
import { useEffect } from 'react';

export const LooseImage = () => {
    useEffect(() => {
        window.onmousemove = (event) => {
            const offsetX = (event.clientX / window.innerWidth - 0.5) * 5;
            const offsetY = (event.clientY / window.innerHeight - 0.5) * 3;

            const image: HTMLElement | null =
                document!.querySelector('#portrait > img');

            image?.animate(
                {
                    left: `${50 + offsetX * 0.75}%`,
                    top: `${50 + offsetY * 0.75}%`,
                },
                { duration: 3000, fill: 'forwards' },
            );

            const portrait = document.getElementById('portrait');
            portrait?.animate(
                {
                    boxShadow: `${offsetX * -5}px ${offsetY * -5}px 10px #030427`,
                },
                {
                    duration: 1000,
                    fill: 'forwards',
                },
            );
        };
    });

    return (
        <div id="portrait">
            <img
                src="https://images.unsplash.com/photo-1607242792481-37f27e1d74e1?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="A portrait of Xavier"
            />
        </div>
    );
};
