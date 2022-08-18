import React, {useState, useRef, useEffect} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import pdf from './assets/yashwanth_numburi.pdf';

function Links(props){
    return (
        <>
            <a onClick={()=>props.scrollTo('navigateToExperience')} className={props.className} to="/experience">Experience</a>
            <a onClick={()=>props.scrollTo('certificationContainer')} className={props.className} to="/certifications">Certifications</a>
            <a onClick={()=>props.scrollTo('navigateToSkills')} className={props.className} to="/contact">Skills</a>
            <a onClick={()=>props.scrollTo('experienceHeading')} className={props.className} to="/contact">Contact</a>
            <a href={pdf} target="_blank" className='resume'>Resume</a>
        </>
    );
}

export default function Header() {

    const [hamClicked,setHamBurger]=useState(false);

    const scrollTo=(id)=>{
        document.getElementById(id).scrollIntoView({behavior:'smooth'});
    };

    const handleHamBurger=()=>{
        setHamBurger(!hamClicked);
    };

    return <React.Fragment>
        <div className='header'>
            <Links scrollTo={scrollTo} className='headerItem'></Links>
            <div onClick={handleHamBurger} className='hamBurger'>
                <span className='hamBurgerLine'></span>
                <span className='hamBurgerLine'></span>
                <span className='hamBurgerLine'></span>
            </div>
        </div>
        <div className='headerSm'>
            {hamClicked && 
            <div style={{'position':'fixed','display':'flex','flexDirection':'column','right':'0px','top':'30px'}}>
                <Links ></Links>
            </div>
            }
        </div>
        <br/>
        <br/>
    </React.Fragment>

}