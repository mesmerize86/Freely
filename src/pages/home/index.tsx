import React from 'react';
import DefaultLayout from 'layouts/template/default';
import styled from 'styled-components';
import TripForm from 'features/trip/view/form/tripForm';

const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <StyledHome>
        <Title>Welcome to Freely</Title>
        <TripForm />
      </StyledHome>
    </DefaultLayout>
  );
};

export default Home;

const StyledHome = styled.div`
  text-align: center;
  align-items: center;
`;

const Title = styled.h1`
  margin: 1rem 0 2rem;
`;
