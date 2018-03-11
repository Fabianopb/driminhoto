import React from 'react';
import PropTypes from 'prop-types';
import SectionLayout from './SectionLayout';
import styles from './AboutSection.css';
import avatar from '../assets/avatar.png';

const AboutSection = ({biography}) => (
  <SectionLayout>
    <div className={styles.aboutSection}>
      <div className='content'>
        <div className='photo-container'>
          <img src={avatar} alt='avatar' />
        </div>
        <div className='description'>
          <h2 className='title'>Olá</h2>
          <div className='biography'>{ biography }</div>
        </div>
      </div>
    </div>
  </SectionLayout>
);

AboutSection.propTypes = {
  biography: PropTypes.string.isRequired
};

export default AboutSection;
