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
            sortDir: 'desc',
            sortField: 'id'
        };

        this.renderPagination = this.renderPagination.bind(this)
        this.renderSorts = this.renderSorts.bind(this)
        this.changeSort = this.changeSort.bind(this)
    }

    componentDidMount () {
        this.props.fetchTasks(this.state.currentPage, this.state.sortDir, this.state.sortField)
    }

    async changePage (currentPage) {
        await this.setState({
            currentPage
        })

        this.props.fetchTasks(this.state.currentPage, this.state.sortDir, this.state.sortField)
    }

    async changeSort ({target}) {
        await this.setState({
            [target.name]: target.value
        })

        this.props.fetchTasks(this.state.currentPage, this.state.sortDir, this.state.sortField)
    }

    renderSorts () {
        return (
            <div className="tasks__sort">
                <div className="tasks__sort-title">Сортировка</div>
                <div className="tasks__sort-col">
                    <label className="tasks__sort-label" htmlFor="">По направлению</label>
                    <select name="sortDir" value={this.state.sortDir} id="" onChange={this.changeSort}>
                        <option value="asc">asc</option>
                        <option value="desc">desc</option>
                    </select>
                </div>
                <div className="tasks__sort-col">
                    <label className="tasks__sort-label" htmlFor="">По полю</label>
                    <select name="sortField" value={this.state.sortField} onChange={this.changeSort} id="">
                        <option value="id">id</option>
                        <option value="username">username</option>
                        <option value="email">email</option>
                        <option value="status">status</option>
                    </select>
                </div>
            </div>
        )
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
                {this.renderSorts()}

                <div className="tasks__list">
                    {!!tasks.length && tasks.map((task, index) =>
                        <Task data={task} key={index}/>
                    )}
                </div>

                {this.renderPagination()}
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