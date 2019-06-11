import React, { Component } from 'react';
import './App.style.scss';

import { withRouter } from 'react-router';

import { Provider } from 'react-redux';
import configureStore from './redux/store';

import logoPessoasComuns from './assets/pessoascomuns.svg';
import logoEmpresas from './assets/empresas.svg';
import logoDefesaCivil from './assets/defesacivil.svg';
import logoUnifei from './assets/logo_unifei.png';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import PessoasComuns from './pages/PessoasComuns/PessoasComuns';
import Empresas from './pages/Empresas/Empresas';
import DefesaCivil from './pages/DefesaCivil/DefesaCivil';

import { Connector } from 'mqtt-react';
import { Listener } from './listeners/Listeners';

export const host = 'localhost';
// const hsot = '192.168.1.104';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Connector mqttProps={`ws://${host}:8080`}>
          <div className="app">
            <Router>
              <Drawer />
              <div className="app__content">
                <Route path="/" exact component={null} />
                <Route path="/pessoas" exact component={PessoasComuns} />
                <Route path="/empresas" exact component={Empresas} />
                <Route path="/defesa" exact component={DefesaCivil} />
              </div>
              <Listener />
            </Router>
          </div>
        </Connector>
      </Provider>
    );
  }
}

const Drawer = withRouter(props => {
  return (
    <div className="app__drawer">
      <div id="logo-unifei">
        <img src={logoUnifei} />
      </div>
      <div className="app__drawer__item" onClick={() => props.history.push('/pessoas')}>
        <img src={logoPessoasComuns} />
        <span>Pessoas Comuns</span>
      </div>
      <div className="app__drawer__item" onClick={() => props.history.push('/empresas')}>
        <img src={logoEmpresas} />
        <span>Empresa</span>
      </div>
      <div className="app__drawer__item" onClick={() => props.history.push('/defesa')}>
        <img src={logoDefesaCivil} />
        <span>Defesa Civil</span>
      </div>
    </div>
  );
});
