import { combineReducers } from 'redux';

const INITIAL_STATE = {
  defesa_notification: [],
  empresa_notification: [],
  pessoas_notification: []
};

function app(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_DEFESA_NOTIFICATION':
      return { ...state, defesa_notification: payload };

    case 'CLEAN_DEFESA_NOTIFICATION':
      return { ...state, defesa_notification: [] };

    case 'ADD_EMPRESA_NOTIFICATION':
      return { ...state, empresa_notification: payload };

    case 'ADD_PESSOAS_NOTIFICATION':
      return { ...state, pessoas_notification: payload };

    default:
      return state;
  }
}

export default combineReducers({ app });
