import { Container } from '../../components/container/container.tsx';
import { HomeButton } from '../../components/buttons/home-button/home-button.tsx';
import { Text } from '../../components/text/text.tsx';
import { useNavigateWithTimeout } from '../../hooks/useNavigateWithTimeout.ts';

export const Experience = () => {
    const navigate = useNavigateWithTimeout();

    return (
        <Container
            backgroundColor={'#ffedd8'}
            height={'100vh'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={'25px'}
        >
            <Text fontSize={'200%'}>My road so far</Text>
            <HomeButton width={'50%'} onClick={() => navigate('/', 250)}>
                Take me back
            </HomeButton>
        </Container>
    );
};
