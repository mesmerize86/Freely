import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import Sidebar from '../sidebar';

type Props = {
  children: ReactNode;
};

const Default: React.FC<Props> = ({ children }): ReactElement => {
  return (
    <Layout>
      <Sidebar />
      <MainContent>{children}</MainContent>
    </Layout>
  );
};
export default Default;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
  min-height: 100%;
  height: 100vh;
`;

const MainContent = styled.div`
  background-color: ${(props) => props.theme.colours.monoLightX};
`;
