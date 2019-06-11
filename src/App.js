import React, { Component } from 'react';
import './App.style.scss';

import { withRouter } from 'react-router';

import { Provider } from 'react-redux';
import configureStore from './redux/store';

import logoPessoasComuns from './assets/pessoascomuns.svg';
import logoPessoasComunsHover from './assets/pessoascomunsH.svg';

import logoEmpresas from './assets/empresas.svg';
import logoEmpresasHover from './assets/empresasH.svg';
import logoDefesaCivil from './assets/defesacivil.svg';
import logoDefesaCivilHover from './assets/defesacivilH.svg';
import logoUnifei from './assets/logo_unifei.png';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import PessoasComuns from './pages/PessoasComuns/PessoasComuns';
import Empresas from './pages/Empresas/Empresas';
import DefesaCivil from './pages/DefesaCivil/DefesaCivil';

import { Connector } from 'mqtt-react';
import { Listener } from './listeners/Listeners';
import Home from './pages/Home/Home';

// export const host = 'localhost';
export const host = '192.168.1.104';

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
                <Route path="/" exact component={Home} />
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

class _Drawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgPessoas: logoPessoasComuns,
      imgEmpresas: logoEmpresas,
      imgDefesa: logoDefesaCivil
    };
  }

  render() {
    return (
      <div className="app__drawer">
        <div id="logo-unifei">
          <img src={logoUnifei} onClick={() => this.props.history.push('/')} />
        </div>
        <div
          className="app__drawer__item"
          onClick={() => this.props.history.push('/pessoas')}
          onMouseOver={() => this.setState({ imgPessoas: logoPessoasComunsHover })}
          onMouseOut={() => this.setState({ imgPessoas: logoPessoasComuns })}
        >
          <img src={this.state.imgPessoas} />
          <span>Civis</span>
        </div>
        <div
          className="app__drawer__item"
          onClick={() => this.props.history.push('/empresas')}
          onMouseOver={() => this.setState({ imgEmpresas: logoEmpresasHover })}
          onMouseOut={() => this.setState({ imgEmpresas: logoEmpresas })}
        >
          <img src={this.state.imgEmpresas} />
          <span>Orgãos Corporativos</span>
        </div>
        <div
          className="app__drawer__item"
          onClick={() => this.props.history.push('/defesa')}
          onMouseOver={() => this.setState({ imgDefesa: logoDefesaCivilHover })}
          onMouseOut={() => this.setState({ imgDefesa: logoDefesaCivil })}
        >
          <img src={this.state.imgDefesa} />
          <span>Defesa Civil</span>
        </div>
      </div>
    );
  }
}

const Drawer = withRouter(_Drawer);
