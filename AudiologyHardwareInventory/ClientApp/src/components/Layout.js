import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import './Layout.css';
import { NavMenuTest } from './NavMenuTest';
import { Home } from './Home';

export class Layout extends Component {
    static displayName = Layout.name;
   
    constructor(props) {
        super(props);
        this.state = {
            testval: '',testval1:''
        };      
    }
   
    componentDidMount() {
      
        //this.setState({ testval: 'admin' });
        if (window.location.href == "http://localhost:55528/familyType")
        {
            this.setState({ testval: 'admin' });
        }

    }

    handleCallback = (childData) => {
            this.setState({ testval: childData });
       
    }

    render() {
        let contents;
        let clicked = true;
        if (this.state.testval =='admin') {
            contents = <div class="row content">
                <div class="col-sm-2 sidenav">
                    <NavMenu  />
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
