import React from "react";

const Footer = props => (
  <div>
    {props.createdBy && <p>Created by {props.createdBy}</p>}
    <h4> &#0169; 2019-20</h4>
  </div>
);
export default Footer;
