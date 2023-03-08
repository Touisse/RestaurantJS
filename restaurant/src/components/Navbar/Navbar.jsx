import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-black);

  padding: 1rem 2rem;
  @media screen and (max-width: 650px) {
    padding: 1rem;
  }
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-black);
`;
const Logo = styled.img`
  width: 150px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media screen and (min-width: 2000px) {
    width: 210px;
  }
  @media screen and (max-width: 650px) {
    width: 110px;
  }
`;
const List = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  flex: 1;
  @media screen and (max-width: 1150px) {
    display: none;
  }
`;
const SList = styled.ul`
  list-style: none;
`;
const SListMenu = styled.li`
  margin: 2rem;
  cursor: pointer;
  color: #dcca87;
  font-size: 2rem;
  text-align: center;
  font-family: var(--font-base);
`;
const ListMenu = styled.li`
  cursor: pointer;
  margin: 0 1rem;
  &:hover {
    color: grey;
  }
`;
const Button = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 250px;
  @media screen and (max-width: 650px) {
    display: none;
  }
`;
const Book = styled.a`
  margin: 0 1rem;
  text-decoration: none;
  transition: 0.5s ease;
  &:hover {
    border-bottom: 1px solid #dcca87;
  }
`;
const Line = styled.div`
  width: 1px;
  height: 30px;
  background-color: gray;
`;
const Small = styled.div`
  display: none;
  @media screen and (max-width: 1150px) {
    display: flex;
    align-items: center;
  }
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--color-black);
  transition: 0.5s ease;

  flex-direction: column;
  z-index: 5;
`;

const Navbar = () => {
  const [toggleMenu, setToggelMenu] = useState(false);
  return (
    <Nav>
      <Container>
        <Logo src={images.gericht} alt="logo" />
        <List>
          <ListMenu>Home</ListMenu>
          <ListMenu>About</ListMenu>
          <ListMenu>Menu</ListMenu>
          <ListMenu>Awards</ListMenu>
          <ListMenu>Contact</ListMenu>
        </List>
        <Button>
          <Book href="#login">Log In / Register</Book>
          <Line />
          <Book href="/">Book Table</Book>
        </Button>
        <Small>
          <GiHamburgerMenu
            color="#fff"
            fontSize={27}
            onClick={() => {
              setToggelMenu(true);
            }}
          />

          {toggleMenu && (
            <Overlay>
              <MdOutlineRestaurantMenu
                onClick={() => {
                  setToggelMenu(false);
                }}
                style={{
                  fontSize: "27px",
                  color: "#DCCA87",
                  cursor: "pointer",
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                }}
              />
              <SList>
                <SListMenu>Home</SListMenu>
                <SListMenu>About</SListMenu>
                <SListMenu>Menu</SListMenu>
                <SListMenu>Awards</SListMenu>
                <SListMenu>Contact</SListMenu>
              </SList>
            </Overlay>
          )}
        </Small>
      </Container>
    </Nav>
  );
};

export default Navbar;
