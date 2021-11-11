import React, { Component } from 'react';
import ReactTable from 'react-table-6'
import REACTDOM from "react-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
/*import './DefaultReactTable.css';*/
import { PopUpPlatform } from './PopUpPlatform.js';
import Enumerable from 'linq';
import Swal from 'sweetalert2';

export class PlatformOperation extends Component {
    static displayName = PlatformOperation.name;

    constructor(props) {
        super(props);
        this.state = {
            //data: {
            //    value1: "",
            //    value2: "",
            //    value3: ""
            //},
            platformInfo: [], loading: true, modal: false, clicked: false, update: '', platformId: '', Button: 'Delete', maxPlatformId: 0,
            fade: false, platformName: '', description: '', message: 'Loading....', visible: false, alias: false
        };

        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggle(e) {
        this.setState({ platformId: '', platformName: '', description: '', alias:'' });
        this.setState({
            modal: !this.state.modal,
            update: false
        });
        console.log('after setState: ', this.state);
    }

    handleSubmit(event) {

        if (this.state.update == false) {
            var platformName = document.getElementById('txtPlatformName').value;
            var description = document.getElementById('txtDescription').value;
            var alias = document.getElementById('txtAlias').value;

            let platform = {
                PlatformId: this.state.maxPlatformId,
                PlatformName: platformName,
                Description: description,
                Alias: alias
            };

            this.create(platform);
        }
        if (this.state.update == true) {
            this.setState({ update: false });
            let platform =
            {
                platformId: this.state.platformId,
                platformName: document.getElementById('txtPlatformName').value,
                description: document.getElementById('txtDescription').value,
                alias: document.getElementById('txtAlias').value
            };
            this.update(platform);
        }
        event.preventDefault();
    }

    componentDidMount() {
        this.populatePlatformData();

    }

    onRowClick = (state, rowInfo, column, instance) => {
        return {

            onClick: e => {
                const btnId = e.target.dataset.id;
                this.setState({ platformId: rowInfo.row.platformId, alias: rowInfo.row.alias, platformName: rowInfo.row.platformName, description: rowInfo.row.description });
                if (btnId == "editButtonId") {
                    this.setState({
                        modal: !this.state.modal,
                        update: true
                    });
                    /* this.setState({ teamId: rowInfo.row.teamId, teamValue: rowInfo.row.teamName, descriptionValue: rowInfo.row.description, memberValue: rowInfo.row.teamMembers });*/
                }
                else if (btnId == "deleteButtonId") {
                    let platform =
                    {
                        PlatformId: rowInfo.row.platformId,
                        PlatformName: rowInfo.row.platformName,
                        Description: rowInfo.row.description,
                        Alias: rowInfo.row.alias
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
                            this.delete(platform);
                        }
                    })

                }           
            }
        }
    }

    static renderForecastsTable(teamInfo) {
        return (
            <div>

            </div>
        );
    }

    render() {

        //let contents = this.state.loading
        //    ? <p><em>Loading...</em></p>
        //    : FetchData.renderForecastsTable(this.state.teamInfo);

        return (
            <div><br></br>
                <h2 id="tabelLabel" >Manage PlatForm</h2><br></br>
                <div>
                    <Button color='info' onClick={this.toggle}>Add Platform</Button>
                    <PopUpPlatform data={this.state} toggle={this.toggle} handleSubmit={this.handleSubmit} />
                </div><br></br>
                <p><em>{this.state.message}</em></p>
                <br></br>
                <div>
                    <ReactTable
                        getTdProps={this.onRowClick}
                        expandedRows={true}
                        data={this.state.platformInfo}
                        columns={[
                            {
                                columns: [
                                    {
                                        Header: () => <strong>Platform Id</strong>,
                                        accessor: 'platformId',
                                    },
                                    {
                                        Header: () => <strong>Platform Name</strong>,
                                        accessor: 'platformName',
                                    },
                                    {
                                        Header: () => <strong>Description</strong>,
                                        accessor: 'description',
                                    },
                                    {
                                        Header: () => <strong>Alias</strong>,
                                        accessor: 'alias',
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

    async populatePlatformData() {
        const response = await fetch('api/Platform');
        const data = await response.json();
        if (data.length != 0) {
            const platformId = Enumerable.from(data)
                .max(s => s.platformId);
            this.setState({ platformInfo: data, message: '', update: false, maxPlatformIdId: platformId + 1 });
        }
        else
            this.setState({ platformInfo: data, message: '', maxplatformId: 0, update: false });
    }
    async create(platform) {
        const response = await fetch('api/Platform/Create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                platform
            )
        })
        if (response.ok) {
            this.sweetAlert()
        }
    }
    async update(platform) {
        const response = await fetch('/api/Platform/Update', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                platform
            )

        })
        if (response.ok) {
            this.sweetAlert()
        }
    }
    async delete(platform) {
        const response = await fetch('/api/Platform/Delete', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                platform
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
