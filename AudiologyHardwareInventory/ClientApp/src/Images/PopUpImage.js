import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
/*import './DefaultReactTable.css';*/


export class PopUpImage extends Component {
    static displayName = PopUpImage.name;
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: '',
            hardwareTypeInfo:[]
        };
    }

    render() {
        let hardwareList = this.props.data.hardwareTypeInfo.length > 0
            && this.props.data.hardwareTypeInfo.map((item, i) => {
                return (
                    <option key={i}  value={item.hardwareTypeId}>{item.hardwareName}</option>
                )
            }, this);
        return (
            <div>
                <Modal isOpen={this.props.data.modal} fade={this.props.data.fade} toggle={this.props.toggle}>
                    <ModalHeader style={{ background: 'Highlight', color: 'white' }} toggle={this.props.toggle} >
                        <div >Image Details</div>
                    </ModalHeader>
                    <form onSubmit={this.props.handleSubmit}>
                        <ModalBody>
                            <div >                               
                                <label for="form7" class="pb-2">Image Url</label><br></br>
                                <textarea required id="txtImageUrl" defaultValue={this.props.data.imageUrl} placeholder="Please Enter Image Url" rows="2" cols="60" />
                                <label for="form7" class="pb-2">ID</label><br></br>
                                <textarea required id="txtId" defaultValue={this.props.data.id} placeholder="Please Enter Id" rows="2" cols="60" />
                                <div class="dropdown">
                                    <label for="form7" class="pb-2">Select HardwareType</label><br></br>
                                    <select id="hardwareTypeId">
                                        {hardwareList}
                                    </select>
                                </div>                      
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
