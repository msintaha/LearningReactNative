import firebase from 'firebase';

export const ideaInputChange = ({ key, value }) => {
  return {
    type: 'IDEA_INPUT_CHANGE',
    payload: { key, value }
  };
}

export const createIdea = ({ title, idea }) => {
  const { uid } = firebase.auth().currentUser;

  return (dispatch) => {
    firebase.database().ref(`/users/${uid}/ideas`)
      .push({ title, idea })
      .then(() => dispatch({ type: 'NEW_IDEA' }));
  };
}

export const getIdeas = () => {
  const { uid } = firebase.auth().currentUser;

  return (dispatch) => {
    firebase.database().ref(`/users/${uid}/ideas`)
      .on('value', snapshot => {
        dispatch({ type: 'GET_IDEAS', payload: snapshot.val() }) 
      });
  };
}

export const editIdea = ({ title, idea, id }) => {
  const { uid } = firebase.auth().currentUser;

  return (dispatch) => {
    firebase.database().ref(`/users/${uid}/ideas/${id}`)
      .set({ title, idea })
      .then(() => dispatch({ type: 'IDEA_UPDATED' }));
  };
}

export const deleteIdea = ({ id }) => {
  const { uid } = firebase.auth().currentUser;

  return (dispatch) => {
    firebase.database().ref(`/users/${uid}/ideas/${id}`)
      .remove()
      .then(() => dispatch({ type: 'IDEA_DELETED' }));
  };
}

