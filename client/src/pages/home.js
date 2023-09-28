import { useEffect } from "react"
import { useProjectContext } from '../hooks/useProjectsContext'

import ProjectInfo from '../components/projectInfo'

// import githubWhite from '../assets/githubWhite.png'
// import githubBlack from '../assets/githubBlack.png'

const Home = () => {
    const { projects, dispatch } = useProjectContext();

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await fetch('/api/projects');
                const json = await response.json();
                dispatch({
                    type: "SET_PROJECTS",
                    payload: json
                });
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };
        fetchProject();
    }, [dispatch]);

    // const handleGithubIcon = (id) => {
    //     const githubIconProjects = projects.map((project) => {
    //         if (project._id === id) {
    //             return {
    //                 ...project,
    //                 githubIcon: project.githubIcon === githubWhite ? githubBlack : githubWhite,
    //             };
    //         }
    //         return project;
    //     });
    //     dispatch({
    //         type: "SET_PROJECTS",
    //         payload: githubIconProjects
    //     });
    // };s

    return (
        <div className="home">
            <div className="projects">
                {projects && projects.map((project) => (
                    <ProjectInfo
                        key={project._id}
                        project={project}
                        // handleGithubIcon={handleGithubIcon}
                        // githubBlack={githubBlack}
                        // githubWhite={githubWhite}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
