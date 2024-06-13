import React, { useState } from 'react';

const DescCollapseAbout = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse_button">
        {title}
        <span onClick={toggleCollapse} className={`arrow ${isOpen ? 'open' : ''}`}><i className="fa-solid fa-chevron-up fa-lg"></i></span>
      </div>
      <div className={`collapse_content ${isOpen ? 'open' : ''}`}>
        {text}
      </div>
    </div>
  );
};

export default DescCollapseAbout;