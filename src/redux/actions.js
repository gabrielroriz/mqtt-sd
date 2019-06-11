import { host } from '../App';

import axios from 'axios';

export const addDefesaNotification = items => {
  return async (dispatch, getState) => {
    dispatch({ type: 'ADD_DEFESA_NOTIFICATION', payload: items });
  };
};

export const addEmpresaNotification = items => {
  return async (dispatch, getState) => {
    dispatch({ type: 'ADD_EMPRESA_NOTIFICATION', payload: items });
  };
};

export const addPessoasNotification = items => {
  return async (dispatch, getState) => {
    dispatch({ type: 'ADD_PESSOAS_NOTIFICATION', payload: items });
  };
};

export const notifyCompany = message => {
  return async (dispatch, getState) => {
    axios
      .post(`http://${host}:8002/notify/company`, {
        message
      })
      .then(res => {
        console.log(res);
      });
  };
};

export const notifyPessoas = message => {
  return async (dispatch, getState) => {
    axios
      .post(`http://${host}:8002/notify/pessoas`, {
        message
      })
      .then(res => {
        console.log(res);
      });
  };
};
