import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Rating } from 'semantic-ui-react';
import SectionLayout from './SectionLayout';
import styles from './SkillsSection.css';

const SkillsSection = ({skills}) => (
  <SectionLayout>
    <div className={styles.skillsSection}>
      <div className='flex-1' hide-xs='true' />
      <div className='content'>
        <Divider horizontal><h2>Principais skills</h2></Divider>
        <div className='skills-container'>
          <div className='names'>
            { skills.map((skill, index) => <div key={index}>{ skill.name }</div>) }
          </div>
          <div className='ratings'>
            {
              skills.map((skill, index) =>
                <div key={index} className='stars'>
                  <Rating defaultRating={skill.rating} maxRating={5} disabled icon='star' />
                </div>
              )
            }
          </div>
        </div>
      </div>
      <div className='flex-1' hide-xs='true' />
    </div>
  </SectionLayout>
);

SkillsSection.propTypes = {
  skills: PropTypes.array.isRequired
};

export default SkillsSection;
