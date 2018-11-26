import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, View, Text } from 'react-native'
import Star from 'react-native-star-view'
import { withNavigation } from 'react-navigation';

class ServiceListItem extends Component {
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
			<TouchableOpacity onPress={() => {
				this.props.navigation.navigate('serviceInfo', {id: this.props.data.id})}}>
				<View>
					<Text>{this.props.data.name}</Text>
                	<Star score={this.props.data.mark}/>
				</View>
			</TouchableOpacity>
		);
	}
}

ServiceListItem.propTypes = {
	data: PropTypes.object
}

export default withNavigation(ServiceListItem)