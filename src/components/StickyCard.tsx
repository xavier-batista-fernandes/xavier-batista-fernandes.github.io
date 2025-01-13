import styled from "styled-components";

const Container = styled.div`
    height: 60vmin;
    width: 50vmin;
    position: sticky;
    top: 25vmin;
    background-color: #e63946;
    transform: translateX(100vmin);
`;

const Page = styled.div<{ $bgColor: string }>`
    height: 100vh;
    background-color: ${props => props.$bgColor};
    border-top: black 5px;
`;

const StickyCard = () => {

  return (
    <>
      <Page $bgColor={'#f1faee'}>
        {/*<Flex></Flex>*/}
        <h1>Xavier Fernandes</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          Nemo
          enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam
          quaerat voluptatem.</p>
      </Page>
      <Page $bgColor={'#a8dadc'}></Page>
      <Page $bgColor={'#457b9d'}>
        <Container></Container>
      </Page>
      <Page $bgColor={'#1d3557'}></Page>
      <Page $bgColor={'#e63946'}></Page>
    </>
  )
}

export default StickyCard;
