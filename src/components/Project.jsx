const Project = ({projectTitle, projectDate, projectRole, projectImg}) => {
    const projectTitles = `${projectTitle}\n${projectDate}\n${projectRole}`
    const projLink = projectTitle.replace(/\s+/g, '');

    return (
        <div className="buttonContainer">
            <button className="project" onClick={() => window.location=`/${projLink}`}>
            <div >
                <div className="project_text">
                    <h3>{projectTitles}</h3>
                </div>
                <img src={projectImg} className="project_image"/>
            </div>
            </button>
        </div>
    )
}

export default Project