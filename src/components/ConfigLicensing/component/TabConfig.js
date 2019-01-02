import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import List from '@andes/list';

const { ListItem } = List 

class TabsConfig extends React.Component {
  constructor(props) {
    super();
    this.state = {
      active: 0,
    };
  }

  select = (i) => {
    let _this = this;
    return function () {
      _this.setState({
        active: i,
      });
    };
  }

  renderTabs = () => {
    return React.Children.map(this.props.children, (item, i) => {
      if (i % 2 === 0) {
        const active = this.state.active === i ? 'false' : 'true';
        return <ListItem onClick={this.select(i)} selected={active}>{item}</ListItem>;
      }
    });
  }

  renderContent() {
    return React.Children.map(this.props.children, (item, i) => {
      if (i - 1 === this.state.active) {
        return <div className="config-licensing--tabs-content">{item}</div>;
      }
    });
  }

  render() {
    return (
      <Row>
        <Col md={12} className="config-licensing__tabs">
          <List className="config-licensing--tabs-list">
            {this.renderTabs()}
          </List>
          {this.renderContent()}
        </Col>
      </Row>
    );
  }
}

export default TabsConfig