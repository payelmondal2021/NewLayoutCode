import React, { Component } from 'react';
import ReactTable from 'react-table-6'
import REACTDOM from "react-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
/*import './DefaultReactTable.css';*/
import { PopUpHardwareType } from './PopUpHardwareType.js';
import Enumerable from 'linq';
import Swal from 'sweetalert2';

export class HardwareTypeOperation extends Component {
    static displayName = HardwareTypeOperation.name;

    constructor(props) {
        super(props);
        this.state = {
            hardwareTypeInfo: [], sportsData: ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'],
            loading: true, modal: false, clicked: false, update: '', hardwareTypeId: '', Button: 'Delete', maxHardwareTypeId: 0,
            fade: false, hardwareName: '', description:'', message: 'Loading....', visible: false
        };

        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggle(e) {
        this.setState({ hardwareTypeId: '', hardwareName: '', description: '' });
        this.setState({
            modal: !this.state.modal,
            update: false
        });
        console.log('after setState: ', this.state);
    }

    handleSubmit(event) {

        var hardwareName = document.getElementById('txtHardwareName').value;
        var description = document.getElementById('txtDescription').value;
        /*var a = document.getElementById("id").value;*/
        if (this.state.update == false) {
            let hardwareType = {
                HardwareTypeId: this.state.maxHardwareTypeId,
                HardwareName: hardwareName,
                Description: description
            };

            this.create(hardwareType);
        }
        if (this.state.update == true) {
            this.setState({ update: false });
            let hardwareType =
            {
                HardwareTypeId: this.state.hardwareTypeId,
                HardwareName: hardwareName,
                Description: description
            };
            this.update(hardwareType);
        }
        event.preventDefault();
    }

    componentDidMount() {
        this.populateHardwareTypeData();
    }

    onRowClick = (state, rowInfo, column, instance) => {
        return {

            onClick: e => {
                const btnId = e.target.dataset.id;
                this.setState({ hardwareTypeId: rowInfo.row.hardwareTypeId, hardwareName: rowInfo.row.hardwareName, description: rowInfo.row.description });
                if (btnId == "editButtonId") {
                    this.setState({
                        modal: !this.state.modal,
                        update: true
                    });
                    /* this.setState({ teamId: rowInfo.row.teamId, teamValue: rowInfo.row.teamName, descriptionValue: rowInfo.row.description, memberValue: rowInfo.row.teamMembers });*/
                }
                else if (btnId == "deleteButtonId") {
                    let hardwareType =
                    {
                        HardwareTypeId: rowInfo.row.hardwareTypeId,
                        HardwareName: rowInfo.row.hardwareName,
                        Description: rowInfo.row.description,

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
                            this.delete(hardwareType);
                        }
                    })

                }           
            }
        }
    }

    render() {

        return (
            <div><br></br>
                <h2 id="tabelLabel" >Manage HardwareType</h2><br></br>
                <div>
                    <Button color='info' onClick={this.toggle}>Add HardwareType</Button>
                    <PopUpHardwareType data={this.state} toggle={this.toggle} handleSubmit={this.handleSubmit} />
                </div><br></br>
                <p><em>{this.state.message}</em></p>
                <br></br>
                <div>
                    <ReactTable
                        getTdProps={this.onRowClick}
                        expandedRows={true}
                        data={this.state.hardwareTypeInfo}
                        columns={[
                            {
                                columns: [
                                    {
                                        Header: () => <strong>HardwareType Id</strong>,
                                        accessor: 'hardwareTypeId',
                                    },
                                    {
                                        Header: () => <strong>Hardware Name</strong>,
                                        accessor: 'hardwareName',
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

    async populateHardwareTypeData() {
        const response = await fetch('api/HardwareType');
        const data = await response.json();
        if (data.length != 0) {
            const hardwareTypeId = Enumerable.from(data)
                .max(s => s.hardwareTypeId);
            this.setState({ hardwareTypeInfo: data, message: '', update: false, maxHardwareTypeId: hardwareTypeId + 1 });
        }
        else
            this.setState({ hardwareTypeInfo: data, message: '', maxHardwareTypeId: 0, update: false });
    }
    async create(hardwareType) {
        const response = await fetch('api/HardwareType/Create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                hardwareType
            )
        })
        if (response.ok) {
            this.sweetAlert()
        }
    }
    async update(hardwareType) {
        const response = await fetch('/api/HardwareType/Update', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                hardwareType
            )

        })
        if (response.ok) {
            this.sweetAlert()
        }
    }
    async delete(hardwareType) {
        const response = await fetch('/api/HardwareType/Delete', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                hardwareType
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
