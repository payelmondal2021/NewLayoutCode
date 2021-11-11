import React, { Component } from 'react';
import ReactTable from 'react-table-6'
import REACTDOM from "react-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Redirect } from 'react-router-dom';
/*import './DefaultReactTable.css';*/
import { PopUpFamilyType } from './PopUpFamilyType.js';
import Enumerable from 'linq';
import Swal from 'sweetalert2';



export class FamilyTypeOperation extends Component {
    static displayName = FamilyTypeOperation.name;

    constructor(props) {
        super(props);
        this.state = {
            familyTypeInfo: [], loading: true, modal: false, clicked: false, update: '', familyTypeId: '', Button: 'Delete', maxId: 0,
            fade: false, familyName: '', description: '', message: 'Loading....', visible: false,success:'done'
        };

        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onRowClick = this.onRowClick.bind(this);
    }

   

    toggle(e) {
        this.setState({ familyTypeId: '', familyName: '', description: '' });
        this.setState({
            modal: !this.state.modal,
            update: false
        });
        console.log('after setState: ', this.state);
    }

    handleSubmit(event) {

        var familyName = document.getElementById('txtFamilyName').value;
        var description = document.getElementById('txtDescription').value;
      
        if (this.state.update == false) {
            let familyType = {
                familyTypeId: this.state.maxId,
                familyName: familyName,
                description: description
            };

            this.create(familyType);
        }
        if (this.state.update == true) {
            this.setState({ update: false });
            let familyType =
            {
                familyTypeId: this.state.familyTypeId,
                familyName: familyName,
                description: description
            };
            this.update(familyType);
        }
        event.preventDefault();
    }

    componentDidMount() {

        this.populateFamilyType();
        

    }

    onRowClick = (state, rowInfo, column, instance) => {
        return {

            onClick: e => {
                const btnId = e.target.dataset.id;
                this.setState({ familyTypeId: rowInfo.row.familyTypeId, familyName: rowInfo.row.familyName, description: rowInfo.row.description });
                if (btnId == "editButtonId") {
                    this.setState({
                        modal: !this.state.modal,
                        update: true
                    });
                    /* this.setState({ teamId: rowInfo.row.teamId, teamValue: rowInfo.row.teamName, descriptionValue: rowInfo.row.description, memberValue: rowInfo.row.teamMembers });*/
                }
                else if (btnId == "deleteButtonId") {
                    let familyType =
                    {
                        familyTypeId: rowInfo.row.familyTypeId,
                        familyName: rowInfo.row.familyName,
                        description: rowInfo.row.description,
                       
                    };
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'

                    }).then((result) => {
                        if (result.isConfirmed) {
                            this.delete(familyType);
                        }
                    })

                }
            }
        }
    }
    handleCallback = (childData) => {
        alert(childData);
    }

    render() {
        
        return (
            <div><br></br>
                <h2 id="tabelLabel" >Manage FamilyType</h2><br></br>
                <div>
                    <Button color='info' onClick={this.toggle}>Add FamilyType</Button>
                    <PopUpFamilyType parentCallback={this.handleCallback}  data={this.state} toggle={this.toggle} handleSubmit={this.handleSubmit} />

                   
                </div><br></br>
                <p><em>{this.state.message}</em></p>
   
                <br></br>
                <div>
                    <ReactTable
                        getTdProps={this.onRowClick}
                        expandedRows={true}
                        data={this.state.familyTypeInfo}
                        columns={[
                            {
                                columns: [
                                    {
                                        Header: () => <strong>FamilyType Id</strong>,
                                        accessor: 'familyTypeId',
                                    },
                                    {
                                        Header: () => <strong>Family Name</strong>,
                                        accessor: 'familyName',
                                    },
                                    {
                                        Header: () => <strong>Description</strong>,
                                        accessor: 'description',
                                    },
                                                                 
                                    {
                                        Header: "Action",
                                        accessor: "Button",
                                        Cell: ({ row }) => (
                                            <div>
                                                <Button color='info' data-id="editButtonId">
                                                    Edit
                                                </Button> {' '}
                                                <Button color='info' data-id="deleteButtonId">
                                                    Delete
                                                </Button>
                                            </div>
                                        )

                                    }

                                ],
                            },
                        ]}
                        defaultPageSize={5}

                    />
                </div>
            </div>
        );
    }
 
    async populateFamilyType() {
        const response = await fetch('api/FamilyType');
        const data = await response.json();
        if (data.length != 0) {
            const familyTypeId = Enumerable.from(data)
                .max(s => s.familyTypeId);
            this.setState({ familyTypeInfo: data, message: '', update: false, maxId: familyTypeId + 1 });
        }
        else
            this.setState({ familyTypeInfo: data, message: '', maxId: 0, update: false });
    }

    async create(familyType) {
        const response = await fetch('api/FamilyType/Create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                familyType
            )
        })
        if (response.ok) {
            this.sweetAlert()
        }
    }
    async test() {
        
            this.handleCallback();
    }
    async update(familyType) {
        const response = await fetch('/api/FamilyType/Update', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                familyType
            )

        })
        if (response.ok) {
            this.sweetAlert()
        }
    }
    async delete(familyType) {
        const response = await fetch('/api/FamilyType/Delete', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                familyType
            )
        })
        if (response.ok) {
            window.location.reload();
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

