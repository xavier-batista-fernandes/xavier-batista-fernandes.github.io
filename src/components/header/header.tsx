import { Container } from '../container/container.tsx';

export const Header = () => {
    return (
        <Container
            height={'10vmin'}
            position={'fixed'}
            background={'transparent'}
            border={''}
            zIndex={'500'}
        >
            this is the header
        </Container>
    );
};
