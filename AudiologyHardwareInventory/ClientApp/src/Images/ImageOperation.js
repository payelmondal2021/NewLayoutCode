import React, { Component } from 'react';
import ReactTable from 'react-table-6'
import REACTDOM from "react-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './DefaultReactTable.css';
import { PopUpImage } from './PopUpImage.js';
import Enumerable from 'linq';
import Swal from 'sweetalert2';
import './DropdownList.css';
/*import pic from "../HardwareImage/download.png";*/
import { WebImage } from './WebImage';

export class ImageOperation extends Component {
    static displayName = ImageOperation.name;

    constructor(props) {
        super(props);
        this.state = {
            hardwareTypeInfo: [], imageInfo: [], loading: true, modal: false, clicked: false, update: '', imageUrlId: '', Button: 'Delete', maxImageId: 0,
            fade: false, id: '', hardwareTypeId:'', imageUrl:'', message: 'Loading....', visible: false
        };

        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggle(e) {
        this.setState({ imageUrlId: '', id: '', imageUrl: '', HardwareTypeId:'' });
        this.setState({
            modal: !this.state.modal,
            update: false
        });
        console.log('after setState: ', this.state);
    }

    handleSubmit(event) {

        var imageUrl = document.getElementById('txtImageUrl').value;
        var id = 1;
        var hardwareTypeId = Number(document.getElementById('hardwareTypeId').value);
      /*  var hardwareTypeId = 1;*/

        if (this.state.update == false) {
            let image = {
                ImageUrlId: this.state.maxImageId,
                ImageUrl: imageUrl,
                Id: id,
                HardwareTypeId: hardwareTypeId
            };

            this.create(image);
        }
        if (this.state.update == true) {
            this.setState({ update: false });
            let image =
            {
                ImageUrlId: this.state.imageUrlId,
                ImageUrl: imageUrl,
                Id: id,
                HardwareTypeId: hardwareTypeId
            };
            this.update(image);
        }
        event.preventDefault();
    }

    componentDidMount() {
        this.populateImageData();
        this.getHardwareTypeData();
    }

    onRowClick = (state, rowInfo, column, instance) => {
        return {

            onClick: e => {
                const btnId = e.target.dataset.id;
                this.setState({ imageUrlId: rowInfo.row.imageUrlId, id: rowInfo.row.id, imageUrl: rowInfo.row.imageUrl, hardwareTypeId: rowInfo.row.hardwareTypeId });
                if (btnId == "editButtonId") {
                    this.setState({
                        modal: !this.state.modal,
                        update: true
                    });
                    /* this.setState({ teamId: rowInfo.row.teamId, teamValue: rowInfo.row.teamName, descriptionValue: rowInfo.row.description, memberValue: rowInfo.row.teamMembers });*/
                }
                else if (btnId == "deleteButtonId") {
                    let image =
                    {
                        ImageUrlId: rowInfo.row.imageUrlId,
                        Id: rowInfo.row.id,
                        ImageUrl: rowInfo.row.imageUrl,
                        HardwareTypeId: rowInfo.row.hardwareTypeId,

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
                            this.delete(image);
                        }
                    })

                }           
            }
        }
    }

    render() {

        return (
            <div><br></br>
                <h2 id="tabelLabel" >Manage Image</h2><br></br>
               {/* To import Image*/}
                {/*  <WebImage/>*/}
                <div>
                    <Button color='info' onClick={this.toggle}>Add Image</Button>
                    <PopUpImage data={this.state} toggle={this.toggle} handleSubmit={this.handleSubmit} />
                </div><br></br>
                <p><em>{this.state.message}</em></p>
                <br></br>
                <div>
                    <ReactTable
                        getTdProps={this.onRowClick}
                        expandedRows={true}
                        data={this.state.imageInfo}
                        columns={[
                            {
                                columns: [
                                    {
                                        Header: () => <strong>ImageUrl Id</strong>,
                                        accessor: 'imageUrlId',
                                    },
                                    {
                                        Header: () => <strong>Id</strong>,
                                        accessor: 'id',
                                    },
                                    {
                                        Header: () => <strong>ImageUrl</strong>,
                                        accessor: 'imageUrl',
                                    },
                                    {
                                        Header: () => <strong>HardwareType Id</strong>,
                                        accessor: 'hardwareTypeId',
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

    async populateImageData() {
        const response = await fetch('api/Image');
        const data = await response.json();
        if (data.length != 0) {
            const imageId = Enumerable.from(data)
                .max(s => s.imageUrlId);
            this.setState({ imageInfo: data, message: '', update: false, maxImageId: imageId + 1 });
        }
        else
            this.setState({ imageInfo: data, message: '', maxImageId: 0, update: false });
    }
    async getHardwareTypeData() {
        const response = await fetch('api/HardwareType');
        const data = await response.json();
        this.setState({ hardwareTypeInfo: data });
    }
    async create(image) {
        const response = await fetch('api/Image/Create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                image
            )
        })
        if (response.ok) {
            this.sweetAlert()
        }
    }
    async update(image) {
        const response = await fetch('/api/Image/Update', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                image
            )

        })
        if (response.ok) {
            this.sweetAlert()
        }
    }
    async delete(image) {
        const response = await fetch('/api/Image/Delete', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                image
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
