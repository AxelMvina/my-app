import React from 'react'
import './Tag.scss'

const Tags = ({ tags }) => {
  return (
      <div className='Tags'>
          {tags.map((tag, index) => (
              <p key={index} className='Tag'>{tag}</p>
          ))}
      </div>
  );
};

export default Tags;