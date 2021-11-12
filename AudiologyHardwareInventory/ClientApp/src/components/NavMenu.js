import React, { Component } from 'react';
import { Nav, Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { FamilyTypeOperation } from '../FamilyType/FamilyTypeOperation';
import { AdminLogin } from './AdminLogin';


export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,superAdmin:true,role:''
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        var role = sessionStorage.getItem("role");
        let contents='';
        if (role == "SuperAdmin") {
            contents = <NavLink tag={Link} className="text-dark" to="/admin"><span>Insert Admin</span></NavLink>;
        }
      
       
        return (
            <div>
                
                <Nav defaultActiveKey="/counter" className="flex-column">
                    <NavLink tag={Link} className="text-dark" to="/hearingAid"><span>Hearing Aid</span></NavLink>
                    <NavLink tag={Link} className="text-dark" to="/platform-data"><span>Platform</span></NavLink>
                    <NavLink tag={Link} className="text-dark" to="/image"><span>Images</span></NavLink>
                    <NavLink tag={Link} className="text-dark" to="/team-data"><span>Teams</span></NavLink>
                   {/* <NavLink tag={Link} className="text-dark" to="/"><span>Teams</span></NavLink>*/}
                    {/*<NavLink tag={Link} className="text-dark" to="/"><span>Platforms</span></NavLink>*/}
                    <NavLink tag={Link} className="text-dark" to="/mobile"><span>Mobile</span></NavLink>
                    <NavLink tag={Link} className="text-dark" to="/hardwareType"><span>Hardware Type</span></NavLink>
                    <NavLink tag={Link} className="text-dark" to="/brand"><span>Brand</span></NavLink>
                    <NavLink tag={Link} className="text-dark" to="/chipset"><span>Chipset Type</span></NavLink>
                    <NavLink tag={Link} className="text-dark" to="/familyType" ><span>Family Type</span></NavLink>
                    <NavLink tag={Link} className="text-dark" to="/programmer"><span>Programmers</span></NavLink>
                    {contents}
                            
                </Nav>
             
              
            </div>
        );
    }
}
