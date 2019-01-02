/* eslint-disable */
import React, { Component , Fragment}from 'react';
import { Row, Col, Grid } from 'react-flexbox-grid';

import HeaderApp from '../../components/HeaderApp';
import AddedLicensing from '../../components/AddedLicensing';
import ConfigLicensing from '../../components/ConfigLicensing';
import data from '../../mock.json';

class HomeView extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    const { userLogin } = this.props;
    return (
      <React.Fragment>
        <HeaderApp userLogin={userLogin} handlerOnClick={this.props.handlerOnClick} />
        <Grid fluid className="home-view">
           <AddedLicensing data={ data }/>
           <ConfigLicensing />
        </Grid>
      </React.Fragment >
    );
  }
}

export default HomeView;
