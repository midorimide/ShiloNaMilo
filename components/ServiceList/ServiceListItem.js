import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, View, Text } from 'react-native'

class ServiceListItem extends Component {
	_onPress = () => {

	}

	render() {
		return (
			<TouchableOpacity onPress={this._onPress}>
				<View>
					<Text>{this.props.data.name}</Text>
					<Text>by {this.props.data.owner}</Text>
					<Text>Mark: {this.props.data.mark}</Text>					
				</View>
			</TouchableOpacity>
		);
	}
}

ServiceListItem.propTypes = {
	data: PropTypes.object.isRequired
}

export default ServiceListItem