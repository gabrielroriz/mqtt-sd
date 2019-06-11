import { connect } from 'react-redux';

import { subscribe } from 'mqtt-react';
import { addDefesaNotification, addEmpresaNotification, addPessoasNotification } from '../redux/actions';

/******************
 * Listener
 * *****************/

const ListenerPure = props => {
  let defesa = [];
  let empresa = [];
  let pessoas = [];

  props.data.map(item => {
    const { topic } = item;
    if (topic === 'sensors') {
      defesa.push(item);
    }

    if (topic === '@notification/company') {
      empresa.push(item);
    }

    if (topic === '@notification/pessoas') {
      pessoas.push(item);
    }
  });

  props.addDefesa(defesa);
  props.addEmpresa(empresa);
  props.addPessoas(pessoas);

  return null;
};

const ListenerSubscribed = subscribe({ topic: ['sensors', '@notification/company', '@notification/pessoas'] })(
  ListenerPure
);

export const Listener = connect(
  null,
  { addDefesa: addDefesaNotification, addEmpresa: addEmpresaNotification, addPessoas: addPessoasNotification }
)(ListenerSubscribed);
