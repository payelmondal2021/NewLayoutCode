import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { withRouter,Link } from 'react-router-dom';
import './NavMenu.css';



export class NavMenuTest extends Component {
    static displayName = NavMenuTest.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    onTrigger = (event) => {
        let val = "admin";
        this.props.parentCallback(val);
        window.history.pushState('obj', 'newtitle', '/admin');
        window.location.reload();
        event.preventDefault();
    }
    clickHome = (event) => {
        let val = "home";
        this.props.parentCallback(val);
        window.history.pushState('obj', 'newtitle', '/home');
        event.preventDefault();
    }

    render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/"></NavbarBrand>
                        <a class="navbar-brand" href="#"><font color="#fff"><b>Audiology Device Inventory</b></font></a>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav flex-grow">
                              
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/">
                                        <span>
                                            <button type="button" onClick={this.clickHome}>
                                                General Info
                                            </button>
                                        </span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/home" >
                                    <span>
                                        <button type="button" onClick={this.clickHome}>
                                            Search HearingAid</button>
                                    </span>
                                 </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/home">
                                     <span>
                                            <button type="button" onClick={this.onTrigger}>
                                            Admin </button>
                                    </span></NavLink>
                                </NavItem>
                               
                              
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
