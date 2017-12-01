import React from 'react'

import LoginForm from '../../components/LoginForm'
import AddTask from '../../components/AddTask'
import TasksList from '../../components/TasksList'

const Home = () => {
    return (
        <div>
            <LoginForm/>
            <AddTask/>
            <TasksList/>
        </div>
    )
};

export default Home