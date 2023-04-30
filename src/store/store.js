import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice/contactsSlice';
import { filterReducer } from './filterSlice/filterSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterReducer,
  },
});

export const persistor = persistStore(store);
