import React, { useState, useEffect, useCallback } from 'react';
import TripDetailsComponent from 'features/trip/view/tripDetails';
import DefaultLayout from 'layouts/template/default';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TripField } from 'models/Trip';
import { RootState } from 'store';
import { getTripById } from 'api/trip';
import Breadcrumb from 'features/breadcrumb';

const TripDetails: React.FC = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState<TripField>();

  const tripField: TripField | undefined = useSelector((state: RootState) =>
    state.trips.find((trip) => trip.id === id)
  );

  const fetchTripById = useCallback(async () => {
    const trip = await getTripById(id);
    setTrip(trip);
  }, []);

  useEffect(() => {
    // if tripField is not defined or on page refresh, get the data from API
    !tripField ? fetchTripById() : setTrip(tripField);
  }, []);

  return (
    <DefaultLayout>
      <Breadcrumb />
      <TripDetailsComponent tripDetail={trip} />
    </DefaultLayout>
  );
};
export default TripDetails;
