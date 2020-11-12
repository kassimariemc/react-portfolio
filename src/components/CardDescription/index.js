import React from "react";
import "./style.css";

function CardDescription(props) {

  return (
    <div className="col mb-4 mt-4">
      <div className="card card-description">
        <div className="card-body text-center">
          <p className="card-text">{props.description}</p>
          <p className="tech-info">Technologies Included:<br />
            {props.tech.map(techItem => (
              <div key={props.id}><i className="fa fa-cog" key={props.id}></i> {techItem} <br key={props.id} /></div>
            ))}
          </p>
          {props.deployURL !== "" ? <a href={`${props.deployURL}`} target="_blank" rel="noreferrer"><button type="button"
            className="btn btn-lg" id="uni-btn">Deployed Project</button></a> : ""}
          <a href={`${props.repoURL}`} target="_blank" rel="noreferrer"><button type="button"
            className="btn btn-lg" id="uni-btn">GitHub Repo</button></a>
        </div>
      </div>
    </div>

  );
}

export default CardDescription;