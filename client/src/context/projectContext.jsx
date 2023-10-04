import { createContext, useReducer} from "react";

export const ProjectContext = createContext()

export const projectsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return {
                projects: action.payload
            }
        case 'CREATE_PROJECT':
            return {
                projects: [action.payload, ...state.projects]
            }
        case 'EDIT_PROJECT':
            const updatedProjects = state.projects
                .map( project => project._id === action.payload._id ? action.payload : project
            )
            return {
                projects: updatedProjects
            }
        case 'DELETE_PROJECT':
            return {
                projects: state.projects.filter( proj => proj._id !== action.payload._id )
            }
        default:
            return state
    }
}

export const ProjectContextProvider = ( {children} ) => {
    const [state,dispatch] = useReducer(projectsReducer, { 
        projects: null
    })

    return (
        <ProjectContext.Provider value={{...state, dispatch}}>
            {children}
        </ProjectContext.Provider>
    )
}