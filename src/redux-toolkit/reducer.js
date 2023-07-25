import { createReducer } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, setStatusFilter } from './actions';
const LS_KAY = 'list_contacts';

const contactsInitialState = JSON.parse(localStorage.getItem(LS_KAY)) ?? [];
export const contactsReducer = createReducer(contactsInitialState, builder => {
  builder
    .addCase(addContacts, (state, action) => {
      // state.push(action.payload);
      return [...state, action.payload];
    })
    .addCase(deleteContacts, (state, action) => {
      // const index = state.findIndex(contact => contact.id !== action.payload);
      // state.splice(index, 1);
      return state.filter(contact => contact.id !== action.payload);
    });
});

const filtersInitialState = '';
export const filtersReducer = createReducer(filtersInitialState, builder => {
  builder.addCase(setStatusFilter, (state, action) => {
    return (state = action.payload);
  });
});
