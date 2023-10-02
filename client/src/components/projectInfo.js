import { useState } from "react"
import { useProjectContext } from '../hooks/useProjectsContext';

import { Attachment } from "./attachment";

import trashCan from '../assets/trashCan.png'
import editIcon from '../assets/editIcon.png'


const ProjectInfo = ({ project }) => {
    const [request, setRequest] = useState(false)
    const { dispatch} = useProjectContext()

    const handleDelete = async () => {
        const response = await fetch('api/projects/' + project._id, { method: "DELETE" } )

        const json = await response.json()

        if(response.ok) dispatch({type: 'DELETE_PROJECT', payload: json})
    }

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
                <div className='request-container'>
                    <img src={editIcon} alt='Edit' className='edit' 
                    onClick={handleDelete} />
                    <img src={trashCan} alt='Delete' className='trashcan'
                        onClick={handleDelete} />
                </div>
            )}
        </div>
    )
}

export default ProjectInfo