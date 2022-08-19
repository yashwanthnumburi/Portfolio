import './Contact.css';
import { useState } from 'react';

const linkedinUrl = 'https://www.linkedin.com/in/yashwanth-numburi/'

export default function Contact() {

    const [toolTip, setToolTip] = useState(false);

    const copyToClipBoard = (e) => {
        const emailId = e.target.innerHTML;
        if (navigator.clipboard) {
            navigator.clipboard.writeText(emailId).then(res => {
                setToolTip(true);
                setTimeout(() => {
                    window.open('https://mail.google.com/mail/u/0/', "_blank");
                    setToolTip(false);
                }, 2000);

            });
        }
    }

    return (
        <>
            <div id='contactContainer' className='contactContainer'>
                <div className='contactHeading'>Get in Touch</div>
                <div className='contactContent'>
                    I am interested in developing applications to solve problems so if you have any ideas or If you are intrested to hire me you
                    can reach out to me via
                </div>
                <div className='contactContent'><a href={linkedinUrl} className='contactLink' target="_blank">Linkedin</a></div>
                <div className='contactContent'>
                    Gmail Id <a onClick={copyToClipBoard} className='contactLink' style={{ 'position': 'relative' }} target="_blank">yashwanthsa@gmail.com
                    {toolTip && <div className='tooltip'>
                            Id is copied to ClipBoard!!!
                    </div>}
                    </a>

                </div>

            </div>
        </>
    )
}

//can create a reusable tooltip to and add top left right based on its parent dynamically