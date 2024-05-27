import React from "react";
import { IoCodeSlashSharp } from "react-icons/io5";
import { FiEye } from "react-icons/fi";
import './projectCard.css';

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="project__card"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="project__card-hover">
          <a href={gitUrl} className="" target="_blank">
            <IoCodeSlashSharp title="code" />
          </a>
          <a href={previewUrl} className="" target="_blank" >
            <FiEye title="live" />
          </a>
        </div>
      </div>
      <div className="project-descp">
        <h5 className="mb-2">{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

