import React from 'react';
import { Grid } from 'react-flexbox-grid';

import Login from './pages/Login';
import HomeView from './pages/HomeView';
import './style/index.scss';

class App extends React.Component {
  state = {
    userLogin: false,
  }

  handlerOnClick = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    this.setState({ userLogin: false });
  }

  render() {
    const { userLogin } = this.state;
    return (
      <Grid fluid className="wrapper-app">
        {userLogin ?
          <Login
            userLogin={userLogin}
            handlerOnClick={this.handlerOnClick}
          /> :
          <HomeView
            userLogin={userLogin}
            handlerOnClick={this.handlerOnClick}
          />
        }
      </Grid>
    );
  }
}

export default App;
