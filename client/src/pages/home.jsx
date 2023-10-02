import { useEffect } from "react"
import { useProjectContext } from '../hooks/useProjectsContext'

import ProjectInfo from '../components/projects/projectInfo'

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

    return (
        <div className="home">
            <div className="projects">
                {projects && projects.map((project) => (
                    <ProjectInfo
                        key={project._id}
                        project={project}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
