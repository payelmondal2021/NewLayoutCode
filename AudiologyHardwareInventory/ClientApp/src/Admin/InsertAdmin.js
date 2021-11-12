import React, { Component } from 'react';
import Enumerable from 'linq';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Swal from 'sweetalert2';


export class InsertAdmin extends Component {
    static displayName = InsertAdmin.name;

    constructor(props) {
        super(props);
        this.state = {
            brandInfo: [], modal: false, fade: false
        };
        this.toggle = this.toggle.bind(this);
    }
    submit = (event) => {
        let admin =
        {
            userName: document.getElementById('txtUserName').value,
            password: document.getElementById('txtPassword').value,
            role: document.getElementById('txtrole').value

        };
        this.InsertNewAdmin(admin);
    }
    CancelTrigger = (event) => {
        this.setState({ modal: false });
    }
    toggle(e) {
        this.setState({
            modal: !this.state.modal
        });
    }
    render() {

        return (
            <div style={{
                
                position: 'absolute', left: '30%', top: '12%',
                transform: 'translate(-50%, -50%)'}}>
                <label for="form7" class="pb-2">UserName</label><br></br>
                <input type="text" id="txtUserName"  placeholder="Please Enter UserName" name="username" /><br /><br />
                <label for="form7" class="pb-2">Password</label><br></br>
                <input type="text"  id="txtPassword" placeholder="Please Enter Password" name="myPassword" /><br/><br/>
                <label for="form7" class="pb-2">Role</label><br></br>
                <input type="text"  id="txtrole" placeholder="Please Enter Role" name="myPassword" /><br/><br/>
                <button style={{ background: 'orange', color: 'white' }} type="button" onClick={this.submit}>
                    Submit
                </button>
            </div>
            //<div class="container">
            //    <div class="row">
            //        <div class="col-sm-4">
            //            <Modal isOpen={this.state.modal} fade={this.state.fade} toggle={this.state.toggle} >
            //                <ModalHeader style={{ background: 'Green', color: 'white' }} >
            //                    <div >Admin Login</div>
            //                </ModalHeader>
            //                <form onSubmit={this.props.handleSubmit}>
            //                    <ModalBody>
            //                        <div >

            //                            <label for="form7" class="pb-2">UserName</label><br></br>                              
            //                            <input type="text" id="txtUserName" size="45" placeholder="Please Enter UserName" name="username" /><br /><br />
            //                            <label for="form7" class="pb-2">Password</label><br></br>
            //                            <input type="password" size="45" id="txtPassword" placeholder="Please Enter Password" name="myPassword" /><br/><br/>
            //                            <label for="form7" class="pb-2">Role</label><br></br>
            //                            <input type="text" id="txtrole" placeholder="Please Enter Role" size="45" name="role" /><br/><br/>
            //                        </div>                                                           
            //                    </ModalBody>
            //                    <ModalFooter >
            //                        <button style={{ background: 'orange', color: 'white' }} type="button" onClick={this.CancelTrigger}>
            //                            Cancel
            //                        </button>
            //                        <button style={{ background: 'orange', color: 'white' }} type="button" onClick={this.submit}>
            //                            Submit
            //                        </button>
            //                    </ModalFooter>
            //                </form>
            //            </Modal>
            //        </div>
            //        <div class="col-sm-4">

            //        </div>
            //        <div class="col-sm-4">

            //        </div>
             // </div>
           // </div>
        );
    }

    async InsertNewAdmin(admin) {
        const response = await fetch('api/Login/Create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                admin
            )
        })
        if (response.ok) {
            this.sweetAlert();
            this.setState({ modal: false });

        }
    }
   
    async sweetAlert() {
        const response = await Swal.fire({
            title: 'Successfully Saved the data',
            confirmButtonText: 'OK',
            icon: 'success'

        })
        if (response.isConfirmed) {
            return (this.setState({ modal: !this.state.modal, }),
                window.location.reload())
        }
    }
}
