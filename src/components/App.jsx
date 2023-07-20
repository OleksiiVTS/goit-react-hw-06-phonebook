import { useState, useEffect } from 'react';
import css from './App.module.css';
import { nanoid } from 'nanoid'; //model.id = nanoid()
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const LS_KAY = 'list_contacts';

const Phonebook = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem(LS_KAY)) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LS_KAY, JSON.stringify(contacts));
  }, [contacts]);

  const onDeleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const onContactInfo = contactData => {
    const revise = contacts.find(
      element =>
        element.name.toLocaleLowerCase() ===
        contactData.name.toLocaleLowerCase()
    );
    if (revise) {
      alert(`${contactData.name} is already in contacts!`);
      return;
    }
    const newContacts = { id: nanoid(), ...contactData };
    setContacts(prevContacts => [newContacts, ...prevContacts]);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const onFilterContact = evt => {
    setFilter(evt.target.value);
  };

  return (
    <div className={css.appDiv}>
      <h1>Phonebook</h1>
      <ContactForm onContactInfo={onContactInfo} />
      <section>
        <h2>Contacts</h2>
        <Filter onFilterData={filter} onFilterContact={onFilterContact} />
        {getVisibleContacts().length > 0 && (
          <ContactList
            onDeleteContact={onDeleteContact}
            listContacts={getVisibleContacts()}
          />
        )}
      </section>
    </div>
  );
};

export default Phonebook;
