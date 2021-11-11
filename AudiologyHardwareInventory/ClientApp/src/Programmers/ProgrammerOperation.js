import React, { Component } from 'react';
import ReactTable from 'react-table-6'
import REACTDOM from "react-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Redirect } from 'react-router-dom';
/*import './DefaultReactTable.css';*/
import { PopUpProgrammer } from './PopUpProgrammer.js';
import Enumerable from 'linq';
import Swal from 'sweetalert2';



export class ProgrammerOperation extends Component {
    static displayName = ProgrammerOperation.name;

    constructor(props) {
        super(props);
        this.state = {
            programmerInfo: [], loading: true, modal: false, clicked: false, update: '', programmerId: '', Button: 'Delete', maxId: 0,
            fade: false, programmerName: '', description: '', message: 'Loading....', visible: false,success:'done'
        };

        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onRowClick = this.onRowClick.bind(this);
    }

    toggle(e) {
        this.setState({ programmerId: '', programmerName: '', description: '' });
        this.setState({
            modal: !this.state.modal,
            update: false
        });
        console.log('after setState: ', this.state);
    }

    handleSubmit(event) {

        var programmerName = document.getElementById('txtProgrammerName').value;
        var description = document.getElementById('txtDescription').value;
      
        if (this.state.update == false) {
            let programmer = {
                programmerId: this.state.maxId,
                programmerName: programmerName,
                description: description
            };

            this.create(programmer);
        }
        if (this.state.update == true) {
            this.setState({ update: false });
            let programmer =
            {
                programmerId: this.state.programmerId,
                programmerName: programmerName,
                description: description
            };
            this.update(programmer);
        }
        event.preventDefault();
    }

    componentDidMount() {

        this.populateProgrammerType();

    }

    onRowClick = (state, rowInfo, column, instance) => {
        return {

            onClick: e => {
                const btnId = e.target.dataset.id;
                this.setState({ programmerId: rowInfo.row.programmerId, programmerName: rowInfo.row.programmerName, description: rowInfo.row.description });
                if (btnId == "editButtonId") {
                    this.setState({
                        modal: !this.state.modal,
                        update: true
                    });
                    /* this.setState({ teamId: rowInfo.row.teamId, teamValue: rowInfo.row.teamName, descriptionValue: rowInfo.row.description, memberValue: rowInfo.row.teamMembers });*/
                }
                else if (btnId == "deleteButtonId") {
                    let programmer =
                    {
                        programmerId: rowInfo.row.programmerId,
                        programmerName: rowInfo.row.programmerName,
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
                            this.delete(programmer);
                        }
                    })

                }
            }
        }
    }

    render() {

        return (
            <div><br></br>
                <h2 id="tabelLabel" >Manage Programmer</h2><br></br>
                <div>
                    <Button color='info' onClick={this.toggle}>Add Programmer</Button>
                    <PopUpProgrammer data={this.state} toggle={this.toggle} handleSubmit={this.handleSubmit} />
                </div><br></br>
                <p><em>{this.state.message}</em></p>
                <br></br>
                <div>
                    <ReactTable
                        getTdProps={this.onRowClick}
                        expandedRows={true}
                        data={this.state.programmerInfo}
                        columns={[
                            {
                                columns: [
                                    {
                                        Header: () => <strong>Programmer Id</strong>,
                                        accessor: 'programmerId',
                                    },
                                    {
                                        Header: () => <strong>Programmer Name</strong>,
                                        accessor: 'programmerName',
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
 
    async populateProgrammerType() {
        const response = await fetch('api/Programmer');
        const data = await response.json();
        if (data.length != 0) {
            const programmerId = Enumerable.from(data)
                .max(s => s.programmerId);
            this.setState({ programmerInfo: data, message: '', update: false, maxId: programmerId + 1 });
        }
        else
            this.setState({ programmerInfo: data, message: '', maxId: 0, update: false });
    }

    async create(programmer) {
        const response = await fetch('api/Programmer/Create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                programmer
            )
        })
        if (response.ok) {
            this.sweetAlert()
        }
    }
    async update(programmer) {
        const response = await fetch('/api/Programmer/Update', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                programmer
            )

        })
        if (response.ok) {
            this.sweetAlert()
        }
    }
    async delete(programmer) {
        const response = await fetch('/api/Programmer/Delete', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                programmer
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

