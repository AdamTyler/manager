import firebase from 'firebase'
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_REQUEST
} from './types'

export const emailChanged = (email) => {
  return {
    type: EMAIL_CHANGED,
    email
  }
}

export const passwordChanged = (password) => {
  return {
    type: PASSWORD_CHANGED,
    password
  }
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    user
  })
}

const loginUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAIL
  })
}

const loginUserRequest = () => {
  return {
    type: LOGIN_USER_REQUEST
  }
}

export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch(loginUserRequest())
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch))
      })
  }
}
