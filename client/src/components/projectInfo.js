import trashCan from '../assets/trashCan.png'
import { useState } from "react"
import { useProjectContext } from '../hooks/useProjectsContext';

import githubWhite from '../assets/githubWhite.png'
import githubBlack from '../assets/githubBlack.png'

const ProjectInfo = ({ project}) => {
    const [trashcan, setTrashCan] = useState(false)

    const {projects, dispatch} = useProjectContext()

    const handleDelete = async () => {
        const response = await fetch('api/projects/' + project._id, {
            method: "DELETE"
        } )

        const json = await response.json()

        if(response.ok) {
            dispatch({type: 'DELETE_PROJECT', payload: json})
        }
    }

    const handleGithubIcon = (id) => {
        const githubIconProjects = projects.map((project) => {
            if (project._id === id) {
                return {
                    ...project,
                    githubIcon: project.githubIcon === githubWhite ? githubBlack : githubWhite,
                };
            }
            return project;
        });
        dispatch({
            type: "SET_PROJECTS",
            payload: githubIconProjects
        });
    };

    return (
        <div key={project._id} className="project-text"
          onClick={() => setTrashCan(!trashcan)}>
            <ul>
                <li className="project-header">
                    <p className="project-title">{project.title}</p>
                    {project.attachments && project.attachments !== "" && (
                        <a className="github-icon-container" href={project.attachments}
                            onMouseEnter={() => handleGithubIcon(project._id)}
                            onMouseLeave={() => handleGithubIcon(project._id)}>
                            <img className="github-icon"
                                src={project.githubIcon === githubWhite ? githubBlack : githubWhite}
                                alt="github">
                            </img>
                        </a>
                    )}
                </li>
                <li className="jotnotes">
                    <ul>
                        {project.jotnotes && project.jotnotes.map( (jotnote) => (
                            <li className="jotnote" key={jotnote._id}>
                                {jotnote.text}
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
            {trashcan && (
                <div className="delete-container">
                    <img src={trashCan} alt='Delete' className='trashcan'
                      onClick={handleDelete}></img>
                </div>
            )}
        </div>
    )
}

export default ProjectInfo