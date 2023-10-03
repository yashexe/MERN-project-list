import { useProjectContext } from '../../hooks/useProjectsContext';

import githubWhite from '../../assets/githubWhite.png'
import githubBlack from '../../assets/githubBlack.png'

const Attachment = ( {project} ) => {
    const {projects, dispatch} = useProjectContext()

    const handleGithubIcon = (event, id) => {
        event.stopPropagation()

        const githubIconProjects = projects.map( p => {
            if (p._id === id) {
                return {
                    ...p,
                    githubIcon: p.githubIcon === githubWhite ? githubBlack : githubWhite,
                }
            }
            return p
        })
        dispatch( {
            type: "SET_PROJECTS",
            payload: githubIconProjects
        })
    }

    return (
        <a className="github-icon-container" 
            href={project.attachments}
            target='_blank' rel="noopener noreferrer"
            onClick={ (event) => handleGithubIcon(event, project._id) }
            onMouseEnter={ (event) => handleGithubIcon(event, project._id) }
            onMouseLeave={ (event) => handleGithubIcon(event, project._id) }>

            <img className="github-icon"
                src={project.githubIcon === githubWhite ? githubBlack : githubWhite}
                alt="github">
            </img>
        </a>
    )
}

export default Attachment