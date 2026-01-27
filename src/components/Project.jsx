const Project = ({projectTitle, projectDate, projectRole, projectImg}) => {
    const projectTitles = `${projectTitle}\n${projectDate}\n${projectRole}`
    
    return (
        <div className="project">
            <div className="project_text">
                <h3>{projectTitles}</h3>
            </div>
            <div >
                <img src={projectImg} className="project_image"/>
            </div>
        </div>
    )
}

export default Project