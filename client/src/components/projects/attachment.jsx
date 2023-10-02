import { useProjectContext } from '../../hooks/useProjectsContext';

import githubWhite from '../../assets/githubWhite.png'
import githubBlack from '../../assets/githubBlack.png'

const Attachment = ( {project} ) => {
    const {projects, dispatch} = useProjectContext()

    const handleGithubIcon = (id) => {
        const githubIconProjects = projects.map((project) => {
            if (project._id === id) {
                return {
                    ...project,
                    githubIcon: project.githubIcon === githubWhite ? githubBlack : githubWhite,
                };
            }
            return project;
        });
        dispatch({
            type: "SET_PROJECTS",
            payload: githubIconProjects
        });
    };

    return (
        <a className="github-icon-container" href={project.attachments}
            onMouseEnter={() => handleGithubIcon(project._id)}
            onMouseLeave={() => handleGithubIcon(project._id)}>
            <img className="github-icon"
                src={project.githubIcon === githubWhite ? githubBlack : githubWhite}
                alt="github">
            </img>
        </a>
    )
}

export default Attachment