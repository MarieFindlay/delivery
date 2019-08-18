import { connect } from 'react-redux';
import { nextPage, prevPage } from './../../../actions/actions';
import { getRecommendedBox } from './../../../utils/pricePlanUtils';
import RecommendedBox from './RecommendedBox';

const mapStateToProps = state => {
    return {
        hasDishwasher: state.hasDishwasher,
        includeToiletries: state.includeToiletries,
        numberOfPeople: state.numberOfPeople,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        goToNextPage: () => dispatch(nextPage()),
        goToPrevPage: () => dispatch(prevPage()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedBox);