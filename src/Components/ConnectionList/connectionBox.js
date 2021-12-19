import React from 'react';
import './connection.css';

const DisplayConnections = (props) => {
    const { icon, title } = props.data;
    return (  
        <div className='combobox'>
            <img src={icon} alt={title} className='logo'/>
        <div>{title}</div>
        </div>
    );
}
 
export default DisplayConnections;