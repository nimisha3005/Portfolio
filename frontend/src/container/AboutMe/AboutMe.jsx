import React from 'react';
import { motion } from 'framer-motion';

import { AppMain } from '../../wrapper'
import { AppWrapp } from '../../wrapper'
import { images } from '../../constants';
import './AboutMe.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const AboutMe = () => (
  <div className="app__header app__flex">
    
    <div id="about" class="section-card">
        <h2 class="heading">about.</h2>
        <div class="about-summary" data-aos="fade-right">
            <p>
                I'm a graduate of USC's Class of 2023 and my passion is Computer Science.
                <br></br>
                My interests inclines towards Artificial Intelligence, Machine Learning, Computer Vision, and Natural Language Processing, complemented by a solid Software Engineering mindset.
            </p>
            <p>
                I'm currently a graduate student working towards my Master of Science (M.Sc.) degree in Computer Science with specialization in Artificial Intelligence.
            </p>
            <p>
                Prior to my studies at USC, I graduated with a Bachelors in Computer Science from GGSIPU Delhi. As an undergrad, I've had the pleasure to work with Prof.&nbsp;
                <a href="https://cse.mait.ac.in/index.php?option=com_content&view=article&id=398" target="_blank">Prerna Sharma</a>
                , Prof.&nbsp;
                <a href="https://cse.mait.ac.in/index.php?option=com_content&view=article&id=387" target="_blank">Deepak Gupta</a>
                , Prof.&nbsp;
                <a href="https://cse.mait.ac.in/index.php/people/faculty/profile?layout=edit&id=394" target="_blank">Moolchand Sharma</a>
                , and Prof.&nbsp;
                <a href="https://www.iiitd.ac.in/shad" target="_blank">Shad Akhtar</a>
                &nbsp;(IIITD).
            </p>
        </div>

        
    </div>
    
          
        
  </div>
  
);

export default AppWrapp(AboutMe, 'aboutme');