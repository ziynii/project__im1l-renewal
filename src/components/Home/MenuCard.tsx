import React from 'react';
import { Link } from 'react-router-dom';
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
  &:not(:last-child) {
    margin-right: 1.2em;
  }
  img {
    width: 200px;
    border-radius: 16px;
  }
  .hover__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 24px;
    background: linear-gradient(transparent 10%, rgba(237, 164, 131, 1) 90%);
    opacity: 0;
    transition: opacity 150ms ease-in;
    .go {
      color: white;
      font-size: 0.9em;
      padding: 4px 8px;
      outline: none;
      border: 1px solid white;
      background-color: transparent;
      transition: all 150ms;
      cursor: pointer;
      &:hover {
        background-color: white;
        color: ${(props) => props.theme.mainColor};
      }
    }
  }
  &:hover .hover__content {
    opacity: 1;
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
      <div className="hover__content">
        <Link to={menu.category !== 'md' ? `/menu/${menu.id}` : '/'}>
          <button className="go">자세히 보기</button>
        </Link>
      </div>
    </Item>
  );
};

export default MenuCard;
