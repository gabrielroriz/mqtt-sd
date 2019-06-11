import React, { Component } from 'react';

import { connect } from 'react-redux';
import './PessoasComuns.style.scss';
import moment from 'moment';

class Empresa extends Component {
  render() {
    return (
      <div className="pessoas">
        <h1>
          OLÁ, <strong>CIVIS</strong>.
        </h1>

        {this.props.items.map(i => {
          return (
            <div className="pessoas__item">
              <span>{moment(i.data).format('DD/MM/YYYY - HH:mm:ss')}</span>
              <h2>{i.message}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({ items: state.app.pessoas_notification });

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Empresa);
