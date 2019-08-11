import { connect } from 'react-redux';
import { nextPage, prevPage, updateSchedule } from './../../../actions/actions';
import ChooseDates from './ChooseDates';

const mapStateToProps = state => {
    return {
        firstDeliveryDateOnMount: state.firstDeliveryDate,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        goToNextPage: () => dispatch(nextPage()),
        goToPrevPage: () => dispatch(prevPage()),
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseDates);