import { useProjectContext } from '../../hooks/useProjectsContext';

import trashCan from '../../assets/trashCan.png'
import editIcon from '../../assets/editIcon.png'

const Requests = ( {project} ) => {

    const { dispatch} = useProjectContext()

    const handleDelete = async () => {
        const response = await fetch('api/projects/' + project._id, { method: "DELETE" } )

        const json = await response.json()

        if(response.ok) dispatch({type: 'DELETE_PROJECT', payload: json})
    }

    return (
        <div className='request-container'>
            <img src={editIcon} alt='Edit' className='edit' 
            onClick={handleDelete} />
            <img src={trashCan} alt='Delete' className='trashcan'
                onClick={handleDelete} />
        </div>
    )
}

export default Requests