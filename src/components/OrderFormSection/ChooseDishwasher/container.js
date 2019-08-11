import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { nextPage, prevPage, updateHasDishwasher } from './../../../actions/actions';
import ChooseDishwasher from './ChooseDishwasher';

ChooseDishwasher.propTypes = {
    hasDishwasher: PropTypes.bool.isRequired,
    goToNextPage: PropTypes.func.isRequired,
    goToPrevPage: PropTypes.func.isRequired,
    updateHasDishwasher: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
    return {
        hasDishwasherOnMount: state.hasDishwasher,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        goToNextPage: () => dispatch(nextPage()),
        goToPrevPage: () => dispatch(prevPage()),
        updateHasDishwasher: (trueOrFalse) => dispatch(updateHasDishwasher(trueOrFalse))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseDishwasher);