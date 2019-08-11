import { connect } from 'react-redux';
import { nextPage, prevPage, updateAddress } from './../../../actions/actions';
import ChooseAddress from './ChooseAddress.jsx';

const mapStateToProps = state => {
    return {
        numberOfPeople: state.numberOfPeople,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateAddress: (address, postcode) => dispatch(updateAddress(address, postcode)),
        goToNextPage: () => dispatch(nextPage()),
        goToPrevPage: () => dispatch(prevPage())
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseAddress);