import { createSlice } from '@reduxjs/toolkit';
import { TripField } from 'models/Trip';

const initialState: TripField[] = [];

export const tripSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    addTrip(state, action) {
      return [action.payload, ...state];
    },
    setTripList(state, action) {
      return [...action.payload];
    },
  },
});

//actions
export const { addTrip, setTripList } = tripSlice.actions;
//reducer
export default tripSlice.reducer;
