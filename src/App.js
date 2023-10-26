import React from "react";

import {
  Blog,
  Header,
  Footer,
  Tesbacon,
} from "./containers";
import { CTA, Navbar} from "./components";
import Cards from './components/Cards'
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="back">
        <Navbar />
        <Header />
      </div>
      <Cards />
      <Tesbacon />
      <CTA />
      <Blog />
      <CTA />
      <div className="style">
        <Footer/>
      </div>
    </div>
  );
};

export default App;
