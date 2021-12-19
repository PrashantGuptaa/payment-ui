import React, { useState } from "react";
import "./footer.css";
import { footerAsset } from "./footerAssets";
import FooterBox from "./footerBox";
import { Link } from "react-router-dom";
const Footer = (props) => {
  const [footerData, setFooterData] = useState(footerAsset);

  const handleActiveTabChange = (activeTabName) => {
    const data = footerData.map((data, i) => {
      const temp = { ...data };
      if (temp.title === activeTabName) {
        temp.active = true;
      } else {
        temp.active = false;
      }
      return temp;
    });
    setFooterData(data);
  };
  
  return (
    <div className="footer">
      {footerData.map((data, i) => (
        <FooterBox
          data={data}
          handleActiveTabChange={handleActiveTabChange}
          key={data.title}
        />
      ))}
    </div>
  );
};

export default Footer;
