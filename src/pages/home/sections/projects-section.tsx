import { Container } from '../../../components/container/container.tsx';
import { Text } from '../../../components/text/text.tsx';
import { HomeButton } from '../../../components/buttons/home-button/home-button.tsx';
import { useNavigateWithTimeout } from '../../../hooks/useNavigateWithTimeout.ts';

export const ProjectsSection = () => {
    const navigate = useNavigateWithTimeout();

    return (
        <Container
            height={'100vh'}
            width={'100%'}
            backgroundColor={'#f2e8cf'}
            display={'flex'}
        >
            <Container
                width={'100%'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={'10px'}
            >
                <img
                    src="/assets/images/laptop.svg"
                    alt="lab"
                    width={'40rem'}
                    style={{ minWidth: '300px' }}
                />
                <Text fontSize={'220%'} fontWeight={'bold'} margin={'0 10%'}>
                    Some things I’ve built along the way.
                </Text>
                <Text fontSize={'155%'} fontWeight={'lighter'} margin={'0 10%'}>
                    See what I’ve been up to.
                </Text>
                <HomeButton
                    secondaryColor={'#efd599'}
                    margin={'20px 0'}
                    width={'15rem'}
                    onClick={() => {
                        navigate('/projects', 250);
                    }}
                >
                    Projects
                </HomeButton>
            </Container>
        </Container>
    );
};
