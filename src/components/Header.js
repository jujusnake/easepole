import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderWrap scrollPosition={scrollPosition}>
      <HeaderNav>
        <MainLogo>
          <Link to="/">윤동주</Link>
        </MainLogo>
        <Navigation>
          <NavItem>
            <Link to="/about">About</Link>
          </NavItem>
          <NavItem>
            <Link to="/portfolio">Portfolio</Link>
          </NavItem>
          <NavItem>
            <Link to="/video">Video</Link>
          </NavItem>
          <NavItem>
            <Link to="/contacts">Contacts</Link>
          </NavItem>
        </Navigation>
      </HeaderNav>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  position: fixed;
  width: 100%;
  padding: 10px 0;
  background-color: rgba(255, 255, 255, 0.3);
  transition: background-color 300ms ease;

  ${({ scrollPosition }) =>
    scrollPosition &&
    `  &:hover {
    background-color: #fff;
    transition: background-color 300ms ease;
  }
`}
`;

const HeaderNav = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const MainLogo = styled.h1`
  font-family: 'Noto Serif KR', serif;
  font-size: 1.5em;
  font-weight: 700;
  transition: opacity 200ms ease;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  a {
    color: ${({ theme }) => theme.fontBlack};
    text-decoration: none;
  }
`;

const Navigation = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  padding: 20px;
  transition: opacity 200ms ease;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  a {
    color: ${({ theme }) => theme.fontBlack};
    text-decoration: none;
  }
`;

export default Header;
