import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_REQUEST
} from '../actions/types'

const initialState = {
  email: '',
  password: '',
  loading: false,
  error: '',
  user: null
}

export default (state = initialState, action) => {
  console.log(action, state)
  switch(action.type) {
    case EMAIL_CHANGED:
      return {
        ...state,
        email: action.email
      }
    case PASSWORD_CHANGED:
      return {
        ...state,
        password: action.password
      }
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: ''
      }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...initialState,
        user: action.user,
      }
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: 'Authentication Failed',
        password: '',
        loading: false
      }
    default:
      return state
  }
}
