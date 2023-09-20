// import { Component } from 'react';
import css from 'components/Section/section.module.css';
import PropTypes from 'prop-types';

import React from 'react';

const Section = ({ title, children }) => {
  return (
    <div className="container border-bottom">
      <div className={css.wrapper}>
        <h5>{title}</h5>
        {children}
      </div>
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
