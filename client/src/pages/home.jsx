import { useEffect, useState} from "react"
import { useProjectContext } from '../hooks/useProjectsContext'

import ProjectInfo from '../components/projects/projectInfo'

import NewProject from "../components/forms/newProject"
import EditProject from "../components/forms/editProject"

const Home = ({ newProjectVisible }) => {
    const { projects, dispatch } = useProjectContext()

    const [editProjectVisible, setEditProjectVisible] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)

    const toggleEditAndSelectProject = (project) => {
        setEditProjectVisible(!editProjectVisible);
        setSelectedProject(project);
    }

    useEffect( () => {
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
            {newProjectVisible && <NewProject />}
            {editProjectVisible && selectedProject && (
                <EditProject
                  key={selectedProject._id}
                  selectedProject={selectedProject}
                />
            )}
            <div className="projects">
                {projects && projects.map( project => (
                    <ProjectInfo
                        key={project._id}
                        project={project}
                        toggleEditProject={
                            project => toggleEditAndSelectProject(project)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
