import { createSlice, nanoid } from '@reduxjs/toolkit';
const LS_KAY = 'list_contacts';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: JSON.parse(localStorage.getItem(LS_KAY)) ?? [],
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContacts: {
      reducer(state, action) {
        const index = state.findIndex(contact => contact.id !== action.payload);
        state.splice(index, 1);
      },
      prepare(id) {
        return {
          payload: id,
        };
      },
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
