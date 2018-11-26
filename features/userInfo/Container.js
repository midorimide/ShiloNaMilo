import { connect } from 'react-redux'
import {
	isUserLoadingSelector,
	areUserServicesLoadingSelector,
	userInfoSelector,
	userServicesInfoSelector } from './Reducer';
import { getUserById } from './Actions';
import UserInfoScreen from './Screen';

const mapStateToProps = (state) => ({
	isUserLoading: isUserLoadingSelector(state),
	areUserServicesLoading: areUserServicesLoadingSelector(state),
	userInfo: userInfoSelector(state),
	userServicesInfo: userServicesInfoSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
    getUserById: (id) => dispatch(getUserById(id))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserInfoScreen)