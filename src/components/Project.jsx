const Project = ({projectTitle, projectDate, projectRole, projectImg}) => {
    const projectTitles = `${projectTitle}\n${projectDate}\n${projectRole}`
    
    return (
        <div className="project">
            <div className="project_text">
                <h3>{projectTitles}</h3>
            </div>
            <a href="" >
                <img src={projectImg} className="project_image"/>
            </a>
        </div>
    )
}

export default Project