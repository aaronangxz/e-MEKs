import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, NavLink} from "react-router-dom";
import Navigation from './navigation';
import Home from './pages/Home';
import Vault from './pages/Vault';
import Login from './pages/Login';
import Parts from './pages/Parts';
import Resources from './pages/Resources';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation />
        <Switch>
          <NavLink to path="/" exact component={Home} exact={true} activeClassName="active"/>
          <Route path="/" exact component={Home} />
          <Route path="/vault" exact component={Vault} exact={true} />
          <Route path="/login" exact component={Login} exact={true}/>
          <Route path="/parts" exact component={Parts} exact={true}/>
          <Route path="/resources" exact component={Resources} exact={true} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;