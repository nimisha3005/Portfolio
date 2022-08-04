import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrapp, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Publications.scss';


const Publications = () => {
  const [publications, setPublications] = useState([]);

useEffect(() => {
  const query = '*[_type == "publications"] | order(order asc)';

  client.fetch(query).then((data) => {
    setPublications(data);
  });

  
}, []);

  return (
    <>
    <div className="section-card">
      
    <h2 className="heading">publications.</h2>
        <div className="app__skills-container">
            
            <div className="app__skills-exp">
            {publications.map((publication) => (               
                        
                        <div class="container">
                                <div class="project shadow-large" data-aos="fade-right">
                                    
                                    <div class="project-info">
                                        <h2>{publication.name}</h2>
                                        <h4>{publication.author}</h4>
                                        <h4 className='loc'>{publication.location}</h4>
                                        <p>{publication.desc}</p>
                                        <div className="action">
                                        <a href={publication.link} target="_blank" className='button'>PAPER</a>
                                        </div>
                                    </div>

                                    <div class="project-image">
                                        <img class="img-responsive" src={urlFor(publication.imgUrl)} alt={publication.name}/>
                                    </div>

                                </div>
                                
                        </div>
                

            ))}
            </div>
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

export default AppWrapp(Publications, 'publications');