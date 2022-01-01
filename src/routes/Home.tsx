import React, { useState } from 'react';
import styled from 'styled-components';
import MenuCard from '../components/Home/MenuCard';
import { IMenu } from '../data';
import '@fortawesome/fontawesome-free/js/all.js';

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
  margin-top: 4.8em;
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
  padding: 0.4em 1.2em;
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

const Interior = styled.div`
  width: 90%;
  height: 342px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 6px 7px 21px 5px lightgray;
  .interior__left,
  .interior__right {
    flex-basis: 50%;
  }
  .interior__left {
    height: 100%;
    img {
      width: 100%;
    }
  }
  .interior__right {
    height: 100%;
    color: ${(props) => props.theme.textColor};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3.5em 4em;
    h3 {
      font-size: 1.8em;
      font-weight: 700;
    }
    p {
      font-size: 0.9em;
      color: gray;
    }
  }
`;

const Franchise = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Card = styled.div`
  flex-basis: 23%;
  background-color: #f1f1f1;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1.2em 1.2em;
  border-radius: 8px;
`;

const CardIcon = styled.span`
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: ${(props) => props.theme.textColor};
  background-color: white;
  font-size: 3em;
  margin-bottom: 1.6rem;
`;

const GoCard = styled.a.attrs({ href: '#' })`
  background-color: ${(props) => props.theme.mainColor};
  padding: 0.4em 0.8em;
  border-radius: 16px;
  font-size: 0.9em;
  font-weight: 400;
  margin-top: 0.8rem;
  transition: background-color 150ms;
  &:hover {
    background-color: ${(props) => props.theme.textColor};
  }
`;

const CardText = styled.div`
  h3 {
    color: ${(props) => props.theme.textColor};
    font-weight: 700;
    margin-bottom: 0.8rem;
  }
  p {
    color: gray;
    font-size: 0.9em;
    font-weight: 400;
  }
`;

const Footer = styled.footer`
  padding: 3.6em 0;
  margin-top: 4.8em;
  background-color: ${(props) => props.theme.textColor};
  .layout {
    max-width: 1280px;
    margin: 0 auto;
    img {
      width: 180px;
      margin-bottom: 1.2em;
    }
    p {
      margin-top: 0.8rem;
      font-size: 0.9em;
    }
  }
`;

const Snsicon = styled.div`
  display: flex;
  margin-top: 1.2rem;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 1px solid lightgray;
    border-radius: 50%;
    color: lightgray;
    transition: all 150ms;
    &:hover {
      color: ${(props) => props.theme.mainColor};
      border: 1px solid ${(props) => props.theme.mainColor};
    }
    &:not(:last-child) {
      margin-right: 12px;
    }
  }
  svg {
    font-size: 18px;
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
        <ContnetTitle>interior</ContnetTitle>
        <ContentCaption>
          세련되고 모던한 아임일리터의 인테리어입니다.
        </ContentCaption>
        <Interior>
          <div className="interior__left">
            <img src="image/interior.png" alt="내부 인테리어 이미지" />
          </div>
          <div className="interior__right">
            <h3>
              편안하고 부드러운 감성, <br /> 아임일리터
            </h3>
            <p>
              화이트를 베이스 컬러로 우드톤을 포인트로 주어 <br />{' '}
              자연스러우면서도 답답하지 않도록 공간을 꾸몄습니다. <br /> 따뜻한
              분위기의 아임일리터에서 즐거운 시간을 보내시길 바랍니다.
            </p>
          </div>
        </Interior>
      </ContentWrap>
      <ContentWrap>
        <ContnetTitle>franchise</ContnetTitle>
        <ContentCaption>
          함께 성장하는 아임일리터와 창업성공의 꿈을 이루세요.
        </ContentCaption>
        <Franchise>
          <Card>
            <CardIcon>
              <i className="fas fa-store"></i>
            </CardIcon>

            <CardText>
              <h3>창업절차</h3>
              <p>
                아임일리터 가맹점 <br /> 창업절차입니다.
              </p>
            </CardText>
            <GoCard>바로가기</GoCard>
          </Card>
          <Card>
            <CardIcon>
              <i className="fas fa-coins"></i>
            </CardIcon>
            <CardText>
              <h3>창업비용</h3>
              <p>
                아임일리터 창업에 들어가는 <br /> 창업비용입니다.
              </p>
            </CardText>
            <GoCard>바로가기</GoCard>
          </Card>
          <Card>
            <CardIcon>
              <i className="fas fa-question"></i>
            </CardIcon>
            <CardText>
              <h3>FAQ</h3>
              <p>
                예비 창업자분들이 <br /> 자주 하시는 질문입니다.
              </p>
            </CardText>
            <GoCard>바로가기</GoCard>
          </Card>
          <Card>
            <CardIcon>
              <i className="far fa-comments"></i>
            </CardIcon>
            <CardText>
              <h3>창업문의</h3>
              <p>
                함께 성장하는 아임일리터와 <br /> 성공창업의 꿈을 이루세요
              </p>
            </CardText>
            <GoCard>바로가기</GoCard>
          </Card>
        </Franchise>
      </ContentWrap>
      <Footer>
        <div className="layout">
          <img src="image/logo-full-white.png" alt="흰색 글씨 로고" />
          <p>법인명 : (주)아임일리터 | 대표자 : 임시훈</p>
          <p>주소지 : 대전광역시 중구 대종로 451, 3층 </p>
          <p>
            TEL : 1600-1061 | FAX : 042-252-1126 | Email : im1lcoffee@naver.com{' '}
          </p>
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
        </div>
      </Footer>
    </Wrapper>
  );
};

export default Home;
