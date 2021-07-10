import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <HashRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
