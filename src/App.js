import React, { Component } from 'react';
import './App.css';

import { Connector, subscribe } from 'mqtt-react';

export default () => (
  <Connector mqttProps="ws://localhost:8080">
    <Messages />
  </Connector>
);

// Messages are passed on the "data" prop
const MessageList = props => {
  console.log(props);
  return (
    <ul key={props.data}>
      {props.data.map(message => (
        <li>{message.temperatura}</li>
      ))}
    </ul>
  );
};

const Messages = subscribe({
  topic: 'sensors'
})(MessageList);
