import React from 'react';
import { motion } from 'framer-motion';

import { AppMain } from '../../wrapper'
import { AppWrapp } from '../../wrapper'
import { images } from '../../constants';
import './Header.scss';

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

const Header = () => (
  <div className="app__header app__flex">
    
    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >

    </motion.div>
    

    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      
      <div className="app__header-badge">
        {/* <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello there!!!</p>
          </div>
        </div> */}

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__header-img"
        >
          <img src={images.profile} alt="profile_bg" />
          
        </motion.div>
      
        <div className='name'>
          Nimisha Mittal
        </div>
      </div>
    
    </motion.div>

    
    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
     
      {/* <div id="coder-desc" className='description' style={{opacity:1}}>
        <h3>
          <span className='chevron-left'>&lt;</span>
          coder
          <span className='chevron-right'>&gt;</span>
        </h3>
      </div>
      <div className='lower_desc'>
        <span className='chevron-left'>&lt;</span>
          Machine Learning
        <span className='chevron-right'>&gt;</span>
        &nbsp;&nbsp;&nbsp;
        <span className='chevron-left'>&lt;</span>
          OpenCV
        <span className='chevron-right'>&gt;</span>
        &nbsp;&nbsp;&nbsp;
        <span className='chevron-left'>&lt;</span>
          NLP
        <span className='chevron-right'>&gt;</span>
        &nbsp;&nbsp;&nbsp;
      </div>
      <div className="lower_desc">
        <span className='chevron-left'>&lt;</span>
          MEAN
        <span className='chevron-right'>&gt;</span>
        &nbsp;&nbsp;&nbsp;
        <span className='chevron-left'>&lt;</span>
          Python
        <span className='chevron-right'>&gt;</span>
        &nbsp;&nbsp;&nbsp;
        <span className='chevron-left'>&lt;</span>
          SQL
        <span className='chevron-right'>&gt;</span>
        &nbsp;&nbsp;&nbsp;
        <span className='chevron-left'>&lt;</span>
          Android Studio
        <span className='chevron-right'>&gt;</span>
      </div> */}
    </motion.div>
  </div>
);

export default AppMain(Header, 'home');