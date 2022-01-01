import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

interface ITabProps {
  tabNum: number;
}

const Items = styled(motion.ul)``;

const Item = styled.li`
  cursor: pointer;
  font-size: 36px;
  font-weight: 500;
  transition: color 150ms;
  &:hover {
    color: ${(props) => props.theme.mainColor};
  }
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;
 

const AllMenuTab = ({ tabNum }: ITabProps) => {
  if (tabNum === 1) {
    return (
      <Items>
        <Item>아임일리터</Item>
        <Item>찾아오시는길</Item>
        <Item>채용안내</Item>
      </Items>
    );
  } else if (tabNum === 2) {
    return (
      <Items>
        <Item>창업문의</Item>
        <Item>아카데미</Item>
        <Item>인테리어</Item>
        <Item>창업설명회</Item>
      </Items>
    );
  } else if (tabNum === 3) {
    return (
      <Items>
        <Item>커피</Item>
        <Item>음료</Item>
        <Item>디저트</Item>
      </Items>
    );
  } else if (tabNum === 4) {
    return (
      <Items>
        <Item>매장리스트</Item>
        <Item>매장 찾기</Item>
      </Items>
    );
  } else if (tabNum === 5) {
    return (
      <Items>
        <Item>공지사항</Item>
        <Item>보도내용</Item>
      </Items>
    );
  } else {
    return null;
  }
};

export default AllMenuTab;
