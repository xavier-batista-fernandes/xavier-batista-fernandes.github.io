import { Container } from '../../../components/container/container.tsx';
import { Text } from '../../../components/text/text.tsx';
import { HomeButton } from '../../../components/buttons/home-button/home-button.tsx';
import { useNavigateWithTimeout } from '../../../hooks/useNavigateWithTimeout.ts';

export const ExperienceSection = () => {
    const navigate = useNavigateWithTimeout();

    return (
        <Container
            height={'100vh'}
            width={'100%'}
            backgroundColor={'#CDD993'}
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
                    src="/assets/images/book.svg"
                    alt="lab"
                    width={'30rem'}
                    style={{ minWidth: '300px' }}
                />
                <Text fontSize={'220%'} fontWeight={'bold'} margin={'0 10%'}>
                    A look back at my coding journey.
                </Text>
                <Text fontSize={'155%'} fontWeight={'lighter'} margin={'0 10%'}>
                    Where I started, what I’ve built, and how I got here.
                </Text>
                <HomeButton
                    secondaryColor={'#a7c957'}
                    margin={'20px 0'}
                    width={'15rem'}
                    onClick={() => {
                        navigate('/experience', 250);
                    }}
                >
                    Experience
                </HomeButton>
            </Container>
        </Container>
    );
};
