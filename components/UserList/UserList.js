import React, { Component } from 'react'
import { FlatList} from 'react-native'
import PropTypes from 'prop-types'
import UserListItem from './UserListItem'

class UserList extends Component {
	render() {
		return (
			<FlatList
				data={this.props.items}
				keyExtractor={(item, index) => {item.id}}
				renderItem={({item}) => <UserListItem data={item}/>}/>
		);
	}
}

UserList.propTypes = {
	items: PropTypes.array
}

export default UserList