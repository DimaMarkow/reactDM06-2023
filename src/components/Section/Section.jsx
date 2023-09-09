import { Component } from 'react';
import css from 'components/Section/section.module.css';
import PropTypes from 'prop-types';

class Section extends Component {
  render() {
    return (
      <div className="container border-bottom">
        <div className={css.wrapper}>
          <h5>{this.props.title}</h5>
          {this.props.children}
        </div>
      </div>
      // <div className={css.wrapper}>
      //   <h2 className={css.title}>{this.props.title}</h2>
      //   {this.props.children}
      // </div>
    );
  }
}

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
