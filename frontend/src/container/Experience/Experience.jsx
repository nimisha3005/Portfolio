import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrapp, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Experience.scss';


const Skills = () => {
  const [experiences, setExperiences] = useState([]);

useEffect(() => {
  const query = '*[_type == "experiences"] | order(order asc)';

  client.fetch(query).then((data) => {
    setExperiences(data);
  });

  
}, []);

  return (
    <>
      <h2 className="heading_exp">experience.</h2>

      <div className="app__skills-container">
        {/* <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div> */}
        <div className="app__skills-exp">
          {experiences.map((experience) => (

            <div class="timeline-inverted">
              {experience.works.map((work) => (
                <>
                <div class="timeline-image">
                  <img class="img-circle img-responsive" src={urlFor(work.icon)} alt={work.name}/>
                </div>
              
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h5>{experience.start} - {experience.end}</h5>
                  <h4 class="subheading">
                    <a href={(work.company)} target="blank">&nbsp;&nbsp;&nbsp;{work.name}
                    </a>
                  </h4>
                </div>
                
                <div class="timeline-body">
                  <h4>{work.role}</h4>
                  <p class="lead">{work.desc}</p>
                </div>
              </div>
            
            </>
            ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// export default AppWrapp(
//   MotionWrap(Experience, 'app__skills'),
//   'skills',
//   'app__whitebg',
// );

export default AppWrapp(Skills, 'experience');