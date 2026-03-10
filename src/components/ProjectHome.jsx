const ProjectHome = ({projectTitle, projectYr, projectRole, projectImg}) => {
    const projLink = projectTitle.replace(/\s+/g, '');

    return (
        <button className="project-home" onClick={() => window.location=`/${projLink}`}>
        <div >
            <img src={projectImg} className="project_image"/>
            <div className="project-card-text">
                <h3 className="project-card-title">
                    {projectTitle} {projectYr} <br />
                    <small className="project-card-text">{projectRole}</small>
                </h3>
            </div>
        </div>
        </button>
    )
}

export default ProjectHome