import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import AllMenuTab from './AllMenuTab';

interface IAllMenuProps {
  setOpenAllMenu: (prev: boolean) => void;
}

const Wrapper = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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

const TitleWrap = styled(motion.div)`
  flex-basis: 50%;
  text-align: left;
  font-size: 52px;
  font-weight: 500;
  line-height: 2;
  margin-left: 140px;
`;

const ItemTitle = styled(motion.h2)<{ tabNum: number }>`
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 150ms ease;
  &:hover {
    color: ${(props) => props.theme.mainColor};
    margin-left: 20px;
  }
  &:nth-child(${(props) => props.tabNum}) {
    color: ${(props) => props.theme.mainColor};
    margin-left: 20px;
  }
`;

const ContentWrap = styled(motion.div)`
  flex-basis: 50%;
  text-align: left;
`;

const Snsicon = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 60px;
  right: 140px;
  a {
    border: 1px solid lightgray;
    border-radius: 50%;
    padding: 8px;
    color: lightgray;
    text-align: center;
    transition: all 150ms;
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
  const [tabNum, setTabNum] = useState<number>(0);

  return (
    <Wrapper>
      <CloseBtn onClick={() => setOpenAllMenu(false)}>
        <i className="fas fa-times"></i>
      </CloseBtn>
      <TitleWrap variants={titleWrapVars} initial="init" animate="animate">
        <ItemTitle
          tabNum={tabNum}
          variants={titleVars}
          onClick={() => {
            setTabNum(1);
          }}
        >
          im1l coffee
        </ItemTitle>
        <ItemTitle
          tabNum={tabNum}
          variants={titleVars}
          onClick={() => setTabNum(2)}
        >
          franchise
        </ItemTitle>
        <ItemTitle
          tabNum={tabNum}
          variants={titleVars}
          onClick={() => setTabNum(3)}
        >
          menu
        </ItemTitle>
        <ItemTitle
          tabNum={tabNum}
          variants={titleVars}
          onClick={() => setTabNum(4)}
        >
          store
        </ItemTitle>
        <ItemTitle
          tabNum={tabNum}
          variants={titleVars}
          onClick={() => setTabNum(5)}
        >
          news
        </ItemTitle>
      </TitleWrap>
      <ContentWrap>
        {tabNum ? <AllMenuTab tabNum={tabNum} /> : null}
      </ContentWrap>
      <Snsicon>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="#">
          <i className="fas fa-blog"></i>
        </a>
      </Snsicon>
    </Wrapper>
  );
};

export default AllMenu;
