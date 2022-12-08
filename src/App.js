import React from "react";
import {Header} from "./layouot/Header";
import {Footer} from './layouot/Footer';
import {Main} from "./layouot/Main";

function App() { 
  
  return (
    <React.Fragment>
      <Header/>
      <Main/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
