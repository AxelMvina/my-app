import React, { useState } from 'react';
import './Collapse.scss';

const DescCollapseAbout = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse_button" onClick={toggleCollapse}>
        {title}
        <span className={`arrow ${isOpen ? 'open' : ''}`}>
          <i className="fa-solid fa-chevron-up fa-lg"></i>
        </span>
      </div>
      <div className={`collapse_content ${isOpen ? 'open' : ''}`}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default DescCollapseAbout;
