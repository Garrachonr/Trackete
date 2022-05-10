import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch , Render} from 'react-router-dom';
import Login from './login';
import Registro from './registro';


class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Registro}/>
            <Route path='/home' exact={true} component={Home}/>
            <Route path='/registro' exact={true} component={Registro}/>
            <Route path='/login' exact={true} component={Login}/>
            <Route render={() => <h1>No se encuentra disponible</h1> }/>

          </Switch>
        </Router>
    )
  }
}

export default App;