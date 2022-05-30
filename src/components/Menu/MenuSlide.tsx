import React, { useRef } from 'react';
import styled from 'styled-components';
import { IMenu } from '../../data';
import SlideCard from './SlideCard';

interface ISlideProps {
  slideSpot: number;
  setSlideSpot: (value: number) => void;
  filterMenus: IMenu[];
  setSelectedMenu: (value: number) => void;
}

const SlideWrap = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  margin-top: 3.6em;
  overflow: hidden;
`;

const Slide = styled.ul`
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

const MenuSlide = ({
  slideSpot,
  setSlideSpot,
  filterMenus,
  setSelectedMenu,
}: ISlideProps) => {
  const SLIDE_GAP = 16;
  const SLIDE_MOVING_UNIT = 450;
  const IMG_WIDTH = 200;

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
    <SlideWrap ref={slideRef}>
      <Slide style={{ transform: `translateX(${slideSpot}px)` }}>
        {filterMenus.map((menu) => (
          <SlideCard
            menu={menu}
            key={menu.id}
            setSelectedMenu={setSelectedMenu}
          />
        ))}
      </Slide>
      <SlideBtns>
        <button className="prev__btn" onClick={onClickPrevBtn}>
          <i className="fas fa-arrow-circle-left"></i>
        </button>
        <button className="next__btn" onClick={onClickNextBtn}>
          <i className="fas fa-arrow-circle-right"></i>
        </button>
      </SlideBtns>
    </SlideWrap>
  );
};

export default MenuSlide;
