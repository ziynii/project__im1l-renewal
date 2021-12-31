import React, { useState } from 'react';
import styled from 'styled-components';
import MenuCard from '../components/MenuCard';
import { IMenu } from '../data';

interface IHomeProps {
  menus: IMenu[];
}

const Wrapper = styled.div`
  height: 100%;
`;

const MainBanner = styled.div`
  width: 100%;
  height: 700px;
  background-image: url('image/bg.jpg');
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const MainTitle = styled.div`
  margin-left: 120px;
  p {
    font-size: 20px;
    font-weight: 400;
  }
  h2 {
    margin-top: 28px;
    font-size: 18px;
    line-height: 1.4;
  }
  span {
    font-weight: 500;
    font-size: 36px;
  }
`;

const ContentWrap = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1.5em 2em;
	margin-top: 3em;
`;

const ContnetTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme.textColor};
  font-weight: 500;
  font-size: 2em;
`;

const ContentCaption = styled.p`
  text-align: center;
  font-size: 0.9em;
  color: gray;
  margin-top: 0.4em;
  margin-bottom: 1.6em;
`;

const MenuBtns = styled.div`
  text-align: center;
`;

const MenuBtn = styled.button<{ menuTabNum: number }>`
  outline: none;
  border: 0;
  cursor: pointer;
  background-color: transparent;
  padding: 0.4em 0.8em;
  text-transform: uppercase;
  font-size: 0.8em;
  transition: color 150ms;
  &:hover {
    color: ${(props) => props.theme.mainColor};
  }
  &:nth-child(${(props) => props.menuTabNum}) {
    color: ${(props) => props.theme.mainColor};
  }
  &:not(:last-child) {
    border-right: 1px solid lightgray;
  }
`;

const ItemList = styled.ul`
  height: 430px;
  display: flex;
  align-items: center;
  overflow-x: auto;
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.mainColor};
    border-radius: 16px;
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 16px;
  }
  &::-webkit-scrollbar {
    height: 4px;
  }
`;

const MdList = styled(ItemList)`
  height: 350px;
  li {
    height: 280px;
  }
`;

const Home = ({ menus }: IHomeProps) => {
  const [menuSelect, setMenuSelect] = useState<string>('coffee');
  const [menuTabNum, setMenuTabNum] = useState<number>(1);
  const filterMenu = menus.filter((menu) => {
    return menu.category === menuSelect;
  });
  const mdMenu = menus.filter((menu) => {
    return menu.category === 'md';
  });

  console.log(mdMenu);

  return (
    <Wrapper>
      <MainBanner>
        <MainTitle>
          <p>IM1L COFFEE</p>
          <h2>
            고객이 인정한 커피전문점, <br />
            <span>아임일리터</span>
          </h2>
        </MainTitle>
      </MainBanner>
      <ContentWrap>
        <ContnetTitle>im1l menu</ContnetTitle>
        <ContentCaption>
          고객을 위한 정성이 담긴 아임일리터의 메뉴입니다
        </ContentCaption>
        <MenuBtns>
          <MenuBtn
            menuTabNum={menuTabNum}
            onClick={() => {
              setMenuSelect('coffee');
              setMenuTabNum(1);
            }}
          >
            coffee
          </MenuBtn>
          <MenuBtn
            menuTabNum={menuTabNum}
            onClick={() => {
              setMenuSelect('beverage');
              setMenuTabNum(2);
            }}
          >
            beverage
          </MenuBtn>
          <MenuBtn
            menuTabNum={menuTabNum}
            onClick={() => {
              setMenuSelect('tea');
              setMenuTabNum(3);
            }}
          >
            tea
          </MenuBtn>
        </MenuBtns>
        <ItemList>
          {filterMenu.map((menu) => (
            <MenuCard key={menu.id} menu={menu} />
          ))}
        </ItemList>
      </ContentWrap>
      <ContentWrap>
        <ContnetTitle>merchandiser</ContnetTitle>
        <ContentCaption>
          다양한 상품들로 언제 어디서나 아임일리터와 함께하세요.
        </ContentCaption>
        <MdList>
          {mdMenu.map((menu) => (
            <MenuCard key={menu.id} menu={menu} />
          ))}
        </MdList>
      </ContentWrap>
      <ContentWrap>
        <ContnetTitle>franchise</ContnetTitle>
        <ContentCaption>
          함께 성장하는 아임일리터와 창업성공의 꿈을 이루세요.
        </ContentCaption>
      </ContentWrap>
    </Wrapper>
  );
};

export default Home;
