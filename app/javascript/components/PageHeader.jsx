import React from 'react';
import PropTypes from 'prop-types';

export const PageHeader = props => {
  const { title, subtitle } = props;

  return (
    <div className="page-header">
      <span>{title}</span>
      <span>{subtitle}</span>
    </div>
  );
};

PageHeader.defaultProps = {
  title: 'Main Title',
  subtitle: 'Smaller Subtitle'
};

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};
