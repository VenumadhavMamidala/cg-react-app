import React from 'react';
import {Link} from "react-router-dom";

const Header = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
      <Link className="navbar-brand" to="/home">
        <img src="https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
          height="24px" alt="Capgemini" />
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/welcome" >Welcome</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/emp" >Employee</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/form" >My Form</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/mat">Material-UI</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/datamapper">Data Mapper</Link>
        </li>
        <li className="nav-item align-end"> 
        {/* align right this item  */}
          <Link className="nav-link" to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  </div>
)
export default Header;
