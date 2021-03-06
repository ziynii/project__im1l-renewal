import React, { MouseEvent, useRef, useState } from 'react';
import styled from 'styled-components';
import MenuCard from '../components/Home/MenuCard';
import { IMenu } from '../data';
import '@fortawesome/fontawesome-free/js/all.js';
import Footer from '../components/Home/Footer';

interface IHomeProps {
  menus: IMenu[];
}

const MainBanner = styled.div`
  width: 100%;
  height: 700px;
  background-image: url('https://ziynii.github.io/project__im1l-renewal/image/bg.jpg');
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
    height: 2px;
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
      line-height: 1.4em;
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
  flex-shrink: 0;
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

const Wrapper = styled.div`
  height: 100%;

  @media ${({ theme }) => theme.device.tablet} {
    ${Interior} {
      flex-direction: column;
      height: 100%;
      .interior__left,
      .interior__right {
        flex-basis: 100%;
      }
      .interior__right {
        p {
          margin-top: 1.2em;
        }
      }
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    ${MainTitle} {
      margin-left: 80px;
    }

    ${Franchise} {
      flex-direction: column;
    }

    ${Card} {
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      &:not(last-child) {
        margin-bottom: 0.5rem;
      }
    }

    ${CardIcon} {
      width: 80px;
      height: 80px;
      flex-shrink: 0;
      margin-bottom: 0;
      font-size: 2.4em;
    }

    ${CardText} {
      flex-grow: 1;
      text-align: left;
      margin-left: 8px;

      p {
        font-size: 0.7em;
      }
    }
  }
`;

const Home = ({ menus }: IHomeProps) => {
  const [menuSelect, setMenuSelect] = useState<string>('coffee');
  const [menuTabNum, setMenuTabNum] = useState<number>(1);
  const menuScrollRef = useRef<HTMLUListElement>(null);
  const mdScrollRef = useRef<HTMLUListElement>(null);
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const filterMenu = menus.filter((menu) => {
    return menu.category === menuSelect;
  });
  const mdMenu = menus.filter((menu) => {
    return menu.category === 'md';
  });

  const onDragStart = (scrollRef: any, event: MouseEvent<HTMLUListElement>) => {
    event.preventDefault();
    setIsDrag(true);
    if (scrollRef && scrollRef.current) {
      setStartX(event.pageX + scrollRef.current?.scrollLeft);
    }
  };

  const onDragMove = (scrollRef: any, event: MouseEvent<HTMLUListElement>) => {
    if (!isDrag) return;

    if (scrollRef && scrollRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;

      scrollRef.current.scrollLeft = startX - event.pageX;

      if (scrollLeft === 0) {
        setStartX(event.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(event.pageX + scrollLeft);
      }
    }
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  return (
    <Wrapper>
      <MainBanner>
        <MainTitle>
          <p>IM1L COFFEE</p>
          <h2>
            ????????? ????????? ???????????????, <br />
            <span>???????????????</span>
          </h2>
        </MainTitle>
      </MainBanner>
      <ContentWrap>
        <ContnetTitle>im1l menu</ContnetTitle>
        <ContentCaption>
          ????????? ?????? ????????? ?????? ?????????????????? ???????????????
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
        <ItemList
          ref={menuScrollRef}
          onMouseDown={(event) => onDragStart(menuScrollRef, event)}
          onMouseMove={(event) => onDragMove(menuScrollRef, event)}
          onMouseLeave={onDragEnd}
          onMouseUp={onDragEnd}
        >
          {filterMenu.map((menu) => (
            <MenuCard key={menu.id} menu={menu} />
          ))}
        </ItemList>
      </ContentWrap>
      <ContentWrap>
        <ContnetTitle>merchandiser</ContnetTitle>
        <ContentCaption>
          ????????? ???????????? ?????? ???????????? ?????????????????? ???????????????.
        </ContentCaption>
        <MdList
          ref={mdScrollRef}
          onMouseDown={(event) => onDragStart(mdScrollRef, event)}
          onMouseMove={(event) => onDragMove(mdScrollRef, event)}
          onMouseLeave={onDragEnd}
          onMouseUp={onDragEnd}
        >
          {mdMenu.map((menu) => (
            <MenuCard key={menu.id} menu={menu} />
          ))}
        </MdList>
      </ContentWrap>
      <ContentWrap>
        <ContnetTitle>interior</ContnetTitle>
        <ContentCaption>
          ???????????? ????????? ?????????????????? ?????????????????????.
        </ContentCaption>
        <Interior>
          <div className="interior__left">
            <img src="image/interior.png" alt="?????? ???????????? ?????????" />
          </div>
          <div className="interior__right">
            <h3>
              ???????????? ???????????? ??????, <br /> ???????????????
            </h3>
            <p>
              ???????????? ????????? ????????? ???????????? ???????????? ?????? <br />{' '}
              ???????????????????????? ???????????? ????????? ????????? ???????????????. <br /> ?????????
              ???????????? ????????????????????? ????????? ????????? ???????????? ????????????.
            </p>
          </div>
        </Interior>
      </ContentWrap>
      <ContentWrap>
        <ContnetTitle>franchise</ContnetTitle>
        <ContentCaption>
          ?????? ???????????? ?????????????????? ??????????????? ?????? ????????????.
        </ContentCaption>
        <Franchise>
          <Card>
            <CardIcon>
              <i className="fas fa-store"></i>
            </CardIcon>

            <CardText>
              <h3>????????????</h3>
              <p>
                ??????????????? ????????? <br /> ?????????????????????.
              </p>
            </CardText>
            <GoCard>????????????</GoCard>
          </Card>
          <Card>
            <CardIcon>
              <i className="fas fa-coins"></i>
            </CardIcon>
            <CardText>
              <h3>????????????</h3>
              <p>
                ??????????????? ????????? ???????????? <br /> ?????????????????????.
              </p>
            </CardText>
            <GoCard>????????????</GoCard>
          </Card>
          <Card>
            <CardIcon>
              <i className="fas fa-question"></i>
            </CardIcon>
            <CardText>
              <h3>FAQ</h3>
              <p>
                ?????? ?????????????????? <br /> ?????? ????????? ???????????????.
              </p>
            </CardText>
            <GoCard>????????????</GoCard>
          </Card>
          <Card>
            <CardIcon>
              <i className="far fa-comments"></i>
            </CardIcon>
            <CardText>
              <h3>????????????</h3>
              <p>
                ?????? ???????????? ?????????????????? <br /> ??????????????? ?????? ????????????
              </p>
            </CardText>
            <GoCard>????????????</GoCard>
          </Card>
        </Franchise>
      </ContentWrap>
      <Footer />
    </Wrapper>
  );
};

export default Home;
