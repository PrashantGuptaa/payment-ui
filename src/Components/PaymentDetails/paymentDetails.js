import React from "react";
import "../component.css";
import "./paymentDetails.css";
import ConnectionList from "../ConnectionList/connections";

const PaymentDetails = (props) => {
  const {
    amountDue,
    dueDate,
    billAmount,
    last1,
    last2,
    last1Date,
    last2Date,
    fail1,
    fail2,
    currentIcon,
    currentCustomerName,
    handlePaymentNavigation
  } = props;

  const getPaidString = (date) => `Paid on ${date}`;

  const getFailedString = () => `Autopay failed`;

  const handlePayment = () => {
    handlePaymentNavigation();
  }
  
  return (
    <div className="positiondata">
    <section className="paymentContainer p-4">
      <div className="d-flex justify-content-between align-items-center border-bottom p-1 pb-3 ">
        <div className="text-secondary">Amount Due</div>
        <div className="column right">
          <span className="h1">{`₹${amountDue}`}</span>
          <span className="dull">{`Due by ${dueDate}`}</span>
        </div>
      </div>
      <div className="d-flex justify-content-between p-2 py-2 text-secondary border-bottom">
        <span>Bill Amount</span>
        <span>{`₹${billAmount}`}</span>
      </div>
      <div className="d-flex justify-content-between p-2 text-secondary ">
        <span>{getPaidString(last1Date)} </span>
        <span>{`₹${last1}`}</span>
      </div>
      <div className="d-flex justify-content-between p-2 text-secondary">
        <span>{getPaidString(last2Date)} </span>
        <span>{`₹${last2}`}</span>
      </div>
      <div className="d-flex justify-content-between p-2 text-secondary">
        <span className="text-danger">{getFailedString()} </span>
        <span>{`₹${fail1}`}</span>
      </div>
      <div className="d-flex justify-content-between p-2 text-secondary">
        <span className="text-danger">{getFailedString()} </span>
        <span>{`₹${fail2}`}</span>
      </div>

      <div className="d-flex justify-content-between align-items-center">
         <div> 
          <img src={currentIcon} alt="Paytm Icon" height="50px" className="p-2"/>
          <span>{currentCustomerName}</span>
          </div>
          <div><u>Change</u></div>
      </div>
      <button className="paynow" onClick={handlePayment}>PAY NOW</button>
    </section>
    <ConnectionList
    />
    </div>
  );
};

export default PaymentDetails;
