import { ADD_JOB, DELETE_JOB, SET_JOB } from "./constanst"


export const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}

export const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}

export const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}
export const initState = {
    job: '',
    jobs: []
}

const reducer = (state, action) => {
    let newState
    switch (action.type) {
        case (SET_JOB):
            newState = {
                ...state,
                job: action.payload
            }
            break;

        case (ADD_JOB):
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
            break;

        case (DELETE_JOB):
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)
            newState = {
                ...state,
                jobs: newJobs
            }
            break;

        default:
            throw new Error('Invalid action.')
    }
    return newState;
}

export default reducer