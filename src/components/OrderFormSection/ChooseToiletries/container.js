import { connect } from 'react-redux';
import { nextPage, prevPage, addItemsToBasket } from './../../../actions/actions';
import ChooseToiletries from './ChooseToiletries';

const mapDispatchToProps = dispatch => {
    return {
        goToNextPage: () => dispatch(nextPage()),
        goToPrevPage: () => dispatch(prevPage()),
    };
};

export default connect(undefined, mapDispatchToProps)(ChooseToiletries);