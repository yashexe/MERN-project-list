import trashCan from '../assets/trashCan.png'
import { useState } from "react"

const ProjectInfo = ({ project, handleGithubIcon, githubBlack, githubWhite }) => {
    const [trashcan, setTrashCan] = useState(false);


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
                    <img src={trashCan} alt='Delete'></img>
                </div>
            )}
        </div>
    )
}

export default ProjectInfo