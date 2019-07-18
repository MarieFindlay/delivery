import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Hero } from "./intro/Hero";
import { Intro } from "./intro/Intro";
import { MainContentRouter } from "./mainContent/MainContentRouter";

const App = ({ pageNumber }) => {
  return (
    <>
      <Hero />
      <Intro />
      <MainContentRouter />
    </>
  );
}

export default App;


