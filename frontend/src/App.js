import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TFGList from './TFGList';
import TFGEdit from "./TFGEdit";
import Login from './login';
import Registro from './registro';


class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Registro}/>
            <Route path='/tfgs' exact={true} component={TFGList}/>
            <Route path='/tfgs/:email' component={TFGEdit}/>
          </Switch>
        </Router>
    )
  }
}

export default App;