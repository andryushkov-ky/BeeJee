import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'

import {
    hasEntered
} from '../../selectors'
import Form from "./form";

class Task extends Component {
    constructor (props) {
        super (props);

        this.state = {
            mode: false
        };

        this.submit = this.submit.bind(this)
    }

    submit (task) {
        const {data} = this.props;
        //todo edit
        console.log('new data', task, 'but edit dont work')
        //someAwesomeManipulation
        // request
        //     .post(`https://uxcandy.com/~shapoval/test-task-backend/edit/${data.id}`)
        //     .field('username', data.username)
        //     .field('email', data.email)
        //     .field('text', task.text)
        //     .field('token', 'beejee')
        //     .attach('image', this.state.img)
        //     .end((err, res) => {
        //         //todo add loader
        //         console.log(err, res);
        //         if (res && res.body && res.body.status && res.body.status === 'ok') {
        //             alert('Ваша задача создана');
        //         } else {
        //             alert('Увы, что-то пошло не так');
        //         }
        //     })

        this.changeMode(false);
    }

    changeMode (status) {
        this.setState({
            mode: status
        })
    }

    render () {
        const {data} = this.props;

        return (
            <div className="tasks__item">
                <div className="tasks__left">
                    <img className="tasks__img" src={data.image_path} alt=""/>
                </div>
                {
                    !this.state.mode &&
                    <div className="tasks__right">
                        <div className="tasks__row"><span className="tasks__label">Имя:</span>{data.username}</div>
                        <div className="tasks__row"><span className="tasks__label">Email:</span>{data.email}</div>
                        <div className="tasks__row"><span className="tasks__label">Задача:</span>{data.text}</div>
                        <div className="tasks__row"><span className="tasks__label">Статус:</span>{data.status ? "Выполнена" : "Не выполнена"}</div>
                        { this.props.admin &&
                        <button className="tasks__btn" onClick={this.changeMode.bind(this, true)}>Редактировать</button>
                        }
                    </div>
                }
                {
                    this.state.mode &&
                        <Form onSubmit={this.submit}/>
                }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    admin: hasEntered(state, ownProps)
})


const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Task)