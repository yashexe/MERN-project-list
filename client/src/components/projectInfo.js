const ProjectInfo = ({ project, handleGithubIcon, githubBlack, githubWhite }) => {

    return (
        <div key={project._id} className="project-text">
            <ul>
                <li className="project-header">
                    <p className="project-title">{project.title}</p>
                    <a className="github-icon-container" href={project.attachments}
                        onMouseEnter={() => handleGithubIcon(project._id)}
                        onMouseLeave={() => handleGithubIcon(project._id)}>
                        <img className="github-icon"
                            src={project.githubIcon === githubWhite ? githubBlack : githubWhite}
                            alt="github">
                        </img>
                    </a>
                </li>

                <li className="jotnotes"><ul>
                    {project.jotnotes && project.jotnotes.map( (jotnote) => (
                        <li className="jotnote" key={jotnote._id}>{jotnote.text}</li>
                    ))}
                </ul></li>
            </ul>
        </div>
    )
}

export default ProjectInfo