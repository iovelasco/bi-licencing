import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Card from '@andes/card';
import Dropdown from '@andes/dropdown';
import './HeaderApp.scss';


const { DropdownItem } = Dropdown;

const HeaderApp = props => (
  <Card paddingSize={16} className="header-app">
    <Grid fluid>
      <Row>
        <Col xs={6} md={3}>
          <Dropdown label="Ioce Velasco" size="compact" onChange={props.handlerOnClick}>
            <DropdownItem value="Ioce Velasco" primary="Ioce Velasc" />
            <DropdownItem value="Cerrar" primary="Cerrar sesion" />
          </Dropdown>
        </Col>
      </Row>
    </Grid>
  </Card>
);

export default HeaderApp
