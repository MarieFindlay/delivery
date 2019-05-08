import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { prevPage } from "./../../actions/actions";
import { SClickableText } from "./StyledComponents";

const BackButtonInner = ({ onClick }) => {
    return (
        <SClickableText onClick={onClick}>next</SClickableText>
    )
}

BackButtonInner.propTypes = {
    onClick: PropTypes.func.isRequired
  };
  
const mapDispatchToProps = dispatch => {
    return {
      onClick: () => dispatch(prevPage()) 
    };
  };
  
const BackButton = connect(undefined, mapDispatchToProps)(BackButtonInner);

export default BackButton;