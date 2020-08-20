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
          <NavLink to path="/" component={Home} exact={true} activeClassName="active"/>
          <Route path="/home" component={Home} exact={true}/>
          <Route path="/vault" component={Vault} />
          <Route path="/login" component={Login} />
          <Route path="/parts" component={Parts} />
          <Route path="/resources" component={Resources} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;