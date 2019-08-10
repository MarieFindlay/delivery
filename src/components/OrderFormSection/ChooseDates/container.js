import { connect } from 'react-redux';
import { nextPage, prevPage, updateSchedule } from './../../../actions/actions';
import ChooseDates from './ChooseDates';

const mapDispatchToProps = dispatch => {
    return {
        goToNextPage: () => dispatch(nextPage()),
        goToPrevPage: () => dispatch(prevPage()),
     }
}

export default connect(undefined, mapDispatchToProps)(ChooseDates);