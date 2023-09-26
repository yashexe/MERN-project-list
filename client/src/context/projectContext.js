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
        case 'DELETE_PROJECT':
            return {

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