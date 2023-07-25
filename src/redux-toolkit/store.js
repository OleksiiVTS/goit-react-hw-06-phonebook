import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filtersReducer } from './_reducer_toolkit';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
