import { useProjectContext } from '../../hooks/useProjectsContext';
import trashCan from '../../assets/trashCan.png'
import editIcon from '../../assets/editIcon.png'

const Requests = ( {project, toggleEditProject} ) => {
    const { dispatch } = useProjectContext()
  
    const handleDelete = async () => {
        const response = await fetch('api/projects/' + project._id, {
            method: "DELETE"
        } )

        const json = await response.json()

        if(response.ok) dispatch({type: 'DELETE_PROJECT', payload: json})
    }

    const toggleEditProjectForm = (event,project) => {
        event.stopPropagation()
        toggleEditProject(project)
    }

    return (
        <div className='request-container'>
            <img src={editIcon} 
              alt='Edit' className='edit'
              onClick={ event =>toggleEditProjectForm(event,project)} 
            />
            <img src={trashCan}
              alt='Delete' className='trashcan'
              onClick={handleDelete}
            />
        </div>
    )
}

export default Requests