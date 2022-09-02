import ToolTip from '../shared/ToolTip/Tooltip';
import { useRef, useEffect, useState } from 'react';

const images = {
    'Coursera': 'https://drive.google.com/uc?export=view&id=1GVsbj_4jUdp8cxjBNPHPHJrSeXfA8MVs',
    'HackerRank': 'https://drive.google.com/uc?export=view&id=1J1vIxwFn9zPMgA1ziobq_lX6R3FeQKoi',
    'Linkedin': 'https://drive.google.com/uc?export=view&id=1P2g8Si6dSxfBfiTYV4lFr2vD5p6QuRxI',
    'MongoDB': 'https://drive.google.com/uc?export=view&id=1kCPigCh0C5Zlr-zcoevJmFn3vuYwoix8',
    'Infosys': 'https://drive.google.com/uc?export=view&id=1RqWKOVr142ZYU4mLfWbH8fYVud6dbZ1O'
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