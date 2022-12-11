import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import PaymentSuccess from "./PaymentSuccess";
import Home from "./Home";

function App() {
  return (



    <Router>
      
      <Routes>
        <Route path="/" element={<Home/>}/> 
      
        <Route path="/paymentsuccess" element={<PaymentSuccess/>}/> 
      
      </Routes>
    </Router>
   
  );
}

export default App;
