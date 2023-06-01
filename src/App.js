import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from './Components/Navigation';
import Weather from "./Components/Weather";
import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fab);

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navigation />
        <Routes>  
          <Route path="/" element={() => <div className="container1"><Weather /></div>} />
          {/* <Redirect from='*' to='/' /> */}
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;