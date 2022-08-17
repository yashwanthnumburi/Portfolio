import './Skills.css';
import React from '../../assets/React.png';
import Redux from '../../assets/Redux.png';
import Js from '../../assets/javascript.jpg';
import Express from '../../assets/express.png';
import Node from '../../assets/node.png';
import Angular from '../../assets/Angular.png';
import MongoDB from '../../assets/mongoDb.png';
import SQL from '../../assets/sql.png';
import TypeScript from '../../assets/TypeScript.png';
import Html from '../../assets/html.png';
import CSS from '../../assets/css.png';
import GIT from '../../assets/GIT.jpg';
import Webpack from '../../assets/webpack.png';
import Eslint from '../../assets/eslint.png';


export default function Skills() {
    return (
        <>
            <div className='skillHeading'>Skills</div>
            <div className='skillContainer'>
                <img className='skill' src={React}></img>
                <img className='skill' src={Html}></img>
                <img className='skill' src={CSS}></img>
                <img className='skill' src={Redux}></img>
                <img className='skill' src={Js}></img>
                <img className='skill' src={TypeScript}></img>
                <img className='skill' src={Express}></img>
                <img className='skill' src={Node}></img>
                <img className='skill' src={Angular}></img>
                <img className='skill' src={MongoDB}></img>
                <img className='skill' src={SQL}></img>
                <img className='skill' src={GIT}></img>
                <img className='skill' src={Webpack}></img>
                <img className='skill' src={Eslint}></img>
                

            </div>
        </>
    )
}

//Find icons such that there is no background image expect letters