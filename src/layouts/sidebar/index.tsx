import React from 'react';
import styled from 'styled-components';
import MainNav from 'features/mainMenu';

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <MainNav />
    </SidebarContainer>
  );
};
export default Sidebar;

const SidebarContainer = styled.div`
  border-right: 1px solid ${(props) => props.theme.colours.primary};
`;
