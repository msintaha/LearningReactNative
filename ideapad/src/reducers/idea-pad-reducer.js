const initialState = { title: '', idea: '' };

export default (state = initialState, action) => {
  switch (action.type) {
    case 'IDEA_INPUT_CHANGE':
      return { ...state, [action.payload.key]: action.payload.value };

    case 'NEW_IDEA':
      return initialState;
    
    case 'IDEA_UPDATED':
      return initialState;

    case 'IDEA_DELETED':
      return initialState;
    
    default:
      return state;
  }
};