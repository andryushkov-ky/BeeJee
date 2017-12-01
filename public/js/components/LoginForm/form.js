import React from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'

import { renderInputField } from './renderFields'

import {
    required,
    maxLength20
} from './validate'


class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render () {
        return (
            <form className="login" onSubmit={ this.props.handleSubmit }>

                <div className="login__main">
                    <Field
                        name="login"
                        id="login"
                        component={renderInputField}
                        type="text"
                        label="Логин"
                        className="login__input-text form__input-text"
                        validate={[required, maxLength20]}/>
                    <Field
                        validate={[required, maxLength20]}
                        name="password"
                        id="password"
                        component={renderInputField}
                        label="Пароль"
                        type="password"
                        className="login__input-text form__input-text"/>
                </div>

                <div className="form__btn-wrap login__btn-wrap">
                    <button disabled={this.props.submitting} type="submit" className="form__btn login__btn">Войти в систему</button>
                </div>
            </form>
        )
    }
}

Form = reduxForm({
    form: 'login',
    initialValues: {

    }
})(Form)


export default Form;