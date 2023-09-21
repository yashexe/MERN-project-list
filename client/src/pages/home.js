import { useEffect, useState } from "react"
import githubWhite from '../assets/githubWhite.png'
import githubBlack from '../assets/githubBlack.png'

const Home = () => {
    const [projects, setProjects] = useState(null)
    useEffect( () => {
         const fetchProject = async () => {

            const response = await fetch('/api/projects') //for production "proxy": wont work

            if(response.ok) {
                const json = await response.json()
                setProjects(json)
            }
         }
         fetchProject()
    },[])
    
    const handleGithubIcon = (id) => {
        const githubIconProject = projects.map( (project) => {
            if (project._id === id) return {
                ...project,
                githubIcon: project.githubIcon === githubWhite ? githubBlack : githubWhite,
            }
            return project
        })
        setProjects(githubIconProject)
    }
    return (

        <div className="home">

            <div className="projects">
                {projects && projects.map( (project) => (
                    <p key={project._id} className="project-text">
                        <ul>
                            <li className="project-header">
                                <p className="project-title">{project.title}</p>
                                <a className="github-icon-container" href={project.attachments}
                                    onMouseEnter={() => handleGithubIcon(project._id)}
                                    onMouseLeave={() => handleGithubIcon(project._id)}>
                                    <img className="github-icon"
                                        src={project.githubIcon === githubWhite ? githubBlack : githubWhite}
                                        alt="github">
                                    </img>
                                </a>
                            </li>

                            <li className="jotnotes"><ul>
                                {project.jotnotes && project.jotnotes.map( (jotnote) => (
                                    <li key={jotnote._id}>{jotnote.text}</li>
                                ))}
                            </ul></li>
                        </ul>
                    </p>
                ))}
            </div>
        </div>
    )
}
export default Home