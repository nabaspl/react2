import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavList extends React.Component {
    render() { 
        const vaultName = 'John Doe'
        return <ul className="nav-menu">
            <li className="active"><Link to="/">Safes</Link></li>
            <li><Link to={`/vault/${vaultName}`}>Vault AppRoles</Link></li>
            <li><Link to="/service">Service Accounts</Link></li>
            <li><Link to="/iam">IAM Service Accounts</Link></li>
            <li><Link to="/azure">Azure Active Directory</Link></li>
            </ul>;
    }
}
 
export default NavList;