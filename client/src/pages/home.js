import { useEffect, useState } from "react"
import githubWhite from '../assets/githubWhite.png'
import githubBlack from '../assets/githubBlack.png'

import ProjectInfo from '../components/projectInfo'

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
                    <ProjectInfo
                        key={project._id}
                        project={project}
                        handleGithubIcon={handleGithubIcon}
                        githubBlack={githubBlack}
                        githubWhite={githubWhite}/>
                ))}
            </div>
        </div>
    )
}
export default Home