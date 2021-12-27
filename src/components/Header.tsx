import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/js/all.js';
import { Link } from 'react-router-dom';
import AllMenu from './AllMenu';

const Wrapper = styled(motion.header)`
  width: 100%;
  padding: 16px 24px;
  position: fixed;
  top: 0;
  background-color: transparent;
`;

const Layout = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 0;
  margin-right: 0;
  margin: auto;
`;

const Logo = styled.div`
  width: 200px;
  img {
    width: 100%;
  }
`;

const Nav = styled.ul`
  width: 40%;
  display: flex;
  justify-content: space-between;
`;

const Item = styled.li`
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;
  transition: color 150ms;
  &:hover {
    color: ${(props) => props.theme.mainColor};
  }
`;

const AllMenuBtn = styled.button`
  border: 0;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  svg {
    font-size: 18px;
    color: white;
    transition: color 150ms;
    &:hover {
      color: ${(props) => props.theme.mainColor};
    }
  }
`;

const Header = () => {
  const [openAllMenu, setOpenAllMenu] = useState(false);

  return (
    <Wrapper>
      <Layout>
        <Logo>
          <img src="logo.png" alt="" />
        </Logo>
        <Nav>
          <Item>
            <Link to="/">im1l coffee</Link>
          </Item>
          <Item>
            <Link to="/">franchise</Link>
          </Item>
          <Item>
            <Link to="/menu">menu</Link>
          </Item>
          <Item>
            <Link to="/">store</Link>
          </Item>
          <Item>
            <Link to="/">news</Link>
          </Item>
        </Nav>
        <AllMenuBtn onClick={() => setOpenAllMenu(true)}>
          <i className="fas fa-bars"></i>
        </AllMenuBtn>
      </Layout>
      {openAllMenu ? <AllMenu setOpenAllMenu={setOpenAllMenu} /> : null}
    </Wrapper>
  );
};

export default Header;
