
const NewProject = () => {

    return (
        <div className='popup'>
            <div className='new-project-form'>
                <p className="new-project-title">Add New Project!</p>
                <form className='form-fields'>
                        <li>
                            <p>Title:</p>
                            <input type='text'></input>
                        </li>
                        <li>
                            <p>Github:</p>
                            <input type='text'></input>
                        </li>
                        <li className='jotnote-editor'>
                            <p>Jotnotes:</p>
                            <input type='text'></input>
                        </li>
                        <li>
                            <button className="new-project-button">Add Project</button>
                        </li>
                </form>
            </div>
        </div>
    )
}
export default NewProject