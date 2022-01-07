import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import AllMenuTab from './AllMenuTab';

interface IAllMenuProps {
  setOpenAllMenu: (prev: boolean) => void;
}

const CloseBtn = styled.button`
  position: absolute;
  top: 30px;
  right: 140px;
  background-color: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
  svg {
    color: white;
    font-size: 22px;
    transition: color 150ms;
    &:hover {
      color: ${(props) => props.theme.mainColor};
    }
  }
`;

const ItemWrap = styled(motion.ul)`
  width: 100%;
  height: 100%;
  margin-left: 420px;
  margin-top: 100px;
`;

const ItemTitle = styled(motion.li)<{ tabnum: number }>`
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  text-align: left;
  font-size: 3.2em;
  font-weight: 500;
  line-height: 2;
  h2 {
    transition: all 150ms ease;
  }
  &:hover h2 {
    color: ${(props) => props.theme.mainColor};
    margin-left: 20px;
  }
  &:nth-child(${(props) => props.tabnum}) h2 {
    color: ${(props) => props.theme.mainColor};
    margin-left: 20px;
  }
  &:not(:nth-child(${(props) => props.tabnum})) h2 {
    color: #c9c6c6;
  }
`;

const Items = styled.ul`
  flex-basis: 50%;
  text-align: left;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 420px;
`;

const Snsicon = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 60px;
  right: 140px;

  button {
    border: 1px solid lightgray;
    outline: none;
    background-color: transparent;
    border-radius: 50%;
    padding: 8px;
    color: lightgray;
    text-align: center;
    transition: all 150ms;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.mainColor};
      border: 1px solid ${(props) => props.theme.mainColor};
    }
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
  svg {
    font-size: 18px;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  color: white;
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;

  @media ${({ theme }) => theme.device.tablet} {
    ${ItemWrap} {
      margin-left: 140px;
    }
    ${Items} {
      position: relative;
      top: 0;
      right: 0;
      transform: none;
    }
  }
`;

const titleWrapVars = {
  init: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const titleVars = {
  init: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const AllMenu = ({ setOpenAllMenu }: IAllMenuProps) => {
  const [tabnum, settabnum] = useState<number>(0);
  return (
    <Wrapper>
      <CloseBtn onClick={() => setOpenAllMenu(false)}>
        <i className="fas fa-times"></i>
      </CloseBtn>
      <ItemWrap variants={titleWrapVars} initial="init" animate="animate">
        <ItemTitle
          tabnum={tabnum}
          variants={titleVars}
          onClick={() => {
            settabnum(1);
          }}
        >
          <h2>im1l coffee</h2>
          <Items>
            {tabnum === 1 ? (
              <AllMenuTab setOpenAllMenu={setOpenAllMenu} tabnum={tabnum} />
            ) : null}
          </Items>
        </ItemTitle>
        <ItemTitle
          tabnum={tabnum}
          variants={titleVars}
          onClick={() => settabnum(2)}
        >
          <h2>franchise</h2>
          <Items>
            {tabnum === 2 ? (
              <AllMenuTab setOpenAllMenu={setOpenAllMenu} tabnum={tabnum} />
            ) : null}
          </Items>
        </ItemTitle>
        <ItemTitle
          tabnum={tabnum}
          variants={titleVars}
          onClick={() => settabnum(3)}
        >
          <h2>menu</h2>
          <Items>
            {tabnum === 3 ? (
              <AllMenuTab setOpenAllMenu={setOpenAllMenu} tabnum={tabnum} />
            ) : null}
          </Items>
        </ItemTitle>
        <ItemTitle
          tabnum={tabnum}
          variants={titleVars}
          onClick={() => settabnum(4)}
        >
          <h2>store</h2>
          <Items>
            {tabnum === 4 ? (
              <AllMenuTab setOpenAllMenu={setOpenAllMenu} tabnum={tabnum} />
            ) : null}
          </Items>
        </ItemTitle>
        <ItemTitle
          tabnum={tabnum}
          variants={titleVars}
          onClick={() => settabnum(5)}
        >
          <h2>news</h2>
          <Items>
            {tabnum === 5 ? (
              <AllMenuTab setOpenAllMenu={setOpenAllMenu} tabnum={tabnum} />
            ) : null}
          </Items>
        </ItemTitle>
      </ItemWrap>
      <Snsicon>
        <button>
          <i className="fab fa-instagram"></i>
        </button>
        <button>
          <i className="fab fa-youtube"></i>
        </button>
        <button>
          <i className="fas fa-blog"></i>
        </button>
      </Snsicon>
    </Wrapper>
  );
};

export default AllMenu;
