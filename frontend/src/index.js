import React from 'react';
import ReactDOM from "react-dom/client";

import App from './App';
import {ChakraProvider} from "@chakra-ui/react"
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <ChakraProvider>
    <App/>
    </ChakraProvider>
    
  </React.StrictMode>
);


//  ReactDOM.render(
//   <React.StrictMode>
//    <Auth0Provider
// domain="dev-ltzl587tp1z2bi2m.us.auth0.com"
// clientId="GDLEw9X7qrhvRCmZdR0MfrZBZoyYQxoz"
//    redirectUri={window.location.origin}
  
//    >
    
//        <App />
     
//    </Auth0Provider>
//    </React.StrictMode>,
//    document.getElementById("root")
//  );
