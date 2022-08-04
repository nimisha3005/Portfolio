import React from 'react'
import { NavigationDots,SocialMedia } from '../components'

const AppFooter = (Component,idName,classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia/>

        <div className='app__wrapper app__flex'>
            <Component/>
            <div className='copyright'>
                <p className='p-text'>&copy; 2022 Nimisha Mittal</p>
            </div>
        </div>

        <NavigationDots active={idName}/>

    </div>
  )
}

export default AppFooter