import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//pages
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";

import Header from "./ui/Header";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AnimatePresence>
        <Header />
        <Route key="route1" exact path="/" component={MainPage} />
        <Route key="route2" exact path="/about" component={AboutPage} />
        <Route key="route3" exact path="/project" component={ProjectPage} />
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
