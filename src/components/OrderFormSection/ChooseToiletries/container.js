import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { nextPage, prevPage, updateIncludeToiletries } from './../../../actions/actions';
import ChooseToiletries from './ChooseToiletries';


ChooseToiletries.propTypes = {
    includeToiletries: PropTypes.bool.isRequired,
    goToNextPage: PropTypes.func.isRequired,
    goToPrevPage: PropTypes.func.isRequired,
    updateIncludeToiletries: PropTypes.func.isRequired,
}
const mapStateToProps = state => {
    return {
        includeToiletries: state.includeToiletries,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        goToNextPage: () => dispatch(nextPage()),
        goToPrevPage: () => dispatch(prevPage()),
        updateIncludeToiletries: (trueOrFalse) => dispatch(updateIncludeToiletries(trueOrFalse)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChooseToiletries);