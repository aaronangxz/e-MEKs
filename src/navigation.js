import React from 'react';
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserCircle, faFolder, faTools, faDiceD20 } from '@fortawesome/free-solid-svg-icons';


const tabs = [{
    route: "/",
    icon: faHome,
    label: "Home"
  },{
    route: "/resources",
    icon: faFolder,
    label: "Files"
  },{
    route: "/vault",
    icon: faDiceD20,
    label: "the Vault"
  },{
    route: "/parts",
    icon: faTools,
    label: "Parts"
  },{
    route: "/login",
    icon: faUserCircle,
    label: "Me"
  }]

  const Navigation = (props) => {

    return (
      <div>
        {/*Top Nav Bar*/}
        <nav className="navbar navbar-expand-md navbar-light d-none d-lg-block sticky-top" role="navigation">
          <div className="container-fluid">
              <a className="navbar-brand" href="/home">e-MEKs</a>
              <Nav className="ml-auto">
                <NavItem>
                  <NavLink to="/home" className="nav-link">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/resources" className="nav-link">
                    Resources
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/vault" className="nav-link">
                    the Vault
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/parts" className="nav-link">
                    Parts
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/login" className="nav-link">
                    Me
                  </NavLink>
                </NavItem>
              </Nav>
          </div>
        </nav>
        {/*Bottom Nav Bar*/}
        <nav className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav" role="navigation">
        <Nav className="w-100">
          <div className=" d-flex flex-row justify-content-around w-100">
            {
              tabs.map((tab, index) =>(
                <NavItem key={`tab-${index}`}>
                  <NavLink to={tab.route} className="nav-link bottom-nav-link" activeClassName="active" exact={true}>
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                      <FontAwesomeIcon size="lg" icon={tab.icon}/>
                      <div className="bottom-tab-label">{tab.label}</div>
                    </div>
                  </NavLink>
                </NavItem>
              ))
            }
          </div>
        </Nav>
      </nav>
      </div>
    )
  };


export default Navigation;