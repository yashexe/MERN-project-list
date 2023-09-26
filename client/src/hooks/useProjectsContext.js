import { ProjectContext } from "../context/projectContext";
import { useContext } from "react";

export const useProjectContext = () => {
    const context = useContext(ProjectContext)

    if(!context) throw Error("Context must be used inside ProjectContextProvider")

    return context
}