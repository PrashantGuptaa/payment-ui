import React from 'react';
import { clientLogoPack } from '../../utils/constantAssets';
import './connection.css';
import DisplayConnections from './connectionBox';
const ConnectionList = () => {
    return ( 
       <div className='connectionList p-1'>
           <span className='text-secondary'>Use Simpl on 4500+ merchants</span>
<div className='logocontainer'>
{clientLogoPack.map((data) => <DisplayConnections data={data} key={data.title}/>)}

</div>       
       </div> 
     );
}
 
export default ConnectionList;