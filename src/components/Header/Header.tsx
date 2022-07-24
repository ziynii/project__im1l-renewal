import { motion, useAnimation, useViewportScroll } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/js/all.js';
import { Link } from 'react-router-dom';
import AllMenu from './AllMenu';

const Layout = styled.div`
  max-width: 1280px;
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

const Nav = styled.ul<{ navTextColor: string }>`
  width: 40%;
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.navTextColor};
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

const AllMenuBtn = styled.button<{ navTextColor: string }>`
  border: 0;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  svg {
    font-size: 18px;
    color: ${(props) => props.navTextColor};
    transition: color 150ms;
    &:hover {
      color: ${(props) => props.theme.mainColor};
    }
  }
`;

const Wrapper = styled(motion.header)`
  width: 100%;
  padding: 16px 24px;
  position: fixed;
  top: 0;
  background-color: transparent;
  z-index: 99;

  @media ${({ theme }) => theme.device.tablet} {
    ${Nav} {
      display: none;
    }
  }
`;

const navVariants = {
  top: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    boxShadow: 'none',
    transition: {
      type: 'tween',
      duration: 0,
    },
  },
  scroll: {
    backgroundColor: 'rgba(255,255,255,1)',
    boxShadow: '0px 7px 20px 0px rgba(180,180,180,0.47)',
    transition: {
      type: 'tween',
      duration: 0,
    },
  },
};

const Header = () => {
  const [openAllMenu, setOpenAllMenu] = useState(false);
  const [navTextColor, setNavTextColor] = useState<string>('white');
  const { scrollY } = useViewportScroll();
  const navAnimation = useAnimation();

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 180) {
        navAnimation.start('scroll');
        setNavTextColor('black');
      } else {
        navAnimation.start('top');
        setNavTextColor('white');
      }
    });
  }, [scrollY, navAnimation]);

  return (
    <Wrapper variants={navVariants} animate={navAnimation} initial={'top'}>
      <Layout>
        <Logo>
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + '/logo.svg'}
              alt="유어일리터 로고"
            />
          </Link>
        </Logo>
        <Nav navTextColor={navTextColor}>
          <Item>
            <Link to="/">im1l coffee</Link>
          </Item>
          <Item>
            <Link to="/">franchise</Link>
          </Item>
          <Item>
            <Link to="/menu/1">menu</Link>
          </Item>
          <Item>
            <Link to="/">store</Link>
          </Item>
          <Item>
            <Link to="/">news</Link>
          </Item>
        </Nav>
        <AllMenuBtn
          navTextColor={navTextColor}
          onClick={() => setOpenAllMenu(true)}
        >
          <i className="fas fa-bars"></i>
        </AllMenuBtn>
      </Layout>
      {openAllMenu ? <AllMenu setOpenAllMenu={setOpenAllMenu} /> : null}
    </Wrapper>
  );
};

export default Header;
