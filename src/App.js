import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

//pages
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";

import Header from "./ui/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={MainPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/project" component={ProjectPage} />
    </BrowserRouter>
  );
}

export default App;
