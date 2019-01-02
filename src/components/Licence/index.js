/* eslint-disable */
import React from 'react';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Icon from '@material-ui/core/Icon';

import Card from '@andes/card';
import './Licenses.scss';



const LicenceCard = (props) =>{
  let statusFinal;
    switch(props.status) {
      case "approved":
      statusFinal = "Aprobado";
      case "cancel":
        statusFinal = "Cancelado";
      break;
      case "pending":
       statusFinal = "pendiente";
      break;

      default:
        // code block
    }
  return  (
    <Col md={4}>
      <div paddingSize={16} raised={false} className="license-card">
          <Col md={4}>
            <span>
               { statusFinal }
            </span>
          </Col>
          <Col md={8} >
            <h2>
              {props.name}
            </h2>
            <p> <span> Key:</span>{props.code}</p>
          </Col>
      </div>
    </Col>
  )

} 

  




export default LicenceCard;


