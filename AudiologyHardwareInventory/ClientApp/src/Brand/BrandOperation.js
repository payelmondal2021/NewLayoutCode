import React, { Component } from 'react';
import ReactTable from 'react-table-6'
import REACTDOM from "react-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
/*import './DefaultReactTable.css';*/
import { PopUpBrand } from './PopUpBrand.js';
import Enumerable from 'linq';
import Swal from 'sweetalert2';
import { MobileOperation } from '../Mobile/MobileOperation';

export class BrandOperation extends Component {
    static displayName = BrandOperation.name;

    constructor(props) {
        super(props);
        this.state = {
            brandInfo: [], loading: true, modal: false, clicked: false, update: '', brandId: '', Button: 'Delete', maxBrandId: 0,
            fade: false, brandName: '', logoUrl:'', description:'', brandType:'', message: 'Loading....', visible: false
        };

        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggle(e) {
        this.setState({ brandId: '', brandName: '', description: '', brandType:'', logoUrl:'' });
        this.setState({
            modal: !this.state.modal,
            update: false
        });
        console.log('after setState: ', this.state);
    }

    handleSubmit(event) {

        var brandName = document.getElementById('txtBrandName').value;
        var logoUrl = document.getElementById('txtLogoUrl').value;
        var brandType = document.getElementById('txtBrandType').value;
        var description = document.getElementById('txtDescription').value;

        if (this.state.update == false) {
            let brand = {
                BrandId: this.state.maxBrandId,
                BrandName: brandName,
                LogoUrl: logoUrl,
                BrandType: brandType,
                Description: description
            };

            this.create(brand);
        }
        if (this.state.update == true) {
            this.setState({ update: false });
            let brand =
            {
                BrandId: this.state.brandId,
                BrandName: brandName,
                LogoUrl: logoUrl,
                BrandType: brandType,
                Description: description
            };
            this.update(brand);
        }
        event.preventDefault();
    }

    componentDidMount() {
        this.populateBrandData();
    }

    onRowClick = (state, rowInfo, column, instance) => {
        return {

            onClick: e => {
                const btnId = e.target.dataset.id;
                this.setState({ brandId: rowInfo.row.brandId, brandName: rowInfo.row.brandName, logoUrl: rowInfo.row.logoUrl, brandType: rowInfo.row.brandType, description: rowInfo.row.description });
                if (btnId == "editButtonId") {
                    this.setState({
                        modal: !this.state.modal,
                        update: true
                    });
                    /* this.setState({ teamId: rowInfo.row.teamId, teamValue: rowInfo.row.teamName, descriptionValue: rowInfo.row.description, memberValue: rowInfo.row.teamMembers });*/
                }
                else if (btnId == "deleteButtonId") {
                    let brand =
                    {
                        BrandId: rowInfo.row.brandId,
                        BrandName: rowInfo.row.brandName,
                        LogoUrl: rowInfo.row.logoUrl,
                        BrandType: rowInfo.row.brandType,
                        Description: rowInfo.row.description

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
                            this.delete(brand);
                        }
                    })

                }           
            }
        }
    }

    render() {

        return (
            <div><br></br>
                <h2 id="tabelLabel" >Manage Brand</h2><br></br>
                <div>
                    <Button color='info' onClick={this.toggle}>Add Brand</Button>
                    <PopUpBrand data={this.state} toggle={this.toggle} handleSubmit={this.handleSubmit} />
                </div><br></br>
                <p><em>{this.state.message}</em></p>
                <br></br>
                <div>
                    <ReactTable
                        getTdProps={this.onRowClick}
                        expandedRows={true}
                        data={this.state.brandInfo}
                        columns={[
                            {
                                columns: [
                                    {
                                        Header: () => <strong>Brand Id</strong>,
                                        accessor: 'brandId',
                                    },
                                    {
                                        Header: () => <strong>Brand Name</strong>,
                                        accessor: 'brandName',
                                    },
                                    {
                                        Header: () => <strong>Logo Url</strong>,
                                        accessor: 'logoUrl',
                                    },
                                    {
                                        Header: () => <strong>Description</strong>,
                                        accessor: 'description',
                                    },
                                    {
                                        Header: () => <strong>Brand Type</strong>,
                                        accessor: 'brandType',
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

    async populateBrandData() {
        const response = await fetch('api/Brand');
        const data = await response.json();
        if (data.length != 0) {
            const brandId = Enumerable.from(data)
                .max(s => s.brandId);
            this.setState({ brandInfo: data, message: '', update: false, maxBrandId: brandId + 1 });
        }
        else
            this.setState({ brandInfo: data, message: '', maxBrandId: 0, update: false });
    }
    async create(brand) {
        const response = await fetch('api/Brand/Create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                brand
            )
        })
        if (response.ok) {
            this.sweetAlert()
        }
    }
    async update(brand) {
        const response = await fetch('/api/Brand/Update', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                brand
            )

        })
        if (response.ok) {
            this.sweetAlert()
        }
    }
    async delete(brand) {
        const response = await fetch('/api/Brand/Delete', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                brand
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
