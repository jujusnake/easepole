import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderNav>
        <MainLogo>
          <Link to="/">윤동주</Link>
        </MainLogo>
        <Navigation>
          <NavItem>
            <Link to="/about">About</Link>
          </NavItem>
          <NavItem>
            <Link to="/gallery">Gallery</Link>
          </NavItem>
          <NavItem>
            <Link to="/filmography">Filmography</Link>
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
