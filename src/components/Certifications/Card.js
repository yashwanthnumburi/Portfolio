import Coursera from '../../assets/coursera.png';
import HackerRank from '../../assets/HackerRank.png';
import Linkedin from '../../assets/linkedin.jpg';
import MongoDB from '../../assets/mongoDb.png';

const images={
    'Coursera':Coursera,
    'HackerRank':HackerRank,
    'Linkedin':Linkedin,
    'MongoDB':MongoDB
}

export default function Card({card}){
    return (
        <>
            <div className='card'>
                <div className='cardItemOne'>
                    <a className='certificationLink' href={card.url} target="_blank"><img className='certificationImage' src={images[card.image]}/></a>
                </div>
                <div className='cardItemTwo'>
                    <a className='certificationLink' href={card.url} target="_blank"> <div className='courseName'>{card.title}</div></a>
                </div>
            </div>
        </>
    )
}