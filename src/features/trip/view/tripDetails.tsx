import React from 'react';
import { TripField } from 'models/Trip';
import Card, { StyledCard } from 'components/card';
import styled from 'styled-components';
import { nanoid } from '@reduxjs/toolkit';

type Props = {
  tripDetail: TripField | undefined;
};

const TripDetails: React.FC<Props> = ({ tripDetail }) => (
  <div>
    {tripDetail && (
      <TripDetailWrapper>
        <TripFirstRow>
          <TripTitle>{tripDetail.title}</TripTitle>
          <p>
            {String(tripDetail.startDate)} -{String(tripDetail.endDate)}
          </p>
          <StatusText>{tripDetail.status}</StatusText>
        </TripFirstRow>
        <TripSecondRow>
          {tripDetail.destinations.map((destination) => (
            <Card key={nanoid()}>{destination}</Card>
          ))}
        </TripSecondRow>
      </TripDetailWrapper>
    )}
  </div>
);

export default TripDetails;

const TripDetailWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.colours.bodyBorder};
  margin: 2rem;
  padding: 1rem;
`;

const TripFirstRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 1rem;
  justify-content: center;
  align-items: center;
`;

const TripTitle = styled.h2``;

const StatusText = styled.p`
  text-transform: capitalize;
  text-align: right;
`;

const TripSecondRow = styled.div`
  margin: 2rem;
  ${StyledCard} {
    border-radius: 0;
    margin-bottom: 1rem;
    &:hover {
      border-color: ${(props) => props.theme.colours.bodyBorder};
      background-color: unset;
    }
  }
`;
