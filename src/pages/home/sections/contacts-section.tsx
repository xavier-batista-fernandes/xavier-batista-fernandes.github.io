import { Container } from '../../../components/container/container.tsx';
import { Text } from '../../../components/text/text.tsx';
import { HomeButton } from '../../../components/buttons/home-button/home-button.tsx';
import { useNavigateWithTimeout } from '../../../hooks/useNavigateWithTimeout.ts';

export const ContactsSection = () => {
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
                    src="/assets/images/bottle.svg"
                    alt="lab"
                    width={'30rem'}
                    style={{ minWidth: '300px' }}
                />
                <Text fontSize={'220%'} fontWeight={'bold'} margin={'0 10%'}>
                    Got an idea or just want to say hello?
                </Text>
                <Text fontSize={'155%'} fontWeight={'lighter'} margin={'0 10%'}>
                    I'd love to hear from you!
                </Text>
                <HomeButton
                    secondaryColor={'#efd599'}
                    margin={'20px 0'}
                    width={'15rem'}
                    onClick={() => {
                        navigate('/contact', 250);
                    }}
                >
                    Contact
                </HomeButton>
            </Container>
        </Container>
    );
};
