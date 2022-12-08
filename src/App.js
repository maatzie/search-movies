import React from "react";
import {Header} from "./layouot/header";
import {Footer} from './layouot/footer';
import {Main} from "./layouot/main";

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
