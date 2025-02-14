import './home.css';
import { Container } from '../../components/container/container.tsx';
import { HomeButton } from '../../components/buttons/home-button/home-button.tsx';
import { Text } from '../../components/text/text.tsx';
import { useNavigateWithTimeout } from '../../hooks/useNavigateWithTimeout.ts';

export const Home = () => {
    const navigate = useNavigateWithTimeout();
    return (
        <>
            <Container
                height={'100vh'}
                width={'100%'}
                backgroundColor={'#efefef'}
                display={'flex'}
                alignItems={'center'}
            >
                <Container
                    height={'100vh'}
                    width={'100vw'}
                    display={'flex'}
                    justifyContent={'center'}
                    flexDirection={'column'}
                    gap={'25px'}
                >
                    <Text
                        color={'black'}
                        fontSize={'2.5rem'}
                        fontWeight={'bold'}
                        margin={'0 5%'}
                    >
                        My name is Xavier, and I am a Software Engineer.
                    </Text>
                    <Text
                        color={'black'}
                        fontSize={'1.5em'}
                        fontWeight={'lighter'}
                        margin={'0 5%'}
                    >
                        I build things for fun. Sometimes they even work!
                    </Text>
                </Container>
                {/*<Container height={'80%'} width={'50vw'}>*/}
                {/*    <Image*/}
                {/*        src="https://images.unsplash.com/photo-1607242792481-37f27e1d74e1?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"*/}
                {/*        alt="A cat facing the camera."*/}
                {/*        objectFit={'center'}*/}
                {/*    />*/}
                {/*</Container>*/}
            </Container>

            {/* Projects Section */}
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
                        src="/assets/images/projects.svg"
                        alt="lab"
                        width={'30rem'}
                        style={{ minWidth: '300px' }}
                    />
                    <Text
                        fontSize={'220%'}
                        fontWeight={'bold'}
                        margin={'0 10%'}
                    >
                        Some things I’ve built along the way.
                    </Text>
                    <Text
                        fontSize={'155%'}
                        fontWeight={'lighter'}
                        margin={'0 10%'}
                    >
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

            {/* Experience Section */}
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
                    <Text
                        fontSize={'220%'}
                        fontWeight={'bold'}
                        margin={'0 10%'}
                    >
                        A look back at my coding journey.
                    </Text>
                    <Text
                        fontSize={'155%'}
                        fontWeight={'lighter'}
                        margin={'0 10%'}
                    >
                        Where I started, what I’ve built, and how I got here.
                    </Text>
                    <HomeButton
                        // secondaryColor={'#e07a5f'}
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

            {/* Contact Section */}
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
                    <Text
                        fontSize={'220%'}
                        fontWeight={'bold'}
                        margin={'0 10%'}
                    >
                        Got an idea or just want to say hello?
                    </Text>
                    <Text
                        fontSize={'155%'}
                        fontWeight={'lighter'}
                        margin={'0 10%'}
                    >
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
        </>
    );
};
