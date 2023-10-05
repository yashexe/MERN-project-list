import { useState } from "react"

import Attachment from "./attachment";
import Requests from "./requests";

const ProjectInfo = ({ project, toggleEditProject}) => {
    const [request, setRequest] = useState(false)

    return (
        <div key={project._id} className="project-text"
          onClick={() => setRequest(!request)}>
            <ul>
                <li className="project-header">
                    <p className="project-title">{project.title}</p>
                    {(project.attachments && project.attachments !== "") && (
                        <Attachment key={project._id} project={project} />
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
            {request && (
                <Requests
                    key={project._id}
                    project={project}
                    toggleEditProject={toggleEditProject}
                />
            )}
        </div>
    )
}

export default ProjectInfo