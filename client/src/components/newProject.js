import { useState } from "react"

const NewProject = () => {
    const [title,setTitle] = useState('')
    const [attachments,setAttachments] = useState('')
    const [jotnotes,setJotnotes] = useState([])
    const [error, setError] = useState(null)

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
        console.log("hey",response)
        const json = await response.json()
        if(!response.ok) {
            setError(json.error)
        }

        if(response.ok) {
            setError(null)
            setTitle('')
            setAttachments('')
            setJotnotes([])

            console.log(`New Workout Added: ${json}`)
        }
    }

    return (
        <div className='popup'>
            <div className='new-project-form'>
                <p className="new-project-title">Add New Project!</p>
                <form className='form-fields'>
                        <li>
                            <p>Title:</p>
                            <input type='text'
                            value={title}
                            onChange={ (e) => setTitle(e.target.value) }
                            />
                        </li>
                        <li>
                            <p>Github:</p>
                            <input type='text'
                            value={attachments}
                            onChange={ (e) => setAttachments(e.target.value) }
                            />
                        </li>
                        <li className='jotnote-editor'>
                            <p>Jotnotes:</p>
                            <textarea type='text'
                            value={jotnotes}
                            onChange={ (e) => setJotnotes(e.target.value)}
                            />
                        </li>
                        <li>
                            <button className="new-project-button"
                            onClick={handleNewProject}>Add Project</button>
                            {error && <div className="error">{error}</div>}
                        </li>
                </form>
            </div>
        </div>
    )
}
export default NewProject