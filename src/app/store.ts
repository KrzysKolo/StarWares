import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
/* import counterReducer from '../features/counter/counterSlice'; */
import starWarsReducer from '../features/films/filmsSlice';
import windowsReducer from '../features/windows/windowsSlice';

export const store = configureStore({
  reducer: {
    /*    counter: counterReducer, */
    starWars: starWarsReducer,
    windows: windowsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
