import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import PaymentSuccess from "./PaymentSuccess";
import Home from "./Home";

import MobilePhone from "./MobilePhone.mjs";

import LaptopTablet from "./LaptopTablet.mjs";
import Refrigerator from "./Refrigerator.mjs";
import AppliancesElectronics from "./AppliancesElectronics.mjs";
import MenFashion from "./MenFashion.mjs";
import WomenFashion from "./WomenFashion.mjs";
import PreNavbar from "./PreNavbar.mjs";


function App() {
  return (

    <div className="App">
    <Router>
    <PreNavbar/>
      <Routes>

        
        <Route path='/' element={<Home/>}/> 
        <Route path='/Home' element={<Home/>}/> 
        <Route  path='/mobilePhone' element={<MobilePhone/>} /> 
        <Route  path='/LaptopTablet' element={<LaptopTablet/>} /> 
        <Route  path='/Refrigerator' element={<Refrigerator/>} /> 
        <Route  path='/AppliancesElectronics' element={<AppliancesElectronics/>} /> 
        <Route  path='/MenFashion' element={<MenFashion/>} /> 
        <Route  path='/WomenFashion' element={<WomenFashion/>} /> 
      
        <Route exact path='/paymentsuccess' element={<PaymentSuccess/>}/> 
      
      </Routes>
    </Router>
    </div>
  );
}

export default App;
