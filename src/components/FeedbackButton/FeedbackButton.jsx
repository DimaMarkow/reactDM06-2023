import { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackButton extends Component {
  render() {
    return (
      <div
        className="btn-group"
        role="group"
        aria-label="Basic outlined example"
      >
        <button
          name="good"
          type="button"
          className="btn btn-outline-primary"
          onClick={this.props.handleClick}
        >
          good
        </button>
        <button
          name="neutral"
          type="button"
          className="btn btn-outline-primary"
          onClick={this.props.handleClick}
        >
          neutral
        </button>
        <button
          name="bad"
          type="button"
          className="btn btn-outline-primary"
          onClick={this.props.handleClick}
        >
          Right
        </button>
      </div>
    );
  }
}

export default FeedbackButton;

FeedbackButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
