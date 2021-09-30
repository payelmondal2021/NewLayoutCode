import React, { Component } from 'react';
import ReactTable from 'react-table-6'
import REACTDOM from "react-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './DefaultReactTable.css';
import { PopUpMobile } from './PopUpMobile.js';
import Enumerable from 'linq';
import Swal from 'sweetalert2';


export class MobileOperation extends Component {
    static displayName = MobileOperation.name;
    
    constructor(props) {
        super(props);
        this.state = {
            chipsetInfo: [],brandInfo:[],teamInfo:[],mobileInfo:[],
            loading: true, modal: false, clicked: false, update: '', id: '', Button: 'Delete', maxMobileId: 0,
            fade: false, mobileDeviceName: '', brandId: '', osVersion: '', chipSetId: '', processorArchitecture: '', displayInInches: '', supportedProtocol: '', teamId: '', team: '', resolution: '', status: '', description: '', serialNumber:'', message: 'Loading....', visible: false
        };

        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    toggle(e) {
        this.setState({ id: '', mobileDeviceName: '', brandId: '',osVersion: '', chipSetId: '', processorArchitecture: '', displayInInches: '', supportedProtocol: '', teamId: '', team: '', resolution: '', status: '', description: '', serialNumber: ''});
        this.setState({
            modal: !this.state.modal,
            update: false
        });
        console.log('after setState: ', this.state);
    }

    handleSubmit(event) {

        var mobileDeviceName = document.getElementById('txtMobileDeviceName').value;
        var osVersion = document.getElementById('txtOSVersion').value;
       /* var status = document.getElementById('txtStatus').value;*/
        var processorArchitecture = document.getElementById('txtProcessorArchitecture').value;
        var displayInInches = document.getElementById('txtDisplayInInches').value;
        /* var supportedProtocol = document.getElementById('txtSupportedProtocol').value;*/
        var supportedProtocol = 1;
        var resolution = document.getElementById('txtResolution').value;
        var status = document.getElementById('txtStatus').value;
        var description = document.getElementById('txtDescription').value;
        var serialNumber = document.getElementById('txtSerialNumber').value;
        var brandId = 1;
        var teamId = 1;
        var chipsetId = 1;
     /*   var chipsetId = Number(document.getElementById('chipsetId').value);*/

        if (this.state.update == false) {
            let mobile = {
                Id: this.state.maxMobileId,
                MobileDeviceName: mobileDeviceName,
                BrandId: brandId,
                OSVersion: osVersion,
                ChipSetId: chipsetId,
                ProcessorArchitecture: processorArchitecture,
                DisplayInInches: displayInInches,
                SupportedProtocol: supportedProtocol,
                TeamId: teamId,
                Resolution: resolution,                                           
                Status: status,
                Description: description,
                SerialNumber: serialNumber



            };

            this.create(mobile);
        }
        if (this.state.update == true) {
            this.setState({ update: false });
            let mobile =
            {
                id: this.state.id,
                mobileDeviceName: mobileDeviceName,
                oSVersion: osVersion,
                processorArchitecture: processorArchitecture,
                displayInInches: displayInInches,
                supportedProtocol: supportedProtocol,
                resolution: resolution,
                TeamId: teamId,
                chipsetId: chipsetId,
                BrandId: brandId,
                status: status,
                description: description,
                serialNumber: serialNumber
            };
            this.update(mobile);
        }
        event.preventDefault();
    }

    componentDidMount() {
        this.populateMobileData();
        this.getBrandData();
        this.getChipsetData();
        this.getTeamData();
    }

    onRowClick = (state, rowInfo, column, instance) => {
        return {

            onClick: e => {
                const btnId = e.target.dataset.id;
                this.setState({ id: rowInfo.row.id, mobileDeviceName: rowInfo.row.mobileDeviceName, osVersion: rowInfo.row.osVersion, processorArchitecture: rowInfo.row.processorArchitecture, displayInInches: rowInfo.row.displayInInches, supportedProtocol: rowInfo.row.supportedProtocol, resolution: rowInfo.row.resolution, teamId: rowInfo.row.teamId, chipsetId: rowInfo.row.chipsetId, brandId: rowInfo.row.brandId, status: rowInfo.row.status, description: rowInfo.row.description, serialNumber: rowInfo.row.serialNumber });
                if (btnId == "editButtonId") {
                    this.setState({
                        modal: !this.state.modal,
                        update: true
                    });
                    /* this.setState({ teamId: rowInfo.row.teamId, teamValue: rowInfo.row.teamName, descriptionValue: rowInfo.row.description, memberValue: rowInfo.row.teamMembers });*/
                }
                else if (btnId == "deleteButtonId") {
                    let mobile =
                    {
                        id: rowInfo.row.id,
                        mobileDeviceName: rowInfo.row.mobileDeviceName,
                        oSVersion: rowInfo.row.osVersion,
                        processorArchitecture: rowInfo.row.processorArchitecture,
                        displayInInches: rowInfo.row.displayInInches,
                        supportedProtocol: rowInfo.row.supportedProtocol,
                        resolution: rowInfo.row.resolution,
                        teamId: rowInfo.row.teamId,
                        chipsetId: rowInfo.row.chipsetId,
                        brandId: rowInfo.row.brandId,
                        status: rowInfo.row.status,
                        description: rowInfo.row.description,
                        serialNumber: rowInfo.row.serialNumber                                             
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
                            this.delete(mobile);
                        }
                    })

                }           
            }
        }
    }

    render() {

        return (
            <div><br></br>
                <h2 id="tabelLabel" >Manage Mobile</h2><br></br>
                <div>
                    <Button color='info' onClick={this.toggle}>Add Mobile</Button>
                    <PopUpMobile data={this.state} toggle={this.toggle} handleSubmit={this.handleSubmit} />
                </div><br></br>
                <p><em>{this.state.message}</em></p>
                <br></br>
                <div>
                    <ReactTable
                        getTdProps={this.onRowClick}
                        expandedRows={true}
                        data={this.state.mobileInfo}
                        columns={[
                            {
                                columns: [
                                    {
                                        Header: () => <strong>Mobile Id</strong>,
                                        accessor: 'id',
                                    },
                                    {
                                        Header: () => <strong>MobileDevice Name</strong>,
                                        accessor: 'mobileDeviceName',
                                    },
                                    {
                                        Header: () => <strong>OS Version</strong>,
                                        accessor: 'osVersion',
                                    },
                                    {
                                        Header: () => <strong>Processor Architecture</strong>,
                                        accessor: 'processorArchitecture',
                                    },
                                    {
                                        Header: () => <strong>Display In Inches</strong>,
                                        accessor: 'displayInInches',
                                    },
                                    {
                                        Header: () => <strong>Supported Protocol</strong>,
                                        accessor: 'supportedProtocol',
                                    },
                                    {
                                        Header: () => <strong>Resolution</strong>,
                                        accessor: 'resolution',
                                    },
                                    {
                                        Header: () => <strong>Team Id</strong>,
                                        accessor: 'teamId',
                                    },
                                    {
                                        Header: () => <strong>Chipset Id</strong>,
                                        accessor: 'chipSetId',
                                        
                                    },
                                    {
                                        Header: () => <strong>Brand Id</strong>,
                                        accessor: 'brandId',
                                    },
                                    {
                                        Header: () => <strong>Status</strong>,
                                        accessor: 'status',
                                    },
                                    {
                                        Header: () => <strong>Description</strong>,
                                        accessor: 'description',
                                    },
                                    {
                                        Header: () => <strong>SerialNumber</strong>,
                                        accessor: 'serialNumber',
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
    
    async populateMobileData() {
        const response = await fetch('api/Mobile');
        const data = await response.json();
        if (data.length != 0) {
            const mobileId = Enumerable.from(data)
                .max(s => s.id);
            this.setState({ mobileInfo: data, message: '', update: false, maxMobileId: mobileId + 1 });
        }
        else
            this.setState({ mobileInfo: data, message: '', maxImageId: 0, update: false });
    }
    async getBrandData() {
        const response = await fetch('api/Brand');
        const data = await response.json();
        this.setState({ brandInfo: data});
    }

    async getTeamData() {
        const response = await fetch('api/Team');
        const data = await response.json();
        this.setState({ teamInfo: data });
    }

    async getChipsetData() {
        const response = await fetch('api/ChipSet');
        const data = await response.json();
        this.setState({ chipsetInfo: data });
    }
    async create(mobile) {
        const response = await fetch('api/Mobile/Create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                mobile
            )
        })
        if (response.ok) {
            this.sweetAlert()
        }
    }
    async update(mobile) {
        const response = await fetch('/api/Mobile/Update', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                mobile
            )

        })
        if (response.ok) {
            this.sweetAlert()
        }
    }
    async delete(mobile) {
        //Not deleteing from database makinf status as disabled
        const response = await fetch('/api/Mobile/Delete', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                mobile
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
