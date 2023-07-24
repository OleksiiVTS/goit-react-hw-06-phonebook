import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContacts = createAction(
  'contacts/addContacts',
  (name, number) => {
    return {
      type: 'contacts/addContacts',
      payload: {
        id: nanoid(),
        name,
        number,
      },
    };
  }
);

export const deleteContacts = createAction('contacts/deleteContacts', id => {
  return {
    type: 'contacts/deleteContacts',
    payload: id,
  };
});

export const setStatusFilter = createAction('filters/setValueFilter', value => {
  return {
    type: 'filters/setValueFilter',
    payload: value,
  };
});
