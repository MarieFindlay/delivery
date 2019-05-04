import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const AppInner = ( { pageNumber }) => {
  return (
    <div className="App">
      <p>{pageNumber}</p>
    </div>
  );
}
AppInner.propTypes = {
  pageNumber: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  pageNumber: state.currentPage,
});

const App = connect(mapStateToProps)(AppInner);

export default App;
