import React from "react";
import styled from "styled-components";
import { images, data } from "../../constants";
const Section = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: var(--color-black);
  font-family: var(--font-base);
  @media screen and (max-width: 1150px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: relative;
  }
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;
const Head = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  text-align: center;
  padding: 4rem 6rem;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  @media screen and (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;
const Left = styled.div`
  flex: 1;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: var(--color-black);
  margin-left: 2rem;
`;
const Center = styled.div`
  width: 410px;
  margin: 0 2rem;
  @media screen and (max-width: 1150px) {
    margin: 3rem 0;
  }
  @media screen and (max-width: 650px) {
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Right = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: var(--color-black);
  margin-right: 2rem;
  /* @media screen and (max-width: 650px) {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  } */
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-black);
  @media screen and (max-width: 650px) {
    padding: 2rem;
  }
`;
const H1 = styled.h1`
  font-family: var(--font-base);
  color: var(--color-golden);
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  line-height: 117px;
  font-size: 90px;
`;
const H5 = styled.h5`
  font-family: var(--font-base);
  color: var(--color-white);
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  font-feature-settings: "tnum" on, "lnum" on;
  line-height: 29.9px;
  font-size: 23px;
`;
const ImgHead = styled.img`
  width: 45px;
`;
const ImgCenter = styled.img`
  width: 100%;
  height: auto;
  @media screen and (max-width: 650px) {
    width: 400px;
    height: 600px;
  }
`;
const Pleft = styled.p`
  font-family: "Cormorant Upright";
  font-style: normal;
  font-weight: 600;
  font-size: 45px;
  line-height: 130%;
  width: 243px;
  height: 58px;
`;
const P = styled.p`
  font-family: "Cormorant Upright";
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 130%;
  color: #dcca87;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  font-feature-settings: "tnum" on, "lnum" on;
`;
const Price = styled.p`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
const Dash = styled.div`
  width: 90px;
  height: 1px;
  background: var(--color-golden);
  margin: 0 1rem;
`;
const Sub = styled.p`
  width: 100%;
  margin-top: 0.2rem;
  color: #aaaaaa;
`;
const MenuItems = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 32px;

  width: 136px;
  height: 44px;

  /* DCCA87 */

  background: #dcca87;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
  cursor: pointer;
`;

const SpecialMenu = () => (
  <Section>
    <Head>
      <H5>Menu That Fits You Palette</H5>
      <ImgHead src={images.spoon} alt="spoon" />
      <H1>Today's Special</H1>
    </Head>
    <Container>
      <Left>
        <Pleft>Wine & Beer</Pleft>
        {data.wines.map((wine, index) => (
          <MenuItems>
            <Header>
              <P>{wine.title}</P>
              <Dash />
              <Price>{wine.price}</Price>
            </Header>
            <Sub>{wine.tags}</Sub>
          </MenuItems>
        ))}
      </Left>
      <Center>
        <ImgCenter src={images.menu} alt="menu" />
      </Center>
      <Right>
        <Pleft>Cocktails</Pleft>
        {data.cocktails.map((cocktail, index) => (
          <MenuItems>
            <Header>
              <P>{cocktail.title}</P>
              <Dash />
              <Price>{cocktail.price}</Price>
            </Header>
            <Sub>{cocktail.tags}</Sub>
          </MenuItems>
        ))}
      </Right>
    </Container>
    <Bottom>
      <Button>View More</Button>
    </Bottom>
  </Section>
);

export default SpecialMenu;
