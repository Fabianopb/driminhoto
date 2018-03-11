import React from 'react';
import SectionLayout from './SectionLayout';
import styles from './AboutSection.css';
import avatar from '../assets/avatar.png';

const biography = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.';

const AboutSection = () => (
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

export default AboutSection;
