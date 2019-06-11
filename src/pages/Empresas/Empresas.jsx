import React, { Component } from 'react';

import { connect } from 'react-redux';

import './Empresas.style.scss';
import moment from 'moment';

class Empresa extends Component {
  render() {
    return (
      <div className="empresa">
        <h1>OLÁ, Empresa.</h1>
        {this.props.items.map(i => {
          return (
            <div className="empresa__item">
              <span>{moment(i.data).format('DD/MM/YYYY | HH:mm:ss')}</span>
              <h2>{i.message}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({ items: state.app.empresa_notification });

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Empresa);
