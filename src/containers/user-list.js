/**
 * Created by surender.s on 28/02/17.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from './../actions/index';

class UserList extends Component{

    constructor(props) {
        super(props);
        this.createListItems = this.createListItems.bind(this);
    }

    createListItems() {
        return this.props.users.map((user) => {
            return <li onClick={() => this.props.selectUser(user)} key={user.id}>{user.first} {user.last}</li>
        });
    }

    render() {
        return (
            <ul>
                {this.createListItems()}
            </ul>
        );

    }
}
//This take state from store and passes
//that state to Component as pops
function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function matchDespatchToProps(dispatch) {
    return bindActionCreators({selectUser: selectUser}, dispatch);
}

export default connect(mapStateToProps, matchDespatchToProps)(UserList);