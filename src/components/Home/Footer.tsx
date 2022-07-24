import React from 'react';
import styled from 'styled-components';

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

const Wrapper = styled.footer`
  padding: 3.6em 0;
  margin-top: 4.8em;
  background-color: ${(props) => props.theme.textColor};
  .layout {
    max-width: 1280px;
    margin: 0 auto;
    img {
      width: 240px;
      margin-bottom: 1.2em;
    }
    p {
      margin-top: 0.8rem;
      font-size: 0.9em;
    }
  }

  @media ${({ theme }) => theme.device.tablet} {
    padding: 3em 2em;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <div className="layout">
        <img
          src={process.env.PUBLIC_URL + '/image/logo-full-white.svg'}
          alt="흰색 글씨 로고"
        />
        <p>법인명 : (주)유어일리터 | 대표자 : 000</p>
        <p>주소지 : 대전광역시 중구 대종로 </p>
        <p>
          TEL : 1600-0000 | FAX : 000-000-0000 | Email : your1lcoffee@naver.com{' '}
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
    </Wrapper>
  );
};

export default Footer;
