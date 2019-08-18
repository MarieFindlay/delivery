import { connect } from 'react-redux';
import { nextPage, prevPage } from './../../../actions/actions';
import { getSubscriptionData, getSubscriptionMetaData } from './../../../utils/createSubscriptionUtils';
import PaymentDetails from './PaymentDetails';

const mapStateToProps = state => {
    return {
        subscriptionData: getSubscriptionData(state),
        subscriptionMetaData: getSubscriptionMetaData(state),
    };
    
};

const mapDispatchToProps = dispatch => {
    return {
        goToNextPage: () => dispatch(nextPage()),
        goToPrevPage: () => dispatch(prevPage()),
    };
    
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentDetails);