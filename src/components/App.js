import React from "react";

import AppProvider from "../components/Context/ContextProvider";
import AuthComponent from "./AuthComponent";
import Shoplist from "./Shoplist";

function App(){

    return (

        <div>
            {/* <h1>Imran</h1> */}

    <AppProvider>
      <AuthComponent />
      <Shoplist />
    </AppProvider>

        </div>
    )
}

export default App;