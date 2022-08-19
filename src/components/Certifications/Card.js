import Coursera from '../../assets/coursera.png';
import HackerRank from '../../assets/HackerRank.png';
import Linkedin from '../../assets/linkedin.jpg';
import MongoDB from '../../assets/mongoDb.png';
import Infosys from '../../assets/infosys.png'

import ToolTip from '../shared/ToolTip/Tooltip';
import { useRef, useEffect, useState } from 'react';

const images = {
    'Coursera': Coursera,
    'HackerRank': HackerRank,
    'Linkedin': Linkedin,
    'MongoDB': MongoDB,
    'Infosys': Infosys
}

export default function Card({ card }) {

    const [isEllipsis, setIsEllipsis] = useState(false);

    const courseName = useRef();

    useEffect(() => {

    }, []);

    const onHover = (e) => {
        console.log("hai")
        if (e.target.offsetWidth < e.target.scrollWidth) {
            console.log("hai")
            setIsEllipsis(true);
        }
    }

    const onLeave = (e) => {
        console.log("bye")

        setIsEllipsis(false);
    }

    return (
        <>
            <div className='card'>
                <div className='cardItemOne'>
                    {!card.url ? <img className='certificationImage' src={images[card.image]} /> :
                        <a className='certificationLink' href={card.url} target="_blank"><img className='certificationImage' src={images[card.image]} /></a>}
                </div>
                <div className='cardItemTwo'>
                    {card.url ?
                        <a className='certificationLink' href={card.url} target="_blank">
                            <div className='courseNameWrapper'>
                                <div className='courseName textOverflow' onMouseEnter={onHover} onMouseLeave={onLeave}>{card.title}</div>
                                {isEllipsis && <ToolTip text={card.title}></ToolTip>}
                            </div>
                        </a>
                        :
                        <div className='courseNameWrapper'>
                            <div className='courseName textOverflow' onMouseEnter={onHover} onMouseLeave={onLeave}>{card.title}</div>
                            {isEllipsis && <ToolTip text={card.title}></ToolTip>}
                        </div>

                    }
                </div>
            </div>
        </>
    )
}