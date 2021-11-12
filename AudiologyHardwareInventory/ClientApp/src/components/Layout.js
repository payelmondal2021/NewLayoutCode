import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import './Layout.css';
import { NavMenuTest } from './NavMenuTest';
import { Home } from './Home';
import { AdminLogin } from './AdminLogin';
import ReactSession from 'react-client-session';


export class Layout extends Component {
    static displayName = Layout.name;
   
    constructor(props) {
        super(props);
        this.state = {
            testval: '', adminLogin: '', login: '',role:''
        };      
    }
   
    componentDidMount() {
      
        //this.setState({ testval: 'admin' });
        var a = window.location.href;
        var b = window.location.href.includes("familyType");
        if (window.location.href.includes("familyType"))
        {
            var userRole = sessionStorage.getItem("role");
            var admin = sessionStorage.getItem("user");
            this.setState({ testval: 'admin', adminLogin: admin, role: userRole});
        }
        if (window.location.href.includes("home")) {
            this.setState({ testval: 'home' });
        }
        if (window.location.href.includes("admin")) {
            this.setState({ testval: 'admin' });
        }

    }

    handleCallback = (childData) => {
            this.setState({ testval: childData });
       
    }
    handleLogin = (adminlogin, role) => {
        this.setState({ adminLogin: adminlogin, role: role });
       
    }

    render() {
        let contents;
        let clicked = true;

        contents = <div class="row content">
            <div class="row">
                {/*<div class="col-sm-2">*/}
                   
                {/*</div>*/}
                {/*<div class="col-sm-10">*/}
                {/*    <h1> Welcome To Home Page </h1>*/}
                {/*</div>*/}
                {/*<div class="col-sm-2">*/}
                    
                {/*</div>*/}
            </div>
        </div>;
        if (this.state.testval == 'admin' && sessionStorage.getItem("user") == null) {
           

            contents = <div class="row content">
                <AdminLogin parentCallback={this.handleLogin} />
            </div>;
            
        }
        if (this.state.testval == 'admin' &&  sessionStorage.getItem("user") == 'AdminLogin')
        {
            
                contents = <div class="row content">
                <div class="col-sm-2 sidenav">

                        {/*<NavMenu  />*/}
                    <NavMenu data={this.state} />
                </div>
                    <div class="col-sm-10 ">
                        
                        {this.props.children}
                     </div>
                 </div>;
            
        }
        if (this.state.testval == 'home') {
            contents = <div class="row content">
                <div class="col-sm">
                    <Home />
                  
                </div>
                {/*<div class="col-sm-10 ">*/}
                {/*    {this.props.children}*/}
                {/*</div>*/}
            </div>;

        }

         

    return (
      //<div>
        
      //  <Container>
      //          <NavMenuTest />
      //    {this.props.children}
      //  </Container>
      //</div>

        <div class="container-fluid">
                <div class="row ">

                    <div class="col-sm">


                    <NavMenuTest parentCallback={this.handleCallback} />


                    </div>

                </div>
            <div>
                {contents}
                    {/*<div class="row content">*/}
                    {/*    <div class="col-sm-2 sidenav">*/}


                    {/*        <NavMenu />*/}


                    {/*    </div>*/}
                    {/*    <div class="col-sm-10 ">*/}
                    {/*        {this.props.children}*/}


                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
                   
        </div>
    );
  }
}
