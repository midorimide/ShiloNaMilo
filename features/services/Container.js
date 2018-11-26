import { connect } from 'react-redux'
import { getAllServices } from './Actions'
import { isLoadingSelector, getServicesSelector } from './Reducer'
import ServicesScreen from './Screen';

const mapStateToProps = (state) => ({
	isLoading: isLoadingSelector(state),
	services: getServicesSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
    getAllServices: () => dispatch(getAllServices())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ServicesScreen)