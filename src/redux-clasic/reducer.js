import { combineReducers } from 'redux';

const LS_KAY = 'list_contacts';

const contactsInitialState = JSON.parse(localStorage.getItem(LS_KAY)) ?? [];
const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContacts':
      return [...state, action.payload];
    case 'contacts/deleteContacts':
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};

const filtersInitialState = '';
const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'filters/setValueFilter':
      return (state = action.payload);
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});
