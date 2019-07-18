import { connect } from 'react-redux';
import { nextPage, addItemsToBasket } from './../../../actions/actions';
import ChooseToiletries from './ChooseToiletries';

const mapDispatchToProps = dispatch => {
    return {
        goToNextPage: () => dispatch(nextPage()),
        addItemsToBasket: (itemIds) => dispatch(addItemsToBasket(itemIds))
    };
};

export default connect(undefined, mapDispatchToProps)(ChooseToiletries);