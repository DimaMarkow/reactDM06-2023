import PropTypes from 'prop-types';

import React from 'react';

const Filter = ({ filterText, onFilterChange }) => {
  const onChange = e => {
    onFilterChange(e.target.value);
  };
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Find contacts by name
          </label>
          <input
            type="text"
            name="filter"
            value={filterText}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
      </form>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  filterText: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func,
};
