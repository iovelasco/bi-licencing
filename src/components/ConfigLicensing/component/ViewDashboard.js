import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import TextField from '@andes/textfield';
import '../ConfigLicensing.scss';


const ViewDashboard = props => (
  <Row center="md" className="view-dashboard">
    <Col md={6} >
      <p>Usuario estatico</p>
      <TextField className="view-dashboard--input" textbox label="Usuario" value="admin"/>
      <TextField className="view-dashboard--input" textbox label="Contraseña"  value="admin" message="Copia usuario y contraseña" />
    </Col>
  </Row>
);

export default ViewDashboard;
