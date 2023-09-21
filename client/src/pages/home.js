import { useEffect, useState } from "react"

const Home = () => {
    const [projects, setProjects] = useState(null)

    useEffect( () => {
         const fetchProject = async () => {

            const response = await fetch('/api/projects') //for production "proxy": wont work

            const json = await response.json()

            if(response.ok) setProjects(json)
            
         }

         fetchProject()
    },[])

    return (

        <div className="home">

            <div className="projects">
                {projects && projects.map( (project) => (
                    <p key={project._id}>
                        <ul>
                            <li>{project.title}</li>
                            <li>{project.attachments}</li>
                        </ul>
                    </p>
                ))}
            </div>
        </div>
    )
}
export default Home