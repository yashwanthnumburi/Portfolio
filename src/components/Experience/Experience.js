import {useState} from 'react';
import './Experience.css';
import ExperienceInfo from './ExperienceInfo';

export default function Experience(){

    const [company, setCompany]=useState('AllState');

    const updateCompany=(e)=>{
        setCompany(e.target.id);
    };

    return <>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div id='experienceHeading' className='experienceHeading'>Experience</div>
        <div className='experienceContainer'>
            <div className='experienceLeft'>
                <div className={`leftNavOption ${company==='AllState' && 'selectedOption'}`} id='AllState' onClick={updateCompany}>Infosys -> AllState</div>
                <div className={`leftNavOption ${company==='PWC' && 'selectedOption'}`} id='PWC' onClick={updateCompany}>Infosys -> PWC</div>
            </div>
            <div className='experienceRight'>
                <ExperienceInfo company={company}></ExperienceInfo>
            </div>
        </div>  
    </>
}

// Todo
// First button css issue when selected
//remove br tags
// should be more responsive