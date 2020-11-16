// import React, { Component } from 'react';

//stateless functional component, instead of class NavBar extends Component {}
// const NavBar = (props) => {
const NavBar = ({ totalCounters }) => {
    // reference code from https://getbootstrap.com/docs/4.5/components/navbar/
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
            </a>
        </nav>
    );
};

// class NavBar extends Component {
//     render() {
        
//     }
// }
 
export default NavBar;