import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'

import Form from './form.js'

import {
    loginAdmin
} from '../../actions/index'

import {
    hasEntered
} from '../../selectors'

class LoginForm extends Component {
    constructor (props) {
        super (props);

        this.state = {
        };

        this.submit = this.submit.bind(this)
    }


    submit ({login, password}) {
        // todo add md5 hash + salt to login and password
        if (login === 'admin' && password === '123') {
            this.props.loginAdmin(true);
        }
    }

    render () {
        return (
            <div className="login__wrapper">
                {!this.props.admin &&
                    <Form onSubmit={this.submit} />
                }
                {this.props.admin &&
                    <button className="login__logout form__btn" onClick={() => this.props.loginAdmin(false)} >Разлогиниться</button>
                }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    admin: hasEntered(state, ownProps)
})


const mapDispatchToProps = {
    loginAdmin
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)