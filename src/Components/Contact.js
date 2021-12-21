import React from 'react'
import './Contact.css'

class Contact extends React.Component {
    render() {
        return(
            <div className="contact-container">
                <div className="contact-box">
                    <h3 className="contact-title">links</h3>    
                    <ul className="contact-list">
                        <li><a href="mailto:guilhermenardi3@outlook.com" className='anchor'>· Email</a></li>
                        <li><a href="https://github.com/nardi00" className='anchor'>· Github</a></li>
                        <li><a href="https://www.linkedin.com/in/guilherme-nardi-7a3406217/" className='anchor'>· LinkedIn</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Contact