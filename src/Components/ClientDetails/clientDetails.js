import React from "react";
import { convertToIndianMoneyFormat } from "../../utils/helperFn";
import "../component.css";
import { CgProfile } from "react-icons/cg";
import '../../Containers/Footer/footer.css';
import './client.css';

const ClientDetails = (props) => {
  const { name, bill } = props;
  return (
    <section className="client">
      <div className="flexbetween pad">
        <div className="profile">
          <span className="profileicon"> 
          <CgProfile />
          </span>
          <div className="column left">
            <span className="dull">Hello</span>
            <span>{`${name} >`} </span>
          </div>
        </div>

        <div className="column right">
          <span className="dull">Upgrade credit limit</span>
          <span>{`${convertToIndianMoneyFormat(bill)} >`}</span>
        </div>
      </div>
    </section>
  );
};

export default ClientDetails;
