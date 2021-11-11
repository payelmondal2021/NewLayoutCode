
/**//*Using testing purpose ..not using this js file*//**//**/

import { extend } from 'jquery';
import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReactTable from 'react-table-6'

export class AdminLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: true, fade: false, AdminLogin: '', loginStatus:''
        };
    }
    
    LoginTrigger = (event) => {
        var userName=document.getElementById('txtUserName').value;
        var password=document.getElementById('txtPassword').value;
       
        let login = {
            userName: userName,
            password: password
        };       
        const data=this.AdminLoginStatus(login);            
        event.preventDefault();
    }
    CancelTrigger = (event) => {
        this.setState({ modal: false });
    }
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <Modal isOpen={this.state.modal} fade={this.state.fade} >
                            <ModalHeader style={{background: 'Green', color: 'white' }} >
                                <div >Admin Login</div>
                            </ModalHeader>
                            <form onSubmit={this.props.handleSubmit}>
                                <ModalBody>
                                    <div >

                                        <label for="form7" class="pb-2">UserName</label><br></br>
                                        {/*<textarea required id="txtUserName" name="name" placeholder="Please Enter UserName" rows="2" cols="60" />*/}
                                        <input type="text" id="txtUserName" size="45" placeholder="Please Enter UserName" name="username" /><br/><br/>
                                        <label for="form7" class="pb-2">Password</label><br></br>
                                        {/*<textarea id="txtPassword" placeholder="Please Enter Password" name="name2" rows="2" cols="60" /><br /><br />*/}
                                        <input type="password" size="45" id="txtPassword" placeholder="Please Enter Password"  name="myPassword" />
                                       
                                    </div>
                                    <br/>
                                    <div>
                                        <label style={{ color: 'red' }} for="form7" class="pb-2">{this.state.loginStatus}</label><br></br>
                                    </div>
                                </ModalBody>
                                <ModalFooter >
                                    
                                    <button style={{ background: 'orange', color: 'white' }}  type="button" onClick={this.CancelTrigger}>
                                        Cancel
                                    </button>
                                    <button style={{ background: 'orange', color: 'white' }}  type="button" onClick={this.LoginTrigger}>
                                        Login
                                    </button>
                                </ModalFooter>
                            </form>
                        </Modal>
                    </div>
                    <div class="col-sm-4">
                       
                    </div>
                    <div class="col-sm-4">
                        
                    </div>
                </div>               
            </div>
        );
    }
    async AdminLoginStatus(login) {
        const response = await fetch('api/Login/GetLoginStatus', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                login

            )
        })
        const data = await response.json();
        if (data.length > 0)
        {
            this.setState({ AdminLogin: 'success' });
        }
        let val = "AdminLogin";
        if (this.state.AdminLogin == 'success') {
            this.props.parentCallback(val);
            this.setState({ loginStatus: ' ' });

        }
        else {
            this.props.parentCallback('failed');
            this.setState({ loginStatus: 'Please enter correct credential' });
        }
    }
}

