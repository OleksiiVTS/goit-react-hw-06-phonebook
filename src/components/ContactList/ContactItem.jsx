import PropTypes from 'prop-types';
import React from 'react';

const ContactItem = ({ onDeleteContact, id, name, number }) => (
  <>
    <p>
      {name}: {number}
    </p>
    <button type="button" onClick={() => onDeleteContact(id)}>
      &times;
    </button>
  </>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
