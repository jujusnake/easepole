import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as AwardIcon } from '../icons/award-simple.svg';

const PortfolioCard = ({ movie }) => {
  return (
    <Card>
      <Title>
        {movie.title}
        <Year>{movie.year}</Year>
      </Title>
      <Role>{movie.role && movie.role + ' 역'}</Role>
      <Awards>
        {movie.awards &&
          movie.awards.map((award, index) => (
            <Award key={index}>
              <AwardIcon width={12} style={{ marginRight: '4px' }} /> {award}
            </Award>
          ))}
      </Awards>
    </Card>
  );
};

const Card = styled.div`
  width: calc(33% - 24px);
  height: fit-content;
  margin-right: 24px;
  margin-bottom: 24px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.borderGray};
  border-radius: 3px;
`;

const Title = styled.h3`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 1.2rem;
  font-weight: 700;
`;

const Year = styled.aside`
  margin-left: 4px;
  font-size: 0.5rem;
  color: ${({ theme }) => theme.fontLight};
`;

const Role = styled.aside`
  margin-bottom: 20px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.fontGray};
`;

const Awards = styled.div``;

const Award = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 0.8rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default PortfolioCard;
