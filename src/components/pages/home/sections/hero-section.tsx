import { Container } from '../../../atoms/container/container.tsx';
import { Text } from '../../../atoms/text/text.tsx';
import { HeroTitle } from '../../../molecules/hero-title/hero-title.tsx';
import { HoverImage } from '../../../molecules/images/hover-image/hover-image.tsx';

export const HeroSection = () => {
    const imageUrls = [
        '/assets/photos/xavier_01.jpg',
        '/assets/photos/xavier_02.jpg',
        '/assets/photos/xavier_03.jpg',
        '/assets/photos/xavier_04.jpg',
        '/assets/photos/xavier_05.jpg',
    ];

    return (
        <Container
            height={'100vh'}
            width={'100%'}
            background={'linear-gradient(to right, #edf6f9 70%, #83c5be 70%)'}
            display={'flex'}
            alignItems={'center'}
            position={'relative'}
        >
            <Container
                height={'100vh'}
                width={'60%'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                flexDirection={'column'}
                gap={'25px'}
            >
                <HeroTitle />
                <Text
                    color={'black'}
                    fontSize={'1.5em'}
                    fontWeight={'lighter'}
                    margin={'0 5%'}
                    textAlign={'center'}
                >
                    I build things for fun. Sometimes they even work!
                </Text>
            </Container>
            <Container
                width={'30%'}
                height={'70%'}
                overflow={'hidden'}
                position={'absolute'}
                top={'15%'}
                right={'10%'}
                boxShadow={'#1b263b 25px 25px 50px'} // TODO: make the shadow move with the cursor
            >
                <HoverImage imageUrls={imageUrls} />
            </Container>
        </Container>
    );
};
