import { Container } from '../../atoms/container/container.tsx';
import { Text } from '../../atoms/text/text.tsx';
import { useEffect, useState } from 'react';

export const Header = () => {
    const [top, setTop] = useState('-10vmin');

    const handleScroll = () => {
        window.scrollY === 0 ? setTop('-10vmin') : setTop('0');
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Container
            height={'10vmin'}
            position={'fixed'}
            padding={'0 10%'}
            backgroundColor={'#ff9b54'}
            zIndex={'500'}
            display={'flex'}
            justifyContent={'start'}
            alignItems={'center'}
            top={top}
            transition={'top 0.5s ease-out'}
        >
            <Text color={'black'} fontSize={'150%'} fontWeight={'bold'}>
                This is the header.
            </Text>
        </Container>
    );
};
