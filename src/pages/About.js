import React from 'react';
import styled from '@emotion/styled';

const About = () => {
  return (
    <AboutWrap>
      <AboutContent>
        <AboutTitle>About</AboutTitle>

        <Info>
          <InfoImage />
          <InfoContent>
            <Bold>윤동주</Bold>
            1992. 5. 2 <br />
            177cm 68kg
            <br /> 서경대학교 연극영화과 졸업
            <br />
            특기: 기타연주, 수영
          </InfoContent>
        </Info>
      </AboutContent>
    </AboutWrap>
  );
};

const AboutWrap = styled.div`
  padding-top: 76px;
`;

const AboutContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 40px;
`;

const AboutTitle = styled.h1`
  width: fit-content;
  margin-bottom: 40px;
  padding-bottom: 10px;

  font-family: 'Noto Serif KR', serif;
  font-size: 1em;
  font-weight: 700;

  border-bottom: 1px solid ${({ theme }) => theme.fontBlack};
`;

const Info = styled.div`
  display: flex;
`;

const InfoImage = styled.div`
  width: 50%;
  aspect-ratio: 3 / 4;
  margin-right: 24px;
  background-image: url('/images/main-banner.jpeg');
  background-position: center;
  background-size: cover;
`;

const InfoContent = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  text-align: center;
  line-height: 180%;
`;

const Bold = styled.b`
  font-weight: 700;
`;

export default About;
