import { connect } from 'react-redux';
import { nextPage, updateAddress } from './../../../actions/actions';
import ChooseAddress from './ChooseAddress.jsx';

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateAddress: (address, postcode) => dispatch(updateAddress(address, postcode)),
        goToNextPage: () => dispatch(nextPage())
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseAddress);