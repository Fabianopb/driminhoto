import React from 'react';
import PropTypes from 'prop-types';
import styles from './SectionLayout.css';

const SectionLayout = ({children}) => (
  <div className={styles.sectionLayout}>
    <div className='side-space' hide-xs='true' />
    <div className='central-content'>
      {children}
    </div>
    <div className='side-space' hide-xs='true' />
  </div>
);

SectionLayout.propTypes = {
  children: PropTypes.any.isRequired
};

export default SectionLayout;
