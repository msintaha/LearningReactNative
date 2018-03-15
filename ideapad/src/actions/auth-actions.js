import firebase from 'firebase';

export const authInputChange = ({ prop, value }) => {
  return {
    type: 'AUTH_INPUT_CHANGE',
    payload: { prop, value }
  };
}

export const login = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: 'LOGGING_IN' });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: user
        });
      })
      .catch(() => {
        dispatch({
          type: 'LOGIN_FAIL'
        });
      });
  };
}
