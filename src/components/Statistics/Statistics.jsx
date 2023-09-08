import { Component } from 'react';

import PropTypes from 'prop-types';

class Statistics extends Component {
  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          good
          <span className="badge bg-primary rounded-pill">
            {this.props.date.good}
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          neutral
          <span className="badge bg-primary rounded-pill">
            {this.props.date.neutral}
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          bad
          <span className="badge bg-primary rounded-pill">
            {this.props.date.bad}
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          total
          <span className="badge bg-primary rounded-pill">
            {this.props.total}
          </span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          positivePercentage
          <span className="badge bg-primary rounded-pill">
            {this.props.positivePercentage}%
          </span>
        </li>
      </ul>
    );
  }
}

export default Statistics;

Statistics.propTypes = {
  date: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
