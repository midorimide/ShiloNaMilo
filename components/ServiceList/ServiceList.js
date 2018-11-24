import React, { Component } from 'react'
import { FlatList} from 'react-native'
import PropTypes from 'prop-types'
import ServiceListItem from './ServiceListItem'

class ServiceList extends Component {
	render() {
		return (
			<FlatList
				data={this.props.items}
				keyExtractor={(item,index) => {item.id}}
				renderItem={({item}) => <ServiceListItem data={item}/>}/>
		);
	}
}

ServiceList.propTypes = {
	items: PropTypes.array.isRequired
}

export default ServiceList