import './projects.css';
import { Text } from '../../components/text/text.tsx';
import { HomeButton } from '../../components/buttons/home-button/home-button.tsx';
import { Container } from '../../components/container/container.tsx';
import { useNavigateWithTimeout } from '../../hooks/useNavigateWithTimeout.ts';

export const Projects = () => {
    const navigate = useNavigateWithTimeout();

    return (
        <Container
            backgroundColor={'#89c2d9'}
            height={'100vh'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={'25px'}
        >
            <Text fontSize={'200%'}>My side projects</Text>
            <HomeButton width={'50%'} onClick={() => navigate('/', 250)}>
                Take me back
            </HomeButton>
        </Container>
    );
};
