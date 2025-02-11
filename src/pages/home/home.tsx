import './home.css';
import { Container } from '../../components/container/container.tsx';
import { HomeButton } from '../../components/buttons/home-button/home-button.tsx';
import { Text } from '../../components/text/text.tsx';
import { useNavigateWithTimeout } from '../../hooks/useNavigateWithTimeout.ts';

export const Home = () => {
    const navigate = useNavigateWithTimeout();
    return (
        <>
            <div className={'page'}>
                <Container
                    height={'100vh'}
                    width={'100%'}
                    backgroundColor={'#DDE4B3'}
                    display={'flex'}
                    justifyContent={'center'}
                    flexDirection={'column'}
                    gap={'25px'}
                >
                    <Text
                        color={'black'}
                        fontFamily={'inherit'}
                        fontSize={'3em'}
                    >
                        My name is Xavier, and I am a Software Engineer.
                    </Text>
                    <Text color={'black'} fontSize={'1.25em'}>
                        I build things for fun. Sometimes they even work!
                    </Text>
                </Container>

                {/* Projects Section */}
                <Container
                    height={'100vh'}
                    width={'100%'}
                    backgroundColor={'#CDD993'}
                    display={'flex'}
                >
                    <div style={{ width: '50%' }}></div>
                    <Container
                        width={'50%'}
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        gap={'25px'}
                    >
                        <HomeButton
                            margin={'0 25%'}
                            onClick={() => {
                                navigate('/projects', 250);
                            }}
                        >
                            Projects
                        </HomeButton>
                        <Text>
                            Some things I’ve built along the way. See what I’ve
                            been up to.
                        </Text>
                    </Container>
                </Container>

                {/* Experience Section */}
                <Container
                    height={'100vh'}
                    width={'100%'}
                    backgroundColor={'#BAD175'}
                    display={'flex'}
                >
                    <Container
                        width={'50%'}
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        gap={'25px'}
                    >
                        <HomeButton
                            margin={'0 25%'}
                            onClick={() => {
                                navigate('/experience', 250);
                            }}
                        >
                            Experience
                        </HomeButton>
                        <Text>
                            A look back at my coding journey. — where I started,
                            what I’ve built, and how I got here.
                        </Text>
                    </Container>
                    <div style={{ width: '50%' }}></div>
                </Container>

                {/* Contact Section */}
                <Container
                    height={'100vh'}
                    width={'100%'}
                    backgroundColor={'#adc178'}
                    display={'flex'}
                >
                    <div style={{ width: '50%' }}></div>
                    <Container
                        width={'50%'}
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        gap={'25px'}
                    >
                        <HomeButton
                            margin={'0 25%'}
                            onClick={() => {
                                navigate('/contact', 250);
                            }}
                        >
                            Contact
                        </HomeButton>
                        <Text>
                            Got a question, an idea, or just want to say hello?
                        </Text>
                    </Container>
                </Container>
            </div>
        </>
    );
};
