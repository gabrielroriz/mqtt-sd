import React, { Component } from 'react';

import { connect } from 'react-redux';

import './DefesaCivil.style.scss';
import { notifyCompany, notifyPessoas } from '../../redux/actions';

class DefesaCivil extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      messagePessoasComuns: ''
    };
  }

  notifyCompany = () => {
    this.props.notifyCompany(this.state.message);
  };

  notifyPessoas = () => {
    this.props.notifyPessoas(this.state.messagePessoasComuns);
  };

  render() {
    return (
      <div className="defesa">
        <h1>BEM VINDO, DEFESA CIVIL.</h1>
        <div className="defesa__notify-item__button-container">
          <input type="text" value={this.state.message} onChange={e => this.setState({ message: e.target.value })} />
          <div className="defesa__notify-item__button" onClick={this.notifyCompany}>
            AVISAR EMPRESA!
          </div>
        </div>

        <div className="defesa__notify-item__button-container pessoas-comuns">
          <input
            type="text"
            value={this.state.messagePessoasComuns}
            onChange={e => this.setState({ messagePessoasComuns: e.target.value })}
          />
          <div className="defesa__notify-item__button pessoas-comuns" onClick={this.notifyPessoas}>
            AVISAR PESSOAS COMUNS!
          </div>
        </div>

        <h1 id="anormalidade-label">Anormalidades identificadas</h1>
        {this.props.messages.length === 0 ? <div id="empty">Nenhuma anormalidade identificada.</div> : null}
        <div className="defesa__notify-item__container">
          {this.props.messages.map(message => (
            <div class="defesa__notify-item">
              <span>
                <strong>{`${message.temperatura}ºc e ${message.mq135}`}</strong>
              </span>
              <div className="defesa__notify-item__time">24/05/1997 - 12:30</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({ messages: state.app.defesa_notification });

const mapDispatchToProps = {
  notifyCompany,
  notifyPessoas
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefesaCivil);
