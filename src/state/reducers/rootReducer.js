import initialState from '../store/initialState'

const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case "TEST":
      return {
        ...state,
        message: {
          greeting: action.payload
        }
      }

    case "STORE_USERS":
      return {
        ...state,
        users: action.payload
      }

    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
        auth: { message: 'You are now logged in', status: true }
      }

    default:
      return state
  }

}

export default rootReducer