import { connect } from 'react-redux';
import { nextPage, prevPage, updateSchedule } from './../../../actions/actions';
import ChooseDates from './ChooseDates';

const mapStateToProps = state => {
    return {
        firstDeliveryDateOnMount: state.firstDeliveryDate,
        repeatDeliveryScheduleOnMount: state.repeatDeliverySchedule,
        customScheduleDetailsOnMount: state.customScheduleDetails,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        goToNextPage: () => dispatch(nextPage()),
        goToPrevPage: () => dispatch(prevPage()),
        updateSchedule: (firstDeliveryDate, repeatDeliverySchedule, customScheduleDetails) => dispatch(updateSchedule(firstDeliveryDate, repeatDeliverySchedule, customScheduleDetails))
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseDates);