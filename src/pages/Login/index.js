import React from 'react';
import { Col } from 'react-flexbox-grid';
import Card from '@andes/card';

import TextField from '@andes/textfield';
import Button from '@andes/button';
import './Login.scss';

const { Password } = TextField;

const Login = props => (
  <Col md={4} className="login">
    <Card paddingSize={48} className="login__card">
      <p>Ingresa tus datos</p>
      <TextField label="usuario" />
      <Password label="password" />
      <Button
        role="button"
        className="login__button"
        modifier="outline"
        onClick={props.handlerOnClick}
        onKeyPress={props.handlerOnClick}
      >
        Entrar
      </Button>
    </Card>
  </Col>);

export default Login;
