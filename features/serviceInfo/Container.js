import { connect } from 'react-redux'
import {
	isLoadingSelector,
	getServiceInfoSelector,
	isUserLoadingSelector,
	getUserInfoSelector } from './Reducer';
import { getServiceById } from './Actions';
import ServiceInfoScreen from './Screen';

const mapStateToProps = (state) => ({
	isServiceLoading: isLoadingSelector(state),
	isUserLoading: isUserLoadingSelector(state),
	service: getServiceInfoSelector(state),
	user: getUserInfoSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
    getServiceById: (id) => dispatch(getServiceById(id))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ServiceInfoScreen)