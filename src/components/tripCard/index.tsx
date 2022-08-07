import React from 'react';
import styled from 'styled-components';
import { StyledCard as Card } from 'components/card';
import { TripField } from 'models/Trip';

type Props = {
  trip: TripField;
  isLoading?: boolean;
};
const TripCard: React.FC<Props> = ({ trip, isLoading }) => {
  return (
    <StyledTripCard data-disabled={isLoading}>
      <h3>{trip.title}</h3>
      {!isLoading && (
        <>
          <p>
            {String(trip.startDate)} - {String(trip.endDate)}
          </p>
          <StatusText>{trip.status}</StatusText>
        </>
      )}
    </StyledTripCard>
  );
};
export default TripCard;

const StatusText = styled.p`
  padding: 0.576rem 0;
  text-align: center;
  background-color: ${(props) => props.theme.colours.bodyBorder};
  border-radius: 6px;
`;

const StyledTripCard = styled(Card)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    ${StatusText} {
      background-color: ${(props) => props.theme.colours.brand};
    }
  }

  &[data-disabled='true'] {
    &:hover {
      cursor: not-allowed;
      background-color: ${(props) => props.theme.colours.monoLightX};
      border-color: ${(props) => props.theme.colours.bodyBorder};
    }
  }
`;
