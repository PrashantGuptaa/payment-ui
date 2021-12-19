import React from 'react';
import '../component.css';
const ClientDetails = (props) => {
    const { name, bill } = props;
    return ( 
        <section className='client'>
            <div className='flexbetween pad'>
            <div className='column left'>
            <span className='dull'>Hello</span>
            <span>{`${name} >`}  </span>
            </div>
          
            <div className='column right'>
            <span className='dull'>Upgrade credit limit</span>
            <span>{`${bill} >`}</span>
            </div>
            </div>
        </section>
     );
}
 
export default ClientDetails;