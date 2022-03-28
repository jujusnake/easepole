import styled from '@emotion/styled';
import React from 'react';

const Main = () => {
  return (
    <MainWrap>
      <MainContent>
        <Banner>
          <BannerText>
            <Title>윤 동 주</Title>
            <SubTitle>배우 | 연출가 | 사진작가</SubTitle>
          </BannerText>
        </Banner>
      </MainContent>
    </MainWrap>
  );
};

const MainWrap = styled.div`
  padding-top: 76px;
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 700px;
  background-image: url('/images/main-banner.jpeg');
  background-position: center;
  background-size: cover;
  overflow: hidden;
`;

const BannerText = styled.div`
  position: absolute;
  left: 0;
  transform: translateY(-50%);
  padding: 40px 100px;
  border-radius: 0 3px 3px 0;
  background-color: rgba(255, 255, 255, 0.5);
  color: #000;
  font-family: 'Noto Serif KR', serif;
  text-align: center;
  overflow: hidden;

  animation-name: banner;
  animation-duration: 2s;
  animation-delay: 300ms;
  animation-direction: normal;
  animation-fill-mode: both;

  @keyframes banner {
    from {
      top: 100%;
      opacity: 0;
    }
    to {
      top: 70%;
      opacity: 1;
    }
  }
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

const SubTitle = styled.h1`
  font-size: 1.2em;
`;

export default Main;
