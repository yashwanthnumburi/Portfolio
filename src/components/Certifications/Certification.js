import './Certification.css';
import Card from './Card';

const certifications=[
    {
        'title':'React',
        'Community':'Coursera',
        'url':'https://www.coursera.org/account/accomplishments/verify/P8TU2F3Z4SQA',
        'image':'Coursera'
    },
    {
        'title':'React',
        'Community':'HackerRank',
        'url':'https://www.hackerrank.com/certificates/e7b2e09cabe4',
        'image':'HackerRank'
    },
    {
        'title':'JavaScript',
        'Community':'HackerRank',
        'url':'https://www.hackerrank.com/certificates/9407c477a328',
        'image':'HackerRank'
    },
    {
        'title':'AWS DynamoDB',
        'Community':'Linkedin',
        'url':'https://www.linkedin.com/learning/certificates/1ea0a86d7251c6c36a0f74d464b89c918376dbb9037a8ce8236c741a8cb49aee?trk=share_certificate',
        'image':'Linkedin'
    },
    {
        'title':'Redis',
        'Community':'Linkedin',
        'url':'https://www.linkedin.com/learning/certificates/38b44f2e9a6262702a684fa82b3958c485156904103a9dd90458ad5173f691e1?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2OKy6HGDR3eX%2B%2BynzGws%2Bw%3D%3D',
        'image':'Linkedin'
    }
]


export default function Certification(){
    return (
        <>
            <div id='certificationContainer' className='certificationContainer'>
            <div id='certificationHeading' className='heading'>Certifications</div>
            <div className='gridContainer'>
                {certifications.map(card=>
                    <Card card={card}></Card>
                )}
            </div>
            </div>
        </>
    )
}