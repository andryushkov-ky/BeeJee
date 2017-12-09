import request from 'superagent'

const developer = 'goddoesnothearyourscream'

export const fetchTasks = (page, dir, field) => {
    return new Promise((resolve, reject) => {
        request
            .get(`https://uxcandy.com/~shapoval/test-task-backend/`)
            .query({ developer: developer })
            .query({ page: page })
            .query({ sort_direction: dir })
            .query({ sort_field: field })
            .then(({body}) => {
                resolve(body)
            })
            .catch(({message}) => {
                reject(message)
            })
    })
}

export const addTask = (task, img) => {
    return new Promise((resolve, reject) => {
        request
            .post(`https://uxcandy.com/~shapoval/test-task-backend/create?developer=${developer}`)
            .field('username', task.username)
            .field('email', task.email)
            .field('text', task.text)
            .attach('image', img)
            .then(({body}) => {
                resolve(body)
            })
            .catch(({message}) => {
                reject(message)
            })
    })
}