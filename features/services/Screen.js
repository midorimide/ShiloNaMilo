import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
import ServiceList from '../../components/ServiceList'

export default class ServicesScreen extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getAllServices()
	}

	render() {
		if (this.props.areServicesLoading) {
            return (
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<ActivityIndicator size='large'/>
				</View>
			)
		}
		else {
			return (
				<ServiceList services={this.props.services}/>
			)
		}
	}
}

ServicesScreen.propTypes = {
	areServicesLoading: PropTypes.bool,
	services: PropTypes.array,
	getAllServices: PropTypes.func
}