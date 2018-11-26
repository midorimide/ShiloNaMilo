import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, View, Text } from 'react-native'
import Star from 'react-native-star-view'
import { withNavigation } from 'react-navigation';

class ServiceListItem extends Component {
	render() {
		if (this.props.serviceInfo.mark < 0){
			this.props.serviceInfo.mark = 0
		}
		if (this.props.serviceInfo.mark > 5){
			this.props.serviceInfo.mark = 5
		}
		return (
			<TouchableOpacity onPress={() => {
				this.props.navigation.navigate('serviceInfo', {id: this.props.serviceInfo.id})}}>
				<View>
					<Text>{this.props.serviceInfo.name}</Text>
                	<Star score={this.props.serviceInfo.mark}/>
				</View>
			</TouchableOpacity>
		);
	}
}

ServiceListItem.propTypes = {
	serviceInfo: PropTypes.object
}

export default withNavigation(ServiceListItem)