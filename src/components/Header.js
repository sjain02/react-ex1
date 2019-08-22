import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = props => (
  <header>
    {props.header.title && <h1>{props.header.title}</h1>}
    {props.header.subtitle && <h2>{props.header.subtitle}</h2>}
    <div>
      <NavLink to="/" exact={true}>
        Home
      </NavLink>
      <NavLink to="/founders" exact={true}>
        About Us
      </NavLink>
      <NavLink to="/contact" exact={true}>
        Contact
      </NavLink>
    </div>
  </header>
);

// Header.defaultProps = {
//   title: "Boilerplate JSX!",
//   subtitle: "Rendered by React"
// };

const mapStateToProps = state => {
  console.log("State ", state);
  return {
    header: state.header
  };
};
const ConnectedHeader = connect(mapStateToProps)(Header);
export default ConnectedHeader;
