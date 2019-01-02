/* eslint-disable */
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Card from '@andes/card';
import './ConfigLicensing.scss';
import List from '@andes/list';
import ViewDashboard from './component/ViewDashboard';
import EditDashboard from './component/EditDashboard';
import Tabs from './component/TabConfig';
const { ListItem } = List


class AddedLicensing extends React.Component {
  constructor(props) {
    super();
    this.state = {
      active: 0
    }
  }

  render() {
    const {tabActive} = this.state
    return (
      <Row className="config-licensing">
        <Col xs={12} >
          <Card paddingSize={0}>
            <Col md={12} className="config-licensing__title">
              <p>
                Configurar modulo 
              </p>
            </Col>
            <Grid fluid className="config-licensing__wrapper-config">
              <Tabs>
                Ver Dashboard
                <Col md={12}> <ViewDashboard /> </Col>   
                Editar Dashboard
                <Col md={12}> <EditDashboard message={"mensaje de estatus"} /> </Col> 
              </Tabs>
           
            </Grid>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default AddedLicensing;
