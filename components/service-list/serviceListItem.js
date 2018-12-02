import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Rating, Text, ListItem } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'
import { withNavigation, NavigationActions } from 'react-navigation';

class ServiceListItem extends Component {
	validateMark(service){
		if (service.mark < 0){
			service.mark = 0
		}
		if (service.mark > 5){
			service.mark = 5
		}
	}

	createListItemTitle(service){
		return(
			<View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
				<Text h4>
					{service.name}
				</Text>
				<Rating
					startingValue={service.mark}
					fraction={2}
					readonly
					imageSize={20}
					style={{marginLeft: 10}}
				/>
			</View>
		)
	}

	createListItemSubtitle(service){
		return(
			<View style={{flexDirection: 'column', justifyContent: 'flex-start', alignContent: 'flex-start'}}>
				<Text h5>
					Category: {service.category}
				</Text>
				<Text h5>
					Employed: {service.mark_amount}
				</Text>
			</View>
		)
	}

	createListItem(service){
		return(
			<ListItem
				onPress={() => {
					this.props.navigation.navigate('serviceInfo', {id: service.id})
				}}
				component={TouchableScale}
				friction={90}
				tension={100}
				activeScale={0.95}

				title={this.createListItemTitle(service)}
				subtitle={this.createListItemSubtitle(service)}

				chevron
				bottomDivider
			/>
		)
	}

	render() {
		console.log(this.props.serviceInfo)
		this.validateMark(this.props.serviceInfo)
		return this.createListItem(this.props.serviceInfo)
	}
}

ServiceListItem.propTypes = {
	serviceInfo: PropTypes.object
}

export default withNavigation(ServiceListItem)