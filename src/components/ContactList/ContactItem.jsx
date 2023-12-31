import PropTypes from 'prop-types';
import React from 'react';
import { useContacts } from 'redux/useContacts';

const ContactItem = ({ id, name, number }) => {
  const { deleteContact } = useContacts();
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={() => deleteContact(id)}>
        &times;
      </button>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
