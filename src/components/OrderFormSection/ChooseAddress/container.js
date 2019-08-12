import { connect } from 'react-redux';
import { nextPage, prevPage, updateAddress } from './../../../actions/actions';
import ChooseAddress from './ChooseAddress.jsx';

const mapStateToProps = state => {
    return {
        postcodeOnMount: state.postcode,
        streetAddressOnMount: state.streetAddress,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateAddress: (postcode, streetAddress) => dispatch(updateAddress(postcode, streetAddress)),
        goToNextPage: () => dispatch(nextPage()),
        goToPrevPage: () => dispatch(prevPage())
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseAddress);