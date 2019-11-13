import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return(
        <div className="container section project-details">
            <div className="card z-dept-0">
                <div className="card-content">
                    <span className="card-title">Projet Title - {id}</span>
                    <p>Deneme projesi üzerinde yapılan geliştirmeleri test etmeye devam ediyoruz. 
                        Bu süreçte verdiğimiz rahatsızlıktan dolayı özür dileriz.</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by Furkan</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;