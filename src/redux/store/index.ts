import {persistStore} from 'redux-persist';
import {combineReducers, configureStore} from '@reduxjs/toolkit';

const reducers = combineReducers({});

export const store = configureStore({
  reducer: {},
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
