import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

interface ITabProps {
  tabnum: number;
}

const Item = styled.li`
  cursor: pointer;
  font-size: 0.6em;
  font-weight: 500;
  transition: color 150ms;
  &:hover {
    color: ${(props) => props.theme.mainColor};
  }
  &:not(:last-child) {
    margin-bottom: 0.2em;
  }
`;

const AllMenuTab = ({ tabnum }: ITabProps) => {
  if (tabnum === 1) {
    return (
      <>
        <Item>아임일리터</Item>
        <Item>찾아오시는길</Item>
        <Item>채용안내</Item>
      </>
    );
  } else if (tabnum === 2) {
    return (
      <>
        <Item>창업문의</Item>
        <Item>아카데미</Item>
        <Item>인테리어</Item>
        <Item>창업설명회</Item>
      </>
    );
  } else if (tabnum === 3) {
    return (
      <>
        <Item>커피</Item>
        <Item>음료</Item>
        <Item>디저트</Item>
      </>
    );
  } else if (tabnum === 4) {
    return (
      <>
        <Item>매장리스트</Item>
        <Item>매장 찾기</Item>
      </>
    );
  } else if (tabnum === 5) {
    return (
      <>
        <Item>공지사항</Item>
        <Item>보도내용</Item>
      </>
    );
  } else {
    return null;
  }
};

export default AllMenuTab;
