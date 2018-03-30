import React from 'react';
import PropTypes from 'prop-types';
import SectionLayout from './SectionLayout';
import styles from './AboutSection.module.scss';
import avatar from '../assets/avatar.png';

const AboutSection = ({biography}) => (
  <SectionLayout>
    <div className={styles.aboutSection}>
      <div className={styles.content}>
        <div className={styles.photoContainer}>
          <img src={avatar} alt='avatar' />
        </div>
        <div className={styles.description}>
          <h2 className={styles.title}>Olá</h2>
          <div className={styles.biography}>{ biography }</div>
        </div>
      </div>
    </div>
  </SectionLayout>
);

AboutSection.propTypes = {
  biography: PropTypes.string.isRequired
};

export default AboutSection;
