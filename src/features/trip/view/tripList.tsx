import React, { useState, useEffect, useCallback } from 'react';
import { StyledCard as Card } from 'components/card';
import styled from 'styled-components';
import { TripField } from 'models/Trip';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { FieldTypes } from 'models/Field';
import { formatDate } from 'helper';
import { getTripList } from 'api/trip';
import { setTripList } from '../slice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const TripView: React.FC = () => {
  const [trips, setTrips] = useState<TripField[]>([
    {
      id: 'asdfadf',
      title: 'loading',
      startDate: new Date(),
      endDate: new Date(),
      status: FieldTypes.NotStarted,
      destinations: ['abd'],
    },
  ]);
  const dispatch = useDispatch();

  const tripsResponse: TripField[] = useSelector(
    (state: RootState) => state.trips
  );
  const hasTripAdded = tripsResponse.length > 0;

  const fetchTripList = useCallback(async () => {
    try {
      if (!hasTripAdded) {
        const tripListResponse = await getTripList();
        const trips: TripField[] = tripListResponse && tripListResponse.data;
        dispatch(setTripList(trips));
      }
    } catch (error) {
      toast('Cannot get trip list.');
    }
  }, []);

  useEffect(() => {
    fetchTripList();
  }, []);

  setTimeout(() => {
    setTrips(tripsResponse);
  }, 3000);

  return (
    <StyledTripView>
      {trips.map((trip: TripField) => (
        <StyledLink key={trip.id} to={`/trips/${trip.id}`}>
          <StyledCard>
            <h3>{trip.title}</h3>
            <p>
              {formatDate(trip.startDate)} - {formatDate(trip.endDate)}
            </p>
            <StatusText>{trip.status}</StatusText>
          </StyledCard>
        </StyledLink>
      ))}
    </StyledTripView>
  );
};
export default TripView;

const StyledTripView = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  row-gap: 1rem;
  padding: 2rem;
`;

const StatusText = styled.p`
  padding: 0.576rem 0;
  text-align: center;
  background-color: ${(props) => props.theme.colours.bodyBorder};
  border-radius: 6px;
`;

const StyledCard = styled(Card)`
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
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colours.primary};
  &:hover {
    text-decoration: none;
  }
`;
