import { Container } from '../../../components/container/container.tsx';
import { Text } from '../../../components/text/text.tsx';
import { HoverImage } from '../../../components/images/hover-image/hover-image.tsx';

export const HeroSection = () => {
    // const imageUrls = [
    //     '/assets/photos/xavier_01.jpg',
    //     '/assets/photos/xavier_02.jpg',
    //     '/assets/photos/xavier_03.jpg',
    //     '/assets/photos/xavier_04.jpg',
    //     '/assets/photos/xavier_05.jpg',
    //     '/assets/photos/xavier_06.jpg',
    //     '/assets/photos/xavier_07.jpg',
    // ];
    const imageUrls = [
        'https://images.unsplash.com/photo-1739467516221-e4008797edb4?q=80&w=3097&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1739465595182-d3ec24f6ebcd?q=80&w=2683&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1739323006029-2d8452a47df6?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1739367889589-ca7e21a9128b?q=80&w=3259&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1739323924885-b68f59e7faca?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ];

    return (
        <Container
            height={'150vh'}
            width={'100%'}
            backgroundColor={'#efefef'}
            display={'flex'}
            alignItems={'center'}
        >
            <Container
                height={'100vh'}
                width={'100vw'}
                display={'flex'}
                alignItems={'center'}
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
                <Container
                    width={'750px'}
                    height={'1000px'}
                    overflow={'hidden'}
                >
                    <HoverImage imageUrls={imageUrls} />
                </Container>
            </Container>
        </Container>
    );
};
