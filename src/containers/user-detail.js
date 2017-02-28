import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {
    render() {
        if(!this.props.user) {
            return (
                <div>Select a User...</div>
            );
        }
        return (
            <div>
                <h4>Name: {this.props.user.first} {this.props.user.last}</h4>
                <p>Age: {this.props.user.age}</p>
                <p>Description: {this.props.user.description}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);