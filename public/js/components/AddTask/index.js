import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import request from 'superagent'

import Form from './form.js'

import {
    addTask
} from '../../actions/index'

class AddTask extends Component {
    constructor (props) {
        super (props);

        this.state = {
            popupOpen: false,
            img: {}
        };

        this.submit = this.submit.bind(this)
    }

    togglePopup (status) {
        this.setState({
            popupOpen: status
        });
    }

    submit (task) {
        request
            .post('https://uxcandy.com/~shapoval/test-task-backend/create?developer=testmegod')
            .field('username', task.username)
            .field('email', task.email)
            .field('text', task.text)
            .attach('image', this.state.img)
            .end((err, res) => {
            //todo add loader
                console.log(err, res);
                if (res && res.body && res.body.status && res.body.status === 'ok') {
                    alert('Ваша задача создана');
                } else {
                    alert('Увы, что-то пошло не так');
                }
            })
        this.togglePopup(false);
    }

    addFile (val) {
        this.setState({
            img: val[0]
        })
    }

    render () {
        return (
            <div className="add-task">
                <div
                    onClick={this.togglePopup.bind(this, true)}
                    className="add-task__btn">
                    Создать задачу
                </div>

                <Form onSubmit={this.submit} addFile={this.addFile.bind(this)} togglePopup={this.togglePopup.bind(this, false)} formActive={this.state.popupOpen} />

                <div
                    onClick={this.togglePopup.bind(this, false)}
                    className="shadow">
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = {
    addTask
}

export default connect(null, mapDispatchToProps)(AddTask)