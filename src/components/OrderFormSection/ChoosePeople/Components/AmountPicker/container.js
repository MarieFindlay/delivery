
import { connect } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from './../../../../../actions/actions';
import AmountPicker from './AmountPicker';

const mapDispatchToProps = dispatch => {
    return {
        increaseQuantity: itemId => dispatch(increaseQuantity(itemId)),
        decreaseQuantity: itemId => dispatch(decreaseQuantity(itemId))
    }
}

export default connect(undefined, mapDispatchToProps)(AmountPicker);