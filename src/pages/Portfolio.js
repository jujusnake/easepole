import React, { useState } from 'react';
import styled from '@emotion/styled';
import PortfolioCard from '../components/PortfolioCard';
import { movieData, playData, dramaData, cmData } from '../data/portfolioData';

const Portfolio = () => {
  const [selectedTab, setSelectedTab] = useState('영화');

  const handleTab = e => {
    setSelectedTab(e.target.textContent);
  };

  return (
    <PortfolioWrap>
      <PortfolioContent>
        <Tabs>
          <TabItem active={selectedTab === '영화'} onClick={handleTab}>
            영화
          </TabItem>
          <TabItem active={selectedTab === '연극'} onClick={handleTab}>
            연극
          </TabItem>
          <TabItem active={selectedTab === '드라마'} onClick={handleTab}>
            드라마
          </TabItem>
          <TabItem active={selectedTab === '광고'} onClick={handleTab}>
            광고
          </TabItem>
        </Tabs>
        <Movies>
          <CardWrap>
            {dataMap[selectedTab]
              .sort((a, b) => b.id - a.id)
              .map(movie => (
                <PortfolioCard key={movie.id} movie={movie} />
              ))}
          </CardWrap>
        </Movies>
      </PortfolioContent>
    </PortfolioWrap>
  );
};

const PortfolioWrap = styled.div`
  padding-top: 76px;
`;

const PortfolioContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 40px;
`;

const Tabs = styled.div`
  margin-bottom: 40px;
`;

const TabItem = styled.button`
  width: fit-content;
  padding: 10px 20px;

  /* font-family: 'Noto Serif KR', serif; */
  font-size: 1em;

  background-color: transparent;
  border: none;

  transition: font-weight 300ms ease;

  &:hover {
    color: ${({ theme }) => theme.fontGray};
    /* background-color: ${({ theme }) => theme.backgroundPrimary}; */
  }

  ${({ active, theme }) =>
    active &&
    `border-bottom: 2px solid ${theme.fontBlack}; font-weight: 700; &:hover{color: ${theme.fontBlack};}`};
  cursor: pointer;
`;

const Movies = styled.div``;

const CardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -24px;
`;

const dataMap = {
  영화: movieData,
  연극: playData,
  드라마: dramaData,
  광고: cmData,
};

export default Portfolio;
