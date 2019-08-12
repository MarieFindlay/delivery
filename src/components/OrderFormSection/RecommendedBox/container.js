import { connect } from 'react-redux';
import { nextPage, prevPage } from './../../../actions/actions';
import RecommendedBox from './RecommendedBox';

const mapDispatchToProps = dispatch => {
    return {
        goToNextPage: () => dispatch(nextPage()),
        goToPrevPage: () => dispatch(prevPage()),
    };
};

export default connect(undefined, mapDispatchToProps)(RecommendedBox);