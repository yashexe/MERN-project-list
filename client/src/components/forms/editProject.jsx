import { useState } from "react"
import { useProjectContext } from "../../hooks/useProjectsContext"

import isValidURL from "../../utils/urlValidation"
import toArrayObjects from "../../utils/toArrayObjects"
import toString from "../../utils/toString"

const EditProject = ({selectedProject}) => {
    const [title,setTitle] = useState(selectedProject.title)
    const [attachments,setAttachments] = useState(selectedProject.attachments)
    const [description,setDescription] = useState(toString(selectedProject.jotnotes))
    const [error, setError] = useState(null)
    const {dispatch} = useProjectContext()

    const handleEditProject = async (e) => {
        e.preventDefault()

        if(!isValidURL(attachments)) setAttachments('')

        const jotnotes = toArrayObjects(description)

        const project = {title,attachments,jotnotes}

        const response = await fetch('api/projects/' + selectedProject._id, {
            method: 'PATCH',
            body: JSON.stringify(project),
            headers: {
                'content-type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok) setError(json.error)
        if(response.ok) {
            setError(null)
            setTitle('')
            setAttachments('')
            setDescription('')
            dispatch({type: "EDIT_PROJECT",payload: json})
        }
    }

    return (
        <div className='popup'>
            <form className='form-fields'>
                <fieldset>
                    <legend>Edit this Project!</legend>
                    <li>
                        <label>Title:</label>
                        <input type='text' placeholder="Project Title"
                        value={title}
                        onChange={ e => setTitle(e.target.value) }
                        />
                    </li>
                    <li>
                        <label>Github:</label>
                        <input type='url' placeholder="Github Link"
                        value={attachments}
                        onChange={ e => setAttachments(e.target.value) }
                        />
                    </li>
                    <li className='jotnote-editor'>
                        <label>Jotnotes:</label>
                        <textarea type='text' placeholder="Add up to 5 jotnotes!"
                        rows='10'
                        value={description}
                        onChange={ e => setDescription(e.target.value)}
                        />
                    </li>

                    <li>
                        <button className="new-project-button"
                        onClick={handleEditProject}>Edit Project</button>
                        {error && <div className="error">{error}</div>}
                    </li>
                </fieldset>
            </form>
        </div>
    )
}
export default EditProject