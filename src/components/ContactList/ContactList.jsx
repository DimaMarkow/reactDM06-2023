import PropTypes from 'prop-types';

import React from 'react';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <ul className="list-group-item">
        {contacts.map(({ id, name, number }) => (
          <li key={id} className="list-group-item">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasLabel">
                {name} {number}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                onClick={() => onDelete(id)}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func,
};

ContactList.defaultProps = {
  contacts: [],
};
