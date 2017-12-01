import R from 'ramda'

export const getTasks = (state, ownProps) => {
    return state.tasks
}

export const getPages = (state, ownProps) => {
    return state.pages
}

export const hasEntered = (state, ownProps) => {
    return state.admin
}