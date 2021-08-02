import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";

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
          <Link className="nav-link" to="/form" activeClassName="active">My Form</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/mat">Material-UI</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  </div>
)
export default Header;

// function Header() {
//   return (
    // <div className="header sticky-top">
    //   <nav className="navbar navbar-fixed-top navbar-dark bg-dark">
    //     <div className="container">
    //       <a className="navbar-brand">
    //         <img src="https://www.capgemini.com/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
    //           height="24px" alt="Capgemini" />
    //       </a>
    //       <p className="h5 text-info" >Welcome to CG React APP</p>
    //     </div>
    //   </nav>
    // </div>

    // <div >
    //   <h1>Ths is header.</h1>
    //   <p>This is a header component.</p>
    // </div>

//   );
// }
// export default Header;