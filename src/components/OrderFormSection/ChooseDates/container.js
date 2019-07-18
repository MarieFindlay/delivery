import { connect } from 'react-redux';
import { nextPage, updateSchedule } from './../../../actions/actions';
import ChooseDates from './ChooseDates';

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        goToNextPage: () => dispatch(nextPage()),
        updateSchedule: (firstDeliveryDate, repeatDeliverySchedule) => dispatch(updateSchedule(firstDeliveryDate, repeatDeliverySchedule)),
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseDates);