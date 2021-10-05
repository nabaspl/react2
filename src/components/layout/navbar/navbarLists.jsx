import React, { Component } from 'react';
class NavList extends React.Component {
    render() { 
        return <ul className="nav-menu">
            <li className="active"><a>Safes</a></li>
            <li><a>Vault AppRoles</a></li>
            <li><a>Service Accounts</a></li>
            <li><a>IAM Service Accounts</a></li>
            <li><a>Azure Active Directory</a></li>
            </ul>;
    }
}
 
export default NavList;