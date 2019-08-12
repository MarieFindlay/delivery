import { connect } from 'react-redux';
import { nextPage, prevPage, updateContactDetails } from './../../../actions/actions';
import ContactDetails from './ContactDetails';

const mapStateToProps = state => {
    return {
        emailAddressOnMount: state.emailAddress,
        phoneNumberOnMount: state.phoneNumber
    }
}

const mapDispatchToProps = dispatch => {
    return {
        goToNextPage: () => dispatch(nextPage()),
        goToPrevPage: () => dispatch(prevPage()),
        updateContactDetails: (emailAddress, phoneNumber) => dispatch(updateContactDetails(emailAddress, phoneNumber)),
    };
    
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetails);