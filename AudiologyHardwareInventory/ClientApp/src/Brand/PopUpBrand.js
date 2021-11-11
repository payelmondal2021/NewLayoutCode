import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



export class PopUpBrand extends Component {
    static displayName = PopUpBrand.name;
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.props.data.modal} fade={this.props.data.fade} toggle={this.props.toggle}>
                    <ModalHeader style={{ background: 'Highlight', color: 'white' }} toggle={this.props.toggle} >
                        <div >Brand Details</div>
                    </ModalHeader>
                    <form onSubmit={this.props.handleSubmit}>
                        <ModalBody>
                            <div >
                                
                                <label for="form7" class="pb-2">Brand Name</label><br></br>
                                <textarea required id="txtBrandName" defaultValue={this.props.data.brandName} placeholder="Please Enter BrandName" rows="2" cols="60" />
                                <label for="form7" class="pb-2">Logo Url</label><br></br>
                                <textarea required id="txtLogoUrl" defaultValue={this.props.data.logoUrl} placeholder="Please Enter LogoUrl" rows="2" cols="60" />
                                <label for="form7" class="pb-2">Brand Type</label><br></br>
                                <textarea required id="txtBrandType" defaultValue={this.props.data.brandType} placeholder="Please Enter BrandType" rows="2" cols="60" />
                                <label for="form7" class="pb-2">Description</label><br></br>
                                <textarea required id="txtDescription" defaultValue={this.props.data.description} placeholder="Please Enter Description" rows="2" cols="60" />
                            </div>
                        </ModalBody>
                        <ModalFooter >
                            <Button type="submit" value="Submit">Submit</Button>{'  '}
                            <Button onClick={this.props.toggle}>Cancel</Button>
                        </ModalFooter>
                    </form>
                </Modal>

            </div>
        );
    }
}
