import { connect } from 'react-redux';
import { nextPage, prevPage, addItemsToBasket } from './../../../actions/actions';
import RecommendedBox from './RecommendedBox';

const mapDispatchToProps = dispatch => {
    return {
        goToNextPage: () => dispatch(nextPage()),
        goToPrevPage: () => dispatch(prevPage()),
        addItemsToBasket: (itemIds) => dispatch(addItemsToBasket(itemIds))
    };
};

export default connect(undefined, mapDispatchToProps)(RecommendedBox);