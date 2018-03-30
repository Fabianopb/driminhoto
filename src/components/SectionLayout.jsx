import React from 'react';
import PropTypes from 'prop-types';
import styles from './SectionLayout.module.scss';

const SectionLayout = ({children}) => (
  <div className={styles.sectionLayout}>
    <div className={styles.sideSpace} hide-xs='true' />
    <div className={styles.centralContent}>
      {children}
    </div>
    <div className={styles.sideSpace} hide-xs='true' />
  </div>
);

SectionLayout.propTypes = {
  children: PropTypes.any.isRequired
};

export default SectionLayout;
