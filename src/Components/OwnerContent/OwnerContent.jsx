import React from 'react';
import './OwnerContent.scss';

const OwnerContent = ({ host }) => {
    return (
        <div className='OwnerContent'>
            <h4>{host.name}</h4>
            <img className='OwnerContent_badge' src={host.picture} alt='Photo du propriétaire' />
        </div>
    );
};

export default OwnerContent;