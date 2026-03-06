const Project = ({projectTitle, projectYr, projectRole, projectImg, projectDesc}) => {
    const projLink = projectTitle.replace(/\s+/g, '');

    return (
        <button className="project" onClick={() => window.location=`/${projLink}`}>
        <div >
            <img src={projectImg} className="project_image"/>
            <div className="project-card-text">
                <h3 className="project-card-title">
                    {projectTitle} {projectYr} <br />
                    <small className="project-card-text">{projectRole}</small>
                </h3>
                <p>{projectDesc}</p>
            </div>
        </div>
        </button>
    )
}

export default Project