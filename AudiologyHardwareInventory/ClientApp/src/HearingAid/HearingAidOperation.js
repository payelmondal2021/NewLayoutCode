import React, { Component } from 'react';
import ReactTable from 'react-table-6'
import REACTDOM from "react-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
/*import './DefaultReactTable.css';*/
import { PopUpHearingAid } from './PopUpHearingAid.js';
import Enumerable from 'linq';
import Swal from 'sweetalert2';

export class HearingAidOperation extends Component {
    static displayName = HearingAidOperation.name;

    constructor(props) {
        super(props);
        this.state = {
            programmerInfo: [],familyTypeInfo: [],Info: [],hearingAidInfo: [],brandInfo:[],teamInfo:[],platformInfo:[],
            loading: true, modal: false, clicked: false, update: '', hearingAidId: '', Button: 'Delete', maxHearingAidId: 0,
            fade: false, hearingAidName: '', addedDate: '', updatedDate: '', brandId:'',teamId:'',platformId:'', deletedDate:'', serialNumber: '', description: '', status: '', firmwareVersion: '', side:'', message: 'Loading....', visible: false
        };

        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    toggle(e) {
        this.setState({ hearingAidId: '', hearingAidName: '', addedDate: '', updatedDate: '', brandId: '', familyTypeId: '', programmerId: '', teamId: '', platformId: '', deletedDate: '', serialNumber: '', description: '', status: '', firmwareVersion: '', side: ''});
        this.setState({
            modal: !this.state.modal,
            update: false
        });
        console.log('after setState: ', this.state);
    }

    handleSubmit(event) {

        var hearingAidName = document.getElementById('txtHearingAidName').value;
        var serialNumber = document.getElementById('txtSerialNumber').value;
       /* var status = document.getElementById('txtStatus').value;*/
        var description = document.getElementById('txtDescription').value;
        var firmwareVersion = document.getElementById('txtFirmwareVersion').value;
        var side = document.getElementById('txtSide').value;
        var teamId = Number(document.getElementById('teamId').value);
        var platformId = Number(document.getElementById('platformId').value);
        var brandId = Number(document.getElementById('brandId').value);
        var programmerId = Number(document.getElementById('programmerId').value);
        var familyTypeId = Number(document.getElementById('familyId').value);

        if (this.state.update == false) {
            let hearingAid = {
                Id: this.state.maxHearingAidId,
                HearingAidName: hearingAidName,
                SerialNumber: serialNumber,
                status: "Enabled",
                Description: description,
                FirmwareVersion: firmwareVersion,
                Side: side,
                TeamId: teamId,
                PlatformId: platformId,
                BrandId: brandId,
                programmerId: programmerId,
                familyTypeId: familyTypeId,
                AddedDate: new Date().toLocaleString(),
                UpdatedDate: "",
                DeletedDate: ""
            };

            this.create(hearingAid);
        }
        if (this.state.update == true) {
            this.setState({ update: false });
            let hearingAid =
            {
                Id: this.state.hearingAidId,
                HearingAidName: hearingAidName,
                SerialNumber: serialNumber,
                status: "Enabled",
                Description: description,
                FirmwareVersion: firmwareVersion,
                Side: side,
                TeamId: teamId,
                PlatformId: platformId,
                BrandId: brandId,
                programmerId: programmerId,
                familyTypeId: familyTypeId,
                AddedDate: this.state.addedDate,
                UpdatedDate: new Date().toLocaleString(),
                DeletedDate: this.state.deletedDate
            };
            this.update(hearingAid);
        }
        event.preventDefault();
    }

    componentDidMount() {
        this.populateHearingAidData();
        this.getBrandData();
        this.getPlatformData();
        this.getTeamData();
        this.getHearingAidStatus();
        this.getFamilyType();
        this.getProgrammer();
    }

    onRowClick = (state, rowInfo, column, instance) => {
        return {

            onClick: e => {
                const btnId = e.target.dataset.id;
                this.setState({ hearingAidId: rowInfo.row.id, hearingAidName: rowInfo.row.hearingAidName, serialNumber: rowInfo.row.serialNumber, status: rowInfo.row.status, description: rowInfo.row.description, firmwareVersion: rowInfo.row.firmwareVersion, side: rowInfo.row.side, teamId: rowInfo.row.teamId, platformId: rowInfo.row.platformId, brandId: rowInfo.row.brandId, familyTypeId: rowInfo.row.familyTypeId, programmerId: rowInfo.row.programmerId, serialNumber: rowInfo.row.serialNumber, serialNumber: rowInfo.row.serialNumber, serialNumber: rowInfo.row.serialNumber, addedDate: rowInfo.row.addedDate, updatedDate: rowInfo.row.updatedDate, deletedDate: rowInfo.row.deletedDate });
                if (btnId == "editButtonId") {
                    this.setState({
                        modal: !this.state.modal,
                        update: true
                    });
                    /* this.setState({ teamId: rowInfo.row.teamId, teamValue: rowInfo.row.teamName, descriptionValue: rowInfo.row.description, memberValue: rowInfo.row.teamMembers });*/
                }
                else if (btnId == "deleteButtonId") {
                    let hearingAid =
                    {
                        Id: rowInfo.row.id,
                        hearingAidName: rowInfo.row.hearingAidName,
                        serialNumber: rowInfo.row.serialNumber,
                        /*status: rowInfo.row.status,*/
                        status: "Disabled",
                        description: rowInfo.row.description,
                        firmwareVersion: rowInfo.row.firmwareVersion,
                        side: rowInfo.row.side,
                        teamId: rowInfo.row.teamId,
                        platformId: rowInfo.row.platformId,
                        brandId: rowInfo.row.brandId,
                        familyTypeId: rowInfo.row.familyTypeId,
                        programmerId: rowInfo.row.programmerId,
                        serialNumber: rowInfo.row.serialNumber,
                        serialNumber: rowInfo.row.serialNumber,
                        serialNumber: rowInfo.row.serialNumber,
                        addedDate: rowInfo.row.addedDate,
                        updatedDate: rowInfo.row.updatedDate,
                        deletedDate: rowInfo.row.deletedDate

                        
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
                            this.delete(hearingAid);
                        }
                    })

                }           
            }
        }
    }

    render() {

        return (
            <div><br></br>
                <h2 id="tabelLabel" >Manage HearingAid</h2><br></br>
                <div>
                    <Button color='info' onClick={this.toggle}>Add HearingAid</Button>
                    <PopUpHearingAid data={this.state} toggle={this.toggle} handleSubmit={this.handleSubmit} />
                </div><br></br>
                <p><em>{this.state.message}</em></p>
                <br></br>
                <div>
                    <ReactTable
                        getTdProps={this.onRowClick}
                        expandedRows={true}
                        data={this.state.hearingAidInfo}
                        columns={[
                            {
                                columns: [
                                    {
                                        Header: () => <strong>HearingAid Id</strong>,
                                        accessor: 'id',
                                    },
                                    {
                                        Header: () => <strong>HearingAid Name</strong>,
                                        accessor: 'hearingAidName',
                                    },
                                    {
                                        Header: () => <strong>SerialNumber</strong>,
                                        accessor: 'serialNumber',
                                    },
                                    {
                                        Header: () => <strong>Description</strong>,
                                        accessor: 'description',
                                    },
                                    {
                                        /*Header: () => <strong>AddedDate</strong>,*/
                                        accessor: 'addedDate',
                                        show: false
                                    },
                                    {
                                       /* Header: () => <strong>Updated Date</strong>,*/
                                        accessor: 'updatedDate',
                                        show: false
                                    },
                                    {
                                        /*Header: () => <strong>Deleted Date</strong>,*/
                                        accessor: 'deletedDate',
                                        show: false
                                    },
                                    {
                                        Header: () => <strong>Status</strong>,
                                        accessor: 'status',
                                    },
                                    {
                                        Header: () => <strong>Brand Id</strong>,
                                        accessor: 'brandId',
                                        
                                    },
                                    {
                                        Header: () => <strong>FirmwareVersion</strong>,
                                        accessor: 'firmwareVersion',
                                    },
                                    {
                                        Header: () => <strong>Side</strong>,
                                        accessor: 'side',
                                    },
                                    {
                                        Header: () => <strong>Team Id</strong>,
                                        accessor: 'teamId',
                                    },
                                    {
                                        Header: () => <strong>Platform Id</strong>,
                                        accessor: 'platformId',
                                    },
                                    {
                                        Header: () => <strong>FamilyType Id</strong>,
                                        accessor: 'familyTypeId',
                                    },
                                    {
                                        Header: () => <strong>Programmer Id</strong>,
                                        accessor: 'programmerId',
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

    async populateHearingAidData() {
        const response = await fetch('api/HearingAid/GetHeadingAidStatus');
        const data = await response.json();
        this.setState({ hearingAidInfo: data, message: '', update: false });
    }
    async getHearingAidStatus() {
        const response = await fetch('api/HearingAid');
        const data = await response.json();
        if (data.length != 0) {
            const hearingAidId = Enumerable.from(data)
                .max(s => s.id);
            this.setState({ maxHearingAidId: hearingAidId + 1 });
        }
        else
            this.setState({ hearingAidInfo: data });
    }
    async getBrandData() {
        const response = await fetch('api/Brand');
        const data = await response.json();
        this.setState({ brandInfo: data});
    }

    async getFamilyType() {
        const response = await fetch('api/FamilyType');
        const data = await response.json();
        this.setState({ familyTypeInfo: data });
    }
    async getProgrammer() {
        const response = await fetch('api/Programmer');
        const data = await response.json();
        this.setState({ programmerInfo: data });
    }

    async getTeamData() {
        const response = await fetch('api/Team');
        const data = await response.json();
        this.setState({ teamInfo: data });
    }

    async getPlatformData() {
        const response = await fetch('api/Platform');
        const data = await response.json();
        this.setState({ platformInfo: data });
    }
    async create(hearingAid) {
        const response = await fetch('api/HearingAid/Create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                hearingAid
            )
        })
        if (response.ok) {
            this.sweetAlert()
        }
    }
    async update(hearingAid) {
        const response = await fetch('/api/HearingAid/Update', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                hearingAid
            )

        })
        if (response.ok) {
            this.sweetAlert()
        }
    }
    async delete(hearingAid) {
        //Not deleteing from database makinf status as disabled
        const response = await fetch('/api/HearingAid/Update', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                hearingAid
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
