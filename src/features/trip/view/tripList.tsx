import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { TripField } from 'models/Trip';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { FieldTypes } from 'models/Field';
import { getTripList } from 'api/trip';
import { setTripList } from '../slice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import TripCard from 'components/tripCard';

const TripView: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [trips, setTrips] = useState<TripField[]>([
    {
      id: '2mac3sa',
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
      const tripListResponse = await getTripList();
      const trips: TripField[] = tripListResponse && tripListResponse.data;
      dispatch(setTripList(trips));
      setTrips(trips);
      setIsLoading(false);
    } catch (error) {
      toast('Cannot get trip list.');
    }
  }, []);

  useEffect(() => {
    if (!hasTripAdded) {
      fetchTripList();
    } else {
      setTimeout(() => {
        setTrips(tripsResponse);
        setIsLoading(false);
      }, 3000);
    }
  }, []);

  return (
    <StyledTripView>
      {trips.map((trip: TripField) => (
        <StyledLink key={trip.id} to={`/trips/${trip.id}`}>
          <TripCard trip={trip} isLoading={isLoading} />
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

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colours.primary};
  &:hover {
    text-decoration: none;
  }
`;
