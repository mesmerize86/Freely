import { TripField } from 'models/Trip';
import { freelyAPI } from 'api/apiBase';
import { AxiosPromise } from 'axios';

/**
 * get trip list
 */
export const getTripList = (): AxiosPromise => {
  return freelyAPI().get('./trips-list.json');
};

export const getTripById = async (
  tripId: string | undefined
): Promise<TripField> => {
  const response = await freelyAPI().get('./trips-list.json');
  return response.data.find((trip: TripField) => trip.id === tripId);
};
