import React, { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Home/Footer';
import MenuSlide from '../components/Menu/MenuSlide';
import { IMenu } from '../data';
import {Helmet, HelmetProvider} from 'react-helmet-async'

interface IMenuProps {
  menus: IMenu[];
}

const TopBg = styled.div`
  width: 100%;
  height: 300px;
  background-image: url('https://ziynii.github.io/project__im1l-renewal/image/menu_bg.jpg');
  background-position: center center;
`;

const MenuContent = styled.div`
  max-width: 1280px;
  padding: 1.8em 2em;
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
      max-width: 100%;
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

const Wrapper = styled.div`
  width: 100%;
  height: 1300px;
  position: relative;

  @media ${({ theme }) => theme.device.tablet} {
    ${MenuContent} {
      width: 100%;
    }
    ${SelectedMenuCard} {
      width: 90%;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    height: 1600px;
    ${SelectedMenuCard} {
      flex-direction: column;
      height: 100%;
      .image__box,
      .description__box {
        width: 100%;
      }
      .description__box {
        padding: 3.2em 2.4em;
        p {
          margin-top: 0.5rem;
        }
      }
    }
  }
`;

const Menu = ({ menus }: IMenuProps) => {
  const { menuId } = useParams();
  const [isChangeCate, setIsChangeCate] = useState<boolean>(false);
  const [selectedMenu, setSelectedMenu] = useState<number>(Number(menuId));
  const [selectedCategory, setSelecedtCategory] = useState<string>('coffee');
  const [slideSpot, setSlideSpot] = useState<number>(0);
  const filterMenus = menus.filter((menu) => {
    return selectedCategory === menu.category;
  });

  const bigCard = menus.find((menu) => {
    return menu.id === selectedMenu;
  });
  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelecedtCategory(event.target.value);
    setSlideSpot(0);
    setIsChangeCate(true);
  };

  useEffect(() => {
    setSelecedtCategory(bigCard?.category! as string);
    setSelectedMenu(Number(menuId));
  }, []);

  useEffect(() => {
    setSelectedMenu(Number(menuId));
  }, [menuId]);

  useEffect(() => {
    setSelecedtCategory(bigCard?.category! as string);
  }, [selectedMenu]);

  useEffect(() => {
    if (isChangeCate) {
      setSelectedMenu(filterMenus[0].id);
    }
  }, [selectedCategory]);

  return (
    <>
	<HelmetProvider>
		<Helmet>
			<title>{`IM1L COFFEE | ${bigCard?.name}`}</title>
		</Helmet>
	</HelmetProvider>

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
          <MenuSlide
            slideSpot={slideSpot}
            setSlideSpot={setSlideSpot}
            filterMenus={filterMenus}
            setSelectedMenu={setSelectedMenu}
          />
        </MenuContent>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Menu;
