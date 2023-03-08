import React from "react";

import styled from "styled-components";
import images from "../../constants/images";

const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  background: var(--color-black);
  font-family: var(--font-base);
`;
const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  background: var(--color-black);
`;
const Left = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background: var(--color-black);
`;
const Right = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
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
const H1 = styled.h1`
  font-family: var(--font-base);
  color: var(--color-golden);
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  line-height: 117px;
  font-size: 90px;
`;
const P = styled.p`
  font-family: var(--font-alt);
  color: var(--color-white);
  font-weight: 400;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  line-height: 28px;
  font-size: 16px;
  margin: 2rem 0;
`;
const Button = styled.div`
  background-color: var(--color-crimson);
  color: var(--color-black);
  font-family: var(--font-base);
  font-weight: 700;
  letter-spacing: 0.04em;
  line-height: 28px;
  font-size: 16px;
  padding: 0.5rem 1.5rem;
  border-radius: 1px;
  border: none;
  outline: none;
  cursor: pointer;
`;
const ImgLeft = styled.img`
  width: 45px;
`;
const ImgRight = styled.img`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
`;

const Header = () => (
  <Section>
    <Container>
      <Left>
        <H5>chase The New Flavour</H5>
        <ImgLeft src={images.spoon} alt="spoon" />
        <H1>The Key To Fine Dining</H1>
        <P>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </P>
        <Button>Explore Menu</Button>
      </Left>
      <Right>
        <ImgRight src={images.welcome} alt="welcome" />
      </Right>
    </Container>
  </Section>
);

export default Header;
