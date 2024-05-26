import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import userReducer from './userSlice';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['onboardingUser'],
};

const rootReducer = combineReducers({
  user: userReducer.reducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer as any);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
