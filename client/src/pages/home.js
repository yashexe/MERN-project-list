
const home = () => {

    const fetchData = async () => {
        const response = await fetch('/api/projects')
        const jsonProject = await Response.json(response)

        // if(response.ok) 
    }

    return (
       <div className="home"></div> 
    )
}

export default home