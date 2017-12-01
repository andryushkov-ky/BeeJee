import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'

import {
    fetchTasks
} from '../../actions'
import {
    getTasks,
    getPages
} from '../../selectors'

import Task from '../Task'

class TasksList extends Component {
    constructor (props) {
        super (props);

        this.state = {
            popupOpen: false,
            currentPage: 1,
            sortDir: 'asc',
            sortField: 'id'
        };

        this.renderPagination = this.renderPagination.bind(this)
    }

    componentDidMount () {
        this.props.fetchTasks(this.state.currentPage)
    }

    changePage (currentPage) {
        this.setState({
            currentPage
        })
        this.props.fetchTasks(currentPage);
    }

    renderPagination () {
        let box =[];

        if (this.props.pages > 1) {
            for (let i = 0; i < this.props.pages; i++) {box.push(i+1)}
            return (
                <div className="tasks__pagination">
                    {box.map((page, index) => (
                        <div
                            onClick={this.changePage.bind(this, page)}
                            className={`tasks__page ` + `${page === this.state.currentPage ? "tasks__page--active" : ""}`}
                            key={index}>
                            {page}
                        </div>
                    ))}
                </div>
            )
        }
    }

    render () {
        const {tasks} = this.props;

        return (
            <div className="tasks">
                <div
                    className="tasks__header">
                    Список задач
                </div>
                {this.renderPagination()}
                <div className="tasks__list">
                    {!!tasks.length && tasks.map((task, index) =>
                        <Task data={task} key={index}/>
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    tasks: getTasks(state, ownProps),
    pages: getPages(state, ownProps)
})

const mapDispatchToProps = {
    fetchTasks
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksList)