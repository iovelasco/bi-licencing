import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import Dropdown from '@andes/dropdown';
import Button from '@andes/button';
import '../ConfigLicensing.scss';

const { DropdownItem } = Dropdown;

const EditDashboard = props => (
  <Row className="edit-dashboard">
    <Col md={6}>
      <p>Ingresa tus datos</p>
      <Dropdown label="Selecciona sitio a publicar" value="palermo" >
        <DropdownItem value="analisis-ad-hoc" primary="Análisis ad-hoc " />
        <DropdownItem value="usuario-avanzado" primary="Usuario avanzado" />
      </Dropdown>
      <Button className="demo-button" >
        Continuar
      </Button>
    </Col>
    <Col md={6} className="edit-dashboard--message">
      {props.message}
    </Col>
  </Row>
);

export default EditDashboard;

