const initialState = {
  email: '',
  password: '',
  user: {},
  error: '',
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_INPUT_CHANGE':
      return { ...state, [action.payload.prop]: action.payload.value }

    case 'LOGGING_IN':
      return { ...state, loading: true, error: ''}

    case 'LOGIN_SUCCESS':
      return { ...state, user: action.payload, loading: false };

    case 'LOGIN_FAIL':
      return { ...state, error: 'Authentication failed', password: '', loading: false };

    default:
      return state;
  }
};
