import React, { Component } from 'react'
import { Text, TextInput, View, Button, ScrollView, StyleSheet } from 'react-native'
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
		if (this.props.isLoading) {
            return (
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<Text>Loading</Text>
				</View>
			)
		}
		else {
			return (
				<ServiceList items={this.props.services}/>
			)
		}
	}
}

ServicesScreen.propTypes = {
	isLoading: PropTypes.bool,
	services: PropTypes.array,
	getAllServices: PropTypes.func
}