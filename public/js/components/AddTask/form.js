import React from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form'
import Dropzone from 'react-dropzone'

import { renderInputField } from './renderFields'

import { 
    required, 
    email,
    maxLength20,
    maxLength100
} from './validate'


class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            observe: false,
            accepted: [],
            rejected: []
        }
        this.renderFileField = this.renderFileField.bind(this);
    }

    onDrop(accepted, rejected) {
        this.setState({ accepted, rejected });
    }

    renderFileField () {
        if (this.state.accepted.length) {
            return (
                <div className="form__row form__row--file">
                    <label className="form__label-text">Картинка</label>
                    <span className="form__file-text"><p>{this.state.accepted[0].name}</p></span>
                </div>
            )
        } else {
            return (
                <Dropzone acceptClassName="form__file--accept" rejectClassName="form__file--reject" accept="image/jpeg, image/png, image/gif" className="form__file" onDrop={this.onDrop.bind(this)}>
                    <p>Перетащите картинку в область</p>
                </Dropzone>
            )
        }
    }

    toggleObserve () {
        this.setState({
            observe: !this.state.observe
        })
    }


    render () {
        return (
            <form className={`form ${this.props.formActive ? "form--active" : ""}`} onSubmit={ this.props.handleSubmit }>
                <div className="form__header">
                    <h2 className="form__title">{ `${!this.state.observe ? "Создание задачи" : "Просмотр задачи"}` }</h2>
                    <div
                        onClick={this.props.togglePopup}
                        className="form__close">
                    </div>
                </div>
                {!this.state.observe &&
                    <div className="form__main">
                        <Field
                            name="username"
                            id="username"
                            component={renderInputField}
                            type="text"
                            label="Имя"
                            className="form__input-text"
                            validate={[required, maxLength20]}/>
                        <Field
                            validate={[required, email, maxLength100]}
                            name="email"
                            id="email"
                            component={renderInputField}
                            label="Email"
                            type="email"
                            className="form__input-text"/>
                        <Field
                            validate={[required, maxLength100]}
                            name="text"
                            id="text"
                            component={renderInputField}
                            label="Текст"
                            type="text"
                            className="form__input-text"/>
                        {this.renderFileField()}
                    </div>
                }

                {this.state.observe &&
                <div className="form__main">
                    <div className="form__row-data">Имя: <span className="form__row-data--inner">{this.props.username}</span></div>
                    <div className="form__row-data">Email: <span className="form__row-data--inner">{this.props.email}</span></div>
                    <div className="form__row-data">Text: <span className="form__row-data--inner">{this.props.text}</span></div>

                    <div className="form__img-wrap">
                        {!!this.state.accepted.length &&
                        <img className="form__img" src={this.state.accepted[0].preview} alt=""/>
                        }
                    </div>

                </div>
                }

                <div className="form__btn-wrap">
                    <button
                        disabled={this.props.submitting || !this.state.accepted.length}
                        onClick={() => {
                            this.props.addFile(this.state.accepted)
                            setTimeout(() => {this.setState({accepted: []})}, 0)
                        }}
                        type="submit"
                        className="form__btn">
                            Создать
                    </button>
                    <div className="form__btn--look form__btn" onClick={this.toggleObserve.bind(this, true)}>{ `${!this.state.observe ? "Просмотреть" : "Изменить"}` }</div>
                </div>
            </form>
        )
    }
}

Form = reduxForm({
    form: 'createTask',
    initialValues: {

    }
})(Form)

const selector = formValueSelector('createTask');

Form = connect(state => {
    const username = selector(state, 'username');
    const email = selector(state, 'email');
    const text = selector(state, 'text');
    return {
        username,
        email,
        text
    };
})(Form);


export default Form;