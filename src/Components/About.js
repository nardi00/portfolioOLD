import React from 'react'
import './About.css'

class About extends React.Component {
    render() {
        return(
            <div className="about-container">
               <div className="about-text">
                    <h3 className="about-title">sobre mim</h3>
                    <p className="about-p">Atualmente estudo desenvolvimento web e crio projetos sozinho com novas tecnologias.  </p>
                    <h3 className="about-title">habilidades</h3>
                    {/* <p className="about-p">Javascript</p>
                    <p className="about-p">React</p>
                    <p className="about-p">UX/UI design</p> */}

                    <ul className='skill-list' >
                        <li>· Javascript</li>
                        <li>· React</li>
                        <li>· UX/UI design</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default About