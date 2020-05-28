import Redirect from 'umi/redirect';
import React, { Component } from 'react'
import { connect } from 'dva'


@connect(
    state => ({token: state.user.token})
)
export default class extends Component {
    render() {
        const { token, username, userimg, role } = this.props
        console.log(':**********###********:', token)
        if (token) {
            return this.props.children
        }
        return <Redirect to="/login"></Redirect>
    }
}

