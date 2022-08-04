import React from 'react'
import { BsTwitter, BsLinkedin, BsFillFileEarmarkPdfFill} from 'react-icons/bs'
import { FaGoogle, FaGithub } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
          <a href={process.env.PUBLIC_URL + 'NIMISHA MITTAL_Resume.pdf'} download='Nimisha Mittal.pdf'>  
            <BsFillFileEarmarkPdfFill/>
          </a>
        </div>
        <div>
          <a href='https://twitter.com/nimishamittal30' target='_blank'>  
            <BsTwitter/>
          </a>
        </div>
        <div>
          <a href='https://www.linkedin.com/in/nimisha-mittal-3099/' target='_blank'>       
            <BsLinkedin/>
          </a>
        </div>
        <div>
          <a href='https://scholar.google.com/citations?hl=en&user=9aN_XqwAAAAJ' target='_blank'>
            <FaGoogle/>
          </a>
        </div>
        <div>
          <a href='https://github.com/nimisha3005' target='_blank'>
            <FaGithub/>
          </a>
        </div>
    </div>
  )
}


export default SocialMedia