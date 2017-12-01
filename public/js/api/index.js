import request from 'superagent'
import tasks from './mockTasks'
import tasks2 from './mockTasks2'

export const fetchTasks = async (page, dir, field) => {
    try {
        const {body} = await request.get(
            `https://uxcandy.com/~shapoval/test-task-backend?developer=testmegod&page=${page}&sort_dir=${dir}&sort_field=${field}`
        )
        console.log(body)
        return body.message
    } catch (e) {
        console.log("Error", e)
        return {
            message: e.data,
            someText: `Error`
        }
    }
}

// export const fetchTasks = async (page, dir, field) => {
//     console.log('send request to', `https://uxcandy.com/~shapoval/test-task-backend?developer=testmegod&page=${page}&sort_dir=${dir}&sort_field=${field}`)
//     return new Promise(resolve => {
//         if (page === 1) {
//             resolve(tasks.message)
//         } else {
//             resolve(tasks2.message)
//         }
//     })
// }