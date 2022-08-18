import React, {useState, useEffect} from 'react';
import './Info.css';
import git from './assets/git.png';
import linkedin from './assets/linkedin.png';
import developer from './assets/developer.jpg';
import stackoverflow from './assets/stackoverflow.png';
import codepen from './assets/codepen.jpg';
import Experience from './components/Experience/Experience';
import Certification from './components/Certifications/Certification';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

const URLS={
    'linkedin':'https://www.linkedin.com/in/yashwanth-numburi/',
    'git':'https://github.com/yashwanthnumburi',
    'stackoverflow':'https://stackoverflow.com/users/13519176/yashwanth-numburi',
    'codepen':'https://codepen.io/Yash__'
}

export default function Info(){

    const openNewWindow=(url)=>{
        window.open(url);
    }

    return <React.Fragment>
        <div className='container'> 
        <div className='info-container'>
            <div className='left-info-container'>
                <div className='info-content'>
                    <h1 className='name-h1'>Yashwanth Numburi</h1>
                </div>
                <div className='brief'>
                A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.
                </div>
                <div className='icons'>
                   <a onClick={()=>openNewWindow(URLS['linkedin'])}><img className='social-icon' src={linkedin}></img></a>
                   <a onClick={()=>openNewWindow(URLS['git'])}><img className='social-icon' src={git}></img></a>
                   <a onClick={()=>openNewWindow(URLS['stackoverflow'])}><img className='social-icon' src={stackoverflow}></img></a>
                   <a onClick={()=>openNewWindow(URLS['codepen'])}><img className='social-icon' src={codepen}></img></a>
                </div>
            </div>
            <div className='right-info-container'>
                <img className='devloper-image' src={developer}></img>
            </div>
        </div>
        <Experience></Experience>
        <Certification></Certification>
        <Skills></Skills>
        <Contact></Contact>
        <footer className='footer'>I am still working on ehancing this portfolio.</footer>
        </div>
    </React.Fragment>
}