import React from 'react';
import styled from 'styled-components';
import { IMenu } from '../../data';

interface IMenuCardProps {
  menu: IMenu;
}

const Item = styled.li`
  position: relative;
  height: 350px;
  color: ${(props) => props.theme.textColor};
  text-align: center;
  border-radius: 16px;
  box-shadow: 0px 10px 13px -7px lightgray, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  z-index: -1;
  &:not(:last-child) {
    margin-right: 1.2em;
  }
  img {
    width: 200px;
		border-radius: 16px;
  }
`;

const TextWrap = styled.div`
  width: 100%;
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  h4 {
    font-weight: 700;
  }
  p {
    font-size: 0.7em;
    margin-top: 2px;
  }
`;

const MenuCard = ({ menu }: IMenuCardProps) => {
  return (
    <Item>
      <img src={menu.url} alt={menu.name} />
      <TextWrap>
        <h4>{menu.name}</h4>
        <p>{menu.option || menu.desciption}</p>
      </TextWrap>
    </Item>
  );
};

export default MenuCard;
