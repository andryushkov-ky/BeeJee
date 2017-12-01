import request from 'superagent'
import tasks from './mockClients'
import tasks2 from './mockClients2'

export const fetchTasks = async (page) => {
    try {
        const {body} = await request.get(
            `http://uxcandy.com/~shapoval/test-task-backend?developer=testmegod&page=${page}`
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

// export const fetchTasks = async (page) => {
//     return new Promise(resolve => {
//         if (page === 1) {
//             resolve(tasks.message)
//         } else {
//             resolve(tasks2.message)
//         }
//     })
// }