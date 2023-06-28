
import React from "react";

import { BrRouter } from "./BrRouter";
import Home from "./pages/Home";
import DataProvider from "./Context";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {

  
  return (
    <>
<Auth0Provider
domain="dev-ses6k5qgvoo2ov7i.us.auth0.com"
clientId="cH0ZY1Q7Lau1bH8LBzhyF8M17o7cGoBF"
useRefreshTokens={ true }
cacheLocation="localstorage"
authorizationParams={{
  redirect_uri: window.location.origin
}}
>
  <DataProvider>
    <BrRouter/>

  </DataProvider>
</Auth0Provider>
</>
  );

  }



export default App;
