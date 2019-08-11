import { connect } from 'react-redux';
import { nextPage, prevPage } from './../../../actions/actions';
import PaymentDetails from './PaymentDetails';

const mapDispatchToProps = dispatch => {
    return {
        goToNextPage: () => dispatch(nextPage()),
        goToPrevPage: () => dispatch(prevPage()),
    };
    
};

export default connect(undefined, mapDispatchToProps)(PaymentDetails);