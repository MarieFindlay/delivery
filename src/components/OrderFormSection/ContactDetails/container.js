import { connect } from 'react-redux';
import { nextPage, prevPage } from './../../../actions/actions';
import ContactDetails from './ContactDetails';

const mapDispatchToProps = dispatch => {
    return {
        goToNextPage: () => dispatch(nextPage()),
        goToPrevPage: () => dispatch(prevPage()),
    };
    
};

export default connect(undefined, mapDispatchToProps)(ContactDetails);