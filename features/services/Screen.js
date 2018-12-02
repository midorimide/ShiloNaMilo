import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'
import ServiceList from '../../components/service-list'
import PropTypes from 'prop-types'

export default class ServicesScreen extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getAllServices()
	}

	render() {
		if (this.props.areServicesLoading) {
            return <ActivityIndicator size='large'/>
		}
		else {
			return <ServiceList services={this.props.services}/>
		}
	}
}

ServicesScreen.propTypes = {
	areServicesLoading: PropTypes.bool,
	services: PropTypes.array,
	getAllServices: PropTypes.func
}