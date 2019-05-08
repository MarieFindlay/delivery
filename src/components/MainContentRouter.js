import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { ChooseItemsPage } from './ChooseItemsPage';
import { ChooseAmountsPage } from './ChooseAmountsPage';

const MainContentInner = ({ pageNumber }) => {
  switch(pageNumber) {
    case 0:
        return <ChooseItemsPage />
    case 1:
        return <ChooseAmountsPage/>
    default:
        return <ChooseItemsPage />
  } 
}

MainContentInner.propTypes = {
    pageNumber: PropTypes.number.isRequired
  }
  
const mapStateToProps = state => ({
    pageNumber: state.currentPage,
  });


export const MainContentRouter =  connect(mapStateToProps)(MainContentInner);