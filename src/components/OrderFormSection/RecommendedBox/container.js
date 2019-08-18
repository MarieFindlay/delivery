import { connect } from 'react-redux';
import { nextPage, prevPage } from './../../../actions/actions';
import { getRecommendedBox } from './../../../utils/utils';
import RecommendedBox from './RecommendedBox';

const mapStateToProps = state => {
    return {
        recommendedBox: getRecommendedBox(state),
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