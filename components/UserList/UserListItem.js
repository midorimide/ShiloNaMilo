import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, View, Text } from 'react-native'

class UserListItem extends Component {
	_onPress = () => {
	}

	render() {
		return (
			<TouchableOpacity onPress={this._onPress}>
				<View>
					<Text>{this.props.data.name}</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

UserListItem.propTypes = {
	data: PropTypes.object
}

export default UserListItem