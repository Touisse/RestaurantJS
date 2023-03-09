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
  @media screen and (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    position: relative;
    padding-bottom: 15rem;
    padding-top: 0;
  }
`;
const Left = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  background: var(--color-black);
  text-align: right;
  z-index: 2;
`;
const Right = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 2rem;
  z-index: 2;
`;
const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  background: var(--color-black);
  position: relative;
  @media screen and (max-width: 900px) {
    margin: 10rem 0;
    width: 100%;
  }
`;
const Img = styled.img`
  width: 150px;
  height: 910px;
  position: absolute;
  z-index: 2;
  @media screen and (max-width: 900px) {
    margin: 5rem 0;
    width: 100px;
    height: 500px;
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
const P = styled.p`
  font-family: var(--font-alt);
  color: var(--color-grey);
  font-weight: 400;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  line-height: 28px;
  font-size: 16px;
  margin: 2rem 0;
  @media screen and (min-width: 2000px) {
    margin: 4rem 0;
  }
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
const H1R = styled.h1`
  font-family: var(--font-base);
  color: var(--color-golden);
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  line-height: 117px;
  font-size: 90px;
`;
const PR = styled.p`
  font-family: var(--font-alt);
  color: var(--color-grey);
  font-weight: 400;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  line-height: 28px;
  font-size: 16px;
  margin: 2rem 0;
  @media screen and (min-width: 2000px) {
    margin: 4rem 0;
  }
`;
const ImgRight = styled.img`
  width: 45px;
`;
const CenterG = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

const ImgG = styled.img`
  width: 391px;
  height: 415px;
  z-index: 1;
  @media screen and (max-width: 650px) {
    width: 80%;
    height: 320px;
  }
`;
const AboutUs = () => (
  <Section>
    <Container>
      <Left>
        <H1>About Us</H1>
        <ImgLeft src={images.spoon} alt="spoon" />
        <P>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </P>
        <Button>Know More</Button>
      </Left>
      <Center>
        <CenterG>
          <ImgG src={images.G} alt="G" />
        </CenterG>
        <Img src={images.knife} alt="knife" />
      </Center>
      <Right>
        <H1R>Our History</H1R>
        <ImgRight src={images.spoon} alt="spoon" />
        <PR>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </PR>
        <Button>Know More</Button>
      </Right>
    </Container>
  </Section>
);

export default AboutUs;
