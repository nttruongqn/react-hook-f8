function logger(reducer) {
    return (prevState, action) => {
        console.group(action.type)
        console.log('Pre state: ', prevState)
        console.log('Action: ', action)

        const newState = reducer(prevState, action)
        console.log('Next state: ')
        console.groupEnd()

        return newState
    }
}
export default logger