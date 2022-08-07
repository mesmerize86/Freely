import React from 'react';
import { NavLink as BaseNavLink } from 'react-router-dom';
import styled from 'styled-components';
import { menus } from './data';
import { MainMenu } from './types';
import { nanoid } from '@reduxjs/toolkit';

const MainNav: React.FC = () => {
  return (
    <Nav>
      {menus.map((menu: MainMenu) => (
        <NavLink key={nanoid()} to={menu.link}>
          {menu.name}
        </NavLink>
      ))}
    </Nav>
  );
};
export default MainNav;

const Nav = styled.nav`
  width: 100%;
`;

const NavLink = styled(BaseNavLink)`
  display: block;
  text-align: center;
  padding: 0.85rem;
  color: ${(props) => props.theme.colours.primary};
  border-bottom: 1px solid ${(props) => props.theme.colours.primary};
  transition: background-color 350ms ease;
  font-weight: 500;
  background-color: ${(props) => props.theme.colours.monoLightX};
  &.active {
    background-color: ${(props) => props.theme.colours.brand};
  }

  &:hover {
    background-color: ${(props) => props.theme.colours.primary};
    color: ${(props) => props.theme.colours.white};
    text-decoration: none;
  }
`;
