import React from 'react';
import PropTypes from 'prop-types';
import SectionLayout from './SectionLayout';
import styles from './HeroSection.module.scss';

const HeroSection = ({heroDescription}) => (
  <div className={styles.heroSection}>
    <SectionLayout>
      <div className={styles.content}>
        <div className={styles.description}>{ heroDescription }</div>
        <div className={styles.buttonContainer}>
          <div className={styles.button}>PROJETOS</div>
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
