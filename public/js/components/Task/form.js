import React from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'

import { renderInputField } from './renderFields'

import {
    required,
    maxLength50
} from './validate'


class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render () {
        return (
            <form className="task-form" onSubmit={ this.props.handleSubmit }>

                <div className="task-form__main">
                    <Field
                        name="text"
                        id="text"
                        component={renderInputField}
                        type="text"
                        label="Текст"
                        className="task-form__input-text form__input-text"
                        validate={[required, maxLength50]}/>
                    <div className="form__row task-form__row">
                        <label className="form__label-text task-form__label-checkout" htmlFor="status">Выполнена</label>
                        <Field
                            name="status"
                            id="status"
                            component="input"
                            type="checkbox"
                        />
                    </div>
                </div>

                <button disabled={this.props.submitting} type="submit" className="task-form__btn tasks__btn">Подтвердить</button>
            </form>
        )
    }
}

Form = reduxForm({
    form: 'updateTask',
    initialValues: {

    }
})(Form)


export default Form;