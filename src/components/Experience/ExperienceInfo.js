import './Experience.css';

const companies={
    'AllState':{
        'Role':'React Redux Developer',
        'Description':'Advisor pro is an insurance webapp for Allstate agents.',
        'Location':'Infosys, Mysore - India',
        'Duration':'June 2019 - Feb 2022',
        'Responsibilities':[
            `Translated wireframes into quality and reusable react components.`,
            `Identification and Implementation of the code improvements that helped to tune system
            performance and decrease latency issues.`,
            `Removed redundancy by creating shared components
            which can be used across multiple apps in the entire
            application.`,
            `Used Publish/Subscribe pattern for the interaction of
            various apps within the application`,
            `Enabled and on boarded the application for Allstate
            Customer Care Center`,
            `Contributed to Allstate React Pattern Library by
            creating new designs.`,
            `Conducted educational sessions for new team
            members about the architecture , development, and
            publishing.`
    ]
    },
    'PWC':{
        'Role':'Angular Developer',
        'Description':`Product Beacon is a web application to show clients how tax is calculated.`,
        'Location':'Infosys, London - UK',
        'Duration':'Feb 2022 - Present',
        'Responsibilities':[
            `Created reusable angular components according to the
            wire frames.`,
            `Participated in peer code reviews and ensuring code
            compliance and company standards.`,
            `Improved the existing PWC’s Appkit library by
            identifying the bugs and providing the enhancements.`,
            `Used HiCharts angular to display graphs in the
            application.`
        ]

    }
};

export default function ExperienceInfo(props){
    return (
        <>
            <div className='role'>{companies[props.company].Role}</div>
            <span className='duration_location'>{companies[props.company].Duration}</span>&nbsp;&nbsp;&nbsp;
            <span className='duration_location'>{companies[props.company].Location}</span>
            <div className='description'>{companies[props.company].Description}</div>
            <ul>
                {companies[props.company].Responsibilities.map((ele,index)=><li key={index}>{ele}</li>)}
            </ul>
        </>
    )
}