import React from "react";
import { getDate } from "../../utils/helperFn";
import ClientDetails from "./../../Components/ClientDetails/clientDetails";
import PaymentDetails from "./../../Components/PaymentDetails/paymentDetails";
import paytmIcon from "../../Images/paytm.png";
import { useNavigate } from "react-router-dom";
const Home = (props) => {
    
  const history = useNavigate();

  const navigateToPaymentPage = () => {
    history("/payment");
  };

  return (
    <>
      <ClientDetails name="Prashant" bill={150000} />
      <PaymentDetails
        amountDue={26000}
        dueDate={getDate(new Date())}
        billAmount={41000}
        last1={12000}
        last2={13000}
        last1Date={getDate(new Date())}
        last2Date={getDate(new Date())}
        fail1={5000}
        fail2={5000}
        currentCustomerName="Paytm"
        currentIcon={paytmIcon}
        handlePaymentNavigation={navigateToPaymentPage}
      />
    </>
  );
};

export default Home;
