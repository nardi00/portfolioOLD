import React from 'react'
import './Projects.css'

class Projects extends React.Component {
    render() {
        return(
            <div className="project-container">
                <div className="project-box">
                    <h3 className="projects-title">projetos</h3>    
                    <div className='projects'>
                        <a href="https://nardi00.github.io/react-weather-app/" className='project-title anchor'>· Aplicativo de temperatura</a>
                        <p className='project-description'>aplicativo React que mostra a temperatura no seu local através da geolocalização do browser - <span><a href='https://github.com/nardi00/react-weather-app'>github</a></span></p>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects
