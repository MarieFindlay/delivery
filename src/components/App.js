import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Hero } from "./Hero";
import { Intro } from "./Intro";
import { MainContentRouter } from "./MainContentRouter";

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


