/* eslint-disable */
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Card from '@andes/card';
import LicenceCard from '../Licence'
import './AddedLicensing.scss';


class AddedLicensing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userLogin } = this.props;
    const licence = this.props.data.user.assigned
    return (
      <Row className="added-licensing" >
        <Col xs={2} className="added-licensing__quantity">
          <Card  >
            <h2>
              1
            </h2>
            <p>licencias Asignadas</p>
          </Card>
        </Col>
        <Col xs={10} className="added-licensing__accountant" >
          <Card paddingSize={16}>
            <Grid fluid>
            <p className="added-licensing__accountant-title">Licencias agregadas</p>
              <Row>
                {
                  licence.map((item) => {
                    return <LicenceCard name={item.name} code={item.code} key={item.id} />
                  })
                }
              </Row>
            </Grid>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default AddedLicensing;

