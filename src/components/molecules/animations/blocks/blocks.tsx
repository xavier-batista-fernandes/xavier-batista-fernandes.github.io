import './blocks.css';
import { useEffect } from 'react';

export const Blocks = () => {
    useEffect(() => {
        console.log('running effect');
        const block1 = document.getElementById('block-1');

        setInterval(() => {
            const rotate = `${Math.floor(Math.random() * 4 + 1) * 90}deg`;
            const duration = Math.floor(Math.random() * 2000) + 500;
            // TODO: understand why this duration is throwing an error.
            console.log(`Rotating ${rotate} for ${duration}ms.`);
            block1?.animate(
                { rotate },
                { duration: duration, easing: 'ease-out' },
            );
        }, 2500);

        setInterval(() => {
            const top = `${Math.random() * 50 + 20}%`;
            const left = `${Math.random() * 50 + 20}%`;
            console.log(`Moving to (${top}, ${left}).`);
            block1?.animate(
                {
                    top,
                    left,
                },
                {
                    duration: 1000,
                    fill: 'forwards',
                    easing: 'ease-out',
                },
            );
        }, 5000);

        // window.onkeydown = (event) => {
        //     console.log('event', event);
        //     console.log('block1css:', block1!.style);
        //     block1?.animate(
        //         { left: '50%', top: '50%' },
        //         { duration: 1000, fill: 'forwards', easing: 'ease-in-out' },
        //     );
        // };
    }, []);

    return (
        <div id="container">
            <div id="block-1"></div>
            {/*<div id="block-2"></div>*/}
        </div>
    );
};
