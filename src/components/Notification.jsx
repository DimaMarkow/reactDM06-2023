import React from 'react';
import PropTypes from 'prop-types';

class Notification extends React.Component {
  render() {
    return (
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{this.props.message}</li>
      </ul>
    );
  }
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
