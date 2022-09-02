import React, { useState, useRef, useEffect } from 'react';

function Links(props) {
    return (
        <>
            <a onClick={() => props.scrollTo('navigateToExperience')} className={props.className} to="/experience">Experience</a>
            <a onClick={() => props.scrollTo('certificationContainer')} className={props.className} to="/certifications">Certifications</a>
            <a onClick={() => props.scrollTo('navigateToSkills')} className={props.className} to="/contact">Skills</a>
            <a onClick={() => props.scrollTo('contactContainer')} className={props.className} to="/contact">Contact</a>
            <a href='https://drive.google.com/file/d/1eg0JLpH-8cfAFQNiYlYomz91tdLWZty_/view?usp=sharing' target="_blank" className={props.resume ? 'resumeSm' : 'resume'}>Resume</a>
        </>
    );
}

export default function Header() {

    const [hamClicked, setHamBurger] = useState(false);

    const scrollTo = (id) => {
        handleHamBurger();
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    const handleHamBurger = () => {
        setHamBurger(!hamClicked);
    };

    return <React.Fragment>
        <div className='header'>
            <div className='logo'>YN</div>
            <div className='linkContainer'>
                <Links scrollTo={scrollTo} className='headerItem'></Links>
            </div>
            {!hamClicked && <div onClick={handleHamBurger} className='hamBurger'>
                <span className='hamBurgerLine'></span>
                <span className='hamBurgerLine'></span>
                <span className='hamBurgerLine'></span>
            </div>}
            {hamClicked &&
                <button className='cancel' onClick={() => setHamBurger(!hamClicked)}>X</button>
            }
        </div>
        {hamClicked && <div className='headerSm'>
            <div style={{ 'display': 'flex', 'flexDirection': 'column' }}>
                <Links scrollTo={scrollTo} resume='resumeSm' className='headerItemSm'></Links>
            </div>
        </div>
        }
        <br />
        <br />
    </React.Fragment>

}

//need to remove headerSm when it is opened --> screen size increased --> reduced again