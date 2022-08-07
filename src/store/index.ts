import { configureStore } from '@reduxjs/toolkit';
import tripsReducer from 'features/trip/slice';

export const store = configureStore({
  reducer: {
    trips: tripsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the index itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
