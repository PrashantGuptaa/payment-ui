import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Containers/Footer';
import Home from './Containers/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
import PassBook from './Containers/Passbook';
import BillBook from './Containers/BillBook/billBook';
import MoreSection from './Containers/MoreSection/moreSection';
import Payment from './Containers/Payment';

function App(props) {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/passbook" element={<PassBook/>}/>
      <Route exact path="/billbook" element={<BillBook/>}/>
      <Route exact path="/more" element={<MoreSection/>}/>
      <Route exact path="/payment" element={<Payment/>}/>
    </Routes>
      <Footer />
    </div>
  );
}

export default App;
