import React from 'react'
import './Menu.css'
import About from './About'
import Text from './Text'
import Projects from './Projects'
import Contact from './Contact'


class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            isAboutOn: false,
            isProjectsOn: false,
            isContactOn: false,
        }

        this.handleClickAbout = this.handleClickAbout.bind(this)
        this.handleClickProject = this.handleClickProject.bind(this)
        this.handleClickContact = this.handleClickContact.bind(this)
    }

    handleClickAbout(){
        this.setState({
            isAboutOn: !this.state.isAboutOn,
            isProjectsOn: false,
            isContactOn: false
        })   
        console.log("Project: " + this.state.isProjectsOn)
        console.log("About: " + this.state.isAboutOn) 
    }

    handleClickProject() {
        this.setState({
            isProjectsOn: !this.state.isProjectsOn,
            isAboutOn: false,
            isContactOn: false
        })
        console.log("Project: " + this.state.isProjectsOn)
        console.log("About: " + this.state.isAboutOn)
    }

    handleClickContact() {
        this.setState({
            isContactOn: !this.state.isContactOn,
            isAboutOn: false,
            isProjectsOn: false
        })
    }

    render() {
        return(
            <div>
                <div className='menu-container' >
                    <ul className="nav__links">
                        <li><button onClick={this.handleClickAbout}>sobre</button></li>
                        <li><button onClick={this.handleClickProject}>projetos</button></li>
                        <li><button onClick={this.handleClickContact}>contato</button></li>
                    </ul>
                </div>
                
                <div className="left-container">
                    {this.state.isAboutOn ? <About /> : <Text />}
                    {this.state.isProjectsOn ? <Projects /> : null }
                    {this.state.isContactOn ? <Contact /> : null }
                </div>

            </div>
        )
    }
}

export default Menu