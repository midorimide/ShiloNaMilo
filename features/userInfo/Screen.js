import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image } from 'react-native'
import Star from 'react-native-star-view'

class UserInfo extends Component {
	_onPress = () => {
	}

	render() {
        if (this.props.data.mark < 0){
			this.props.data.mark = 0
		}
		if (this.props.data.mark > 5){
			this.props.data.mark = 5
		}
		return (
			<View>
				<Text>{this.props.data.fullName}</Text>
				<Text>{this.props.data.username}</Text>
				<Text>{this.props.data.emailAddress}</Text>
				<Text>{this.props.data.location}</Text>
                <Star score={this.props.data.rating}/>
				<Text>About me:</Text>
				<Text>{this.props.data.description}</Text>
                <Image source="https://media.giphy.com/media/3M9zf3NSuNgBWM3RWC/giphy.gif"/>
			</View>
		);
	}
}

UserInfo.propTypes = {
	data: PropTypes.object.isRequired
}

export default UserInfo