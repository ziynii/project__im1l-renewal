import React from 'react';
import styled from 'styled-components';
import { IMenu } from '../../data';

interface ISlideProps {
  menu: IMenu;
  setSelectedMenu: (value: number) => void;
}

const Item = styled.li`
  width: 200px;
  flex-shrink: 0;
  color: ${(props) => props.theme.textColor};
  background-color: #eee;
  text-align: center;
  border-radius: 16px;
  box-shadow: 0px 10px 13px -7px lightgray, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  overflow: hidden;
  &:not(:last-child) {
    margin-right: 16px;
  }
  img {
    width: 200px;
    height: 302px;
    border-radius: 16px;
  }
`;

const TextWrap = styled.div`
  width: 100%;
  background-color: white;
  padding: 1.2em 0;
  h4 {
    font-weight: 700;
  }
  p {
    font-size: 0.7em;
    margin-top: 2px;
  }
`;

const SlideCard = ({ menu, setSelectedMenu }: ISlideProps) => {
  return (
    <Item onClick={() => setSelectedMenu(menu.id)}>
      <img src={menu.url} alt={menu.name} />
      <TextWrap>
        <h4>{menu.name}</h4>
        <p>{menu.option}</p>
      </TextWrap>
    </Item>
  );
};

export default SlideCard;
