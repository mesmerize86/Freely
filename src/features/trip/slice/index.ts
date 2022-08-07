import { createSlice } from '@reduxjs/toolkit';
import { TripField } from 'models/Trip';
import { RootState } from 'store';

const initialState: TripField[] = [];

export const tripSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    addTrip(state, action) {
      return [action.payload, ...state];
    },
    setTripList(state, action) {
      return [...state, ...action.payload];
    },
  },
});

export const selectAllTrips = (state: RootState) => state.trips;

//actions
export const { addTrip, setTripList } = tripSlice.actions;
//reducer
export default tripSlice.reducer;
