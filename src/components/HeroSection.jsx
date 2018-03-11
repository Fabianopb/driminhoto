import React from 'react';
import PropTypes from 'prop-types';
import SectionLayout from './SectionLayout';
import styles from './HeroSection.css';

const HeroSection = ({heroDescription}) => (
  <div className={styles.heroSection}>
    <SectionLayout>
      <div className='content'>
        <div className='description'>{ heroDescription }</div>
        <div className='button-container'>
          <div className='button'>PROJETOS</div>
        </div>
      </div>
      <div className='flex-1' hide-xs='true' />
    </SectionLayout>
  </div>
);

HeroSection.propTypes = {
  heroDescription: PropTypes.string.isRequired
};

export default HeroSection;
