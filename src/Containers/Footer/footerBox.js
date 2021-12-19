import React from 'react';
import './footer.css';
import { footerAsset } from './footerAssets';
import { Link } from 'react-router-dom';

const FooterBox = (props) => {
    const {handleActiveTabChange , data } = props;
    const { icon, title, active } = data;

    const activePathName = () => {
        switch (title) {
            case footerAsset[2].title:
               return "/billbook";
            case footerAsset[1].title:
              return "/passbook";
            case footerAsset[3].title:
              return '/more';     
            default:
              return '/';
          }
    }

    return ( 
        <Link to={activePathName()} className={`footericon ${active ? 'active' : ''}`} onClick={() => handleActiveTabChange(title)}>
           <span className='scaleup' > {icon}</span>
            <div className='text-secondary'>{title}</div>
        </Link>
     );
}
 
export default FooterBox;
