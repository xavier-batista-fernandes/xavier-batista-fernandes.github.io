import './projects.css';
import { Text } from '../../atoms/text/text.tsx';
import { HomeButton } from '../../atoms/buttons/home-button/home-button.tsx';
import { Container } from '../../atoms/container/container.tsx';
import { useNavigateWithTimeout } from '../../../hooks/useNavigateWithTimeout.ts';

export const Projects = () => {
    const navigate = useNavigateWithTimeout();

    return (
        <>
            {/*<Blocks />*/}
            <Container
                backgroundColor={'#a0cad1'}
                height={'100vh'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={'25px'}
            >
                <Text fontSize={'200%'}>My side projects...</Text>
                <HomeButton
                    secondaryColor={'#669dac'}
                    width={'15rem'}
                    onClick={() => navigate('/', 250)}
                >
                    Take me back
                </HomeButton>
            </Container>
        </>
    );
};
