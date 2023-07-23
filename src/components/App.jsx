import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import css from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const LS_KAY = 'list_contacts';

const Phonebook = () => {
  const valueContacts = useSelector(state => state.contacts);
  const valueFilters = useSelector(state => state.filters);

  useEffect(() => {
    localStorage.setItem(LS_KAY, JSON.stringify(valueContacts));
  }, [valueContacts]);

  const getVisibleContacts = () => {
    return valueContacts.filter(contact =>
      contact.name.toLowerCase().includes(valueFilters.toLowerCase())
    );
  };

  return (
    <div className={css.appDiv}>
      <section>
        <h1>Phonebook</h1>
        <ContactForm />
      </section>
      <section>
        <h2>Contacts</h2>
        <Filter />
        {getVisibleContacts().length > 0 && (
          <ContactList listContacts={getVisibleContacts()} />
        )}
      </section>
    </div>
  );
};

export default Phonebook;
