import initialState from '../store/initialState'

const rootReducer = (state = initialState, action) => {
  if (action.type === "TEST") {
    debugger
    return {
      ...state,
      message: {
        greeting: action.payload
      }
    }
  } else {
    return state
  }
}

export default rootReducer