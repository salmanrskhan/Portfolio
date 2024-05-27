import React, { useState } from "react";

const ProjectTags = ({ name, onClick, isSelected }) => {
  const [isHovered, setIsHovered] = useState(false);

  const additionalStyles = {
    display: 'inline-block',
    width: 'fit-content',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 500,
    padding: '0.6rem 2rem',
    border: '2px solid #565656',
    borderRadius: 'var(--border-radius-2)',
    transition: 'var(--transition)'
  };

  const buttonStyles = isSelected
    ? { backgroundColor: '#000', borderColor: '#565656' }
    : { backgroundColor: 'hsl(270, 5%, 15%)', borderColor: isHovered ? 'white' : '#565656' };



  return (
    <button
      style={{ ...buttonStyles, ...additionalStyles }}
      onClick={() => onClick(name)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {name}
    </button>
  );
};

export default ProjectTags;
