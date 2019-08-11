
import { connect } from 'react-redux';
import { updateNumberOfPeople } from './../../../../../actions/actions';
import AmountPicker from './AmountPicker';

const mapDispatchToProps = dispatch => {
    return {
        updateNumberOfPeople: itemId => dispatch(updateNumberOfPeople()),
    }
}

export default connect(undefined, mapDispatchToProps)(AmountPicker);