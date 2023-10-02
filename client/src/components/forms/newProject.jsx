import { useState } from "react"
import { useProjectContext } from "../../hooks/useProjectsContext"

const NewProject = () => {
    const [title,setTitle] = useState('')
    const [attachments,setAttachments] = useState('')
    const [jotnotes,setJotnotes] = useState([])
    const [error, setError] = useState(null)
    const {dispatch} = useProjectContext()


    const handleNewProject = async (e) => {
        e.preventDefault()

        const project = {title,attachments,jotnotes}

        const response = await fetch('api/projects', {
            method: 'POST',
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
            setJotnotes([])
            dispatch({type: "CREATE_PROJECT",payload: json})
            console.log(`New Workout Added: ${json}`)
        }
    }

    return (
        <div className='popup'>
            <div className='new-project-form'>
                <form className='form-fields'>
                    <fieldset>
                        <legend>Add a new Project!</legend>
                        <li>
                            <label>Title:</label>
                            <input type='text' placeholder="Project Title"
                            value={title}
                            onChange={ (e) => setTitle(e.target.value) }
                            />
                        </li>
                        <li>
                            <label>Github:</label>
                            <input type='url' placeholder="Github Link"
                            value={attachments}
                            onChange={ (e) => setAttachments(e.target.value) }
                            />
                        </li>
                        <li className='jotnote-editor'>
                            <label>Jotnotes:</label>
                            <textarea type='text' placeholder="Add up to 5 notes separated by a new line."
                            rows='5'
                            value={jotnotes}
                            onChange={ (e) => setJotnotes(e.target.value)}
                            />
                        </li>

                        <li>
                            <button className="new-project-button"
                            onClick={handleNewProject}>Add Project</button>
                            {error && <div className="error">{error}</div>}
                        </li>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}
export default NewProject