import { Component } from 'react';

import PropTypes from 'prop-types';

class ContactList extends Component {
  render() {
    const contacts = this.props.contacts;

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
                  onClick={() => this.props.onDelete(id)}
                ></button>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

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
