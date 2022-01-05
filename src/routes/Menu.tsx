import { motion } from 'framer-motion';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Footer from '../components/Home/Footer';
import SlideCard from '../components/Menu/SlideCard';
import { IMenu } from '../data';

interface IMenuProps {
  menus: IMenu[];
}

const Wrapper = styled.div`
  width: 100%;
  height: 1300px;
  position: relative;
`;

const TopBg = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(/image/menu_bg.jpg);
  background-position: center center;
`;

const MenuContent = styled.div`
  width: 1280px;
  background-color: white;
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.6em 2.4em;
`;

const SectionTitle = styled.div`
  text-align: center;
  h2 {
    font-size: 2.8em;
    text-transform: uppercase;
    color: ${(props) => props.theme.textColor};
    font-weight: 700;
  }
  p {
    font-size: 0.9em;
    color: gray;
    margin-top: 0.6em;
  }
`;

const SelectBox = styled.select`
  width: 150px;
  padding: 5px;
  border: 1px solid #999;
  border-radius: 3px;
  text-transform: uppercase;
  text-align: center;
  margin-top: 1.8em;
`;

const SelectedMenuCard = styled.div`
  width: 70%;
  height: 400px;
  margin-top: 3.6em;
  display: flex;
  box-shadow: 6px 7px 21px 5px lightgray;
  .image__box,
  .description__box {
    width: 50%;
  }
  .image__box {
		text-align: center;
    background-color: #eee;
    img {
      height: 100%;
    }
  }
  .description__box {
    color: ${(props) => props.theme.textColor};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 4.8em 4.2em;
    .text__layout {
    }
    h2 {
      font-size: 1.9em;
      font-weight: 700;
      margin-bottom: 0.4em;
    }
    span {
      font-size: 0.8em;
    }
    p {
      color: gray;
      justify-self: flex-end;
      font-size: 0.9em;
      line-height: 1.2rem;
			white-space: pre-wrap;
    }
  }
`;

const SlideWrap = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  margin-top: 3.6em;
  overflow: hidden;
`;

const MenuSlide = styled.ul`
  display: flex;
  transition: transform 150ms;
`;

const SlideBtns = styled.div`
  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    outline: none;
    border: 0;
    background-color: transparent;
    font-size: 2.4em;
    color: ${(props) => props.theme.mainColor};
    cursor: pointer;
    &:hover {
      color: #c98c70;
    }
  }
  .prev__btn {
    left: 2%;
  }
  .next__btn {
    right: 2%;
  }
`;

const SLIDE_GAP = 16;
const SLIDE_MOVING_UNIT = 450;
const IMG_WIDTH = 200;

const Menu = ({ menus }: IMenuProps) => {
  const [selectedMenu, setSelectedMenu] = useState<number>(1);
  const [selectedCategory, setSelecedtCategory] = useState<string>('coffee');
  const filterMenus = menus.filter((menu) => {
    return selectedCategory === menu.category;
  });
  const bigCard = menus.find((menu) => {
    return menu.id === selectedMenu;
  });
  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelecedtCategory(event.target.value);
    setSlideSpot(0);
  };

  useEffect(() => {
    setSelectedMenu(filterMenus[0].id);
  }, [selectedCategory]);

  // slide
  const [slideSpot, setSlideSpot] = useState<number>(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const slideInnerWidth = slideRef.current?.clientWidth;
  const imgQuantity = filterMenus.length;
  const slideWidth = IMG_WIDTH * imgQuantity + (imgQuantity - 1) * SLIDE_GAP;
  const hiddenSlideWidth = (slideWidth - slideInnerWidth!) as number;

  const onClickPrevBtn = () => {
    if (Math.abs(slideSpot) < SLIDE_MOVING_UNIT) {
      setSlideSpot(0);
    } else {
      setSlideSpot(slideSpot + SLIDE_MOVING_UNIT);
    }
  };

  const onClickNextBtn = () => {
    if (hiddenSlideWidth - Math.abs(slideSpot) < SLIDE_MOVING_UNIT) {
      setSlideSpot(slideSpot - (hiddenSlideWidth - Math.abs(slideSpot)));
    } else {
      setSlideSpot(slideSpot - SLIDE_MOVING_UNIT);
    }
  };

  return (
    <>
      <Wrapper>
        <TopBg></TopBg>
        <MenuContent>
          <SectionTitle>
            <h2>menu</h2>
            <p>고객을 위한 정성이 담긴 아임일리터의 메뉴입니다</p>
          </SectionTitle>
          <SelectBox onChange={handleSelect}>
            <option value="coffee">coffee</option>
            <option value="beverage">beverage</option>
            <option value="tea">tea</option>
            <option value="season">season</option>
            <option value="dessert">dessert</option>
          </SelectBox>
          <SelectedMenuCard>
            <div className="image__box">
              <img src={bigCard?.url} alt={bigCard?.name} />
            </div>
            <div className="description__box">
              <div className="text__layout">
                <h2>{bigCard?.name}</h2>
                <span>{bigCard?.option} </span>
                <span>{bigCard?.price}</span>
              </div>
              <div className="text__layout">
                <p>{bigCard?.desciption}</p>
              </div>
            </div>
          </SelectedMenuCard>
          <SlideWrap ref={slideRef}>
            <MenuSlide style={{ transform: `translateX(${slideSpot}px)` }}>
              {filterMenus.map((menu) => (
                <SlideCard
                  menu={menu}
                  key={menu.id}
                  setSelectedMenu={setSelectedMenu}
                />
              ))}
            </MenuSlide>
            <SlideBtns>
              <button className="prev__btn" onClick={onClickPrevBtn}>
                <i className="fas fa-arrow-circle-left"></i>
              </button>
              <button className="next__btn" onClick={onClickNextBtn}>
                <i className="fas fa-arrow-circle-right"></i>
              </button>
            </SlideBtns>
          </SlideWrap>
        </MenuContent>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Menu;
