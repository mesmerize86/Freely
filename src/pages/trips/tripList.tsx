import React from 'react';
import DefaultLayout from 'layouts/template/default';
import TripView from 'features/trip/view/tripList';

const Trips: React.FC = () => {
  return (
    <DefaultLayout>
      <TripView />
    </DefaultLayout>
  );
};
export default Trips;
