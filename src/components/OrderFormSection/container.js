import PropTypes from "prop-types";
import { connect } from "react-redux";
import OrderFormSection from './OrderFormSection';

OrderFormSection.propTypes = {
    pageNumber: PropTypes.number.isRequired
  }
  
const mapStateToProps = state => ({
    pageNumber: state.currentPage,
  });


export default connect(mapStateToProps)(OrderFormSection);