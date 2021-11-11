import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
/*import './DefaultReactTable.css';*/
import './DropdownList.css';

export class PopUpMobile extends Component {
    static displayName = PopUpMobile.name;
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: ''
        };
    }

    render() {
        let brandList = this.props.data.brandInfo.length > 0
            && this.props.data.brandInfo.map((item, i) => {
                return (
                    <option key={i} value={item.brandId}>{item.brandName}</option>
                )
            }, this);

        let teamList = this.props.data.teamInfo.length > 0
            && this.props.data.teamInfo.map((item, i) => {
                return (
                    <option key={i} value={item.teamId}>{item.teamName}</option>
                )
            }, this);
        
        let chipsetList = this.props.data.chipsetInfo.length > 0
            && this.props.data.chipsetInfo.map((item, i) => {
                return (
                    <option key={i} value={item.chipSetId}>{item.chipSetName}</option>
                )
            }, this);
        return (
            <div>               
                <Modal isOpen={this.props.data.modal} fade={this.props.data.fade} toggle={this.props.toggle}>
                    <ModalHeader style={{ background: 'Highlight', color: 'white' }} toggle={this.props.toggle} >
                        <div >Mobile Details</div>
                    </ModalHeader>
                    <form onSubmit={this.props.handleSubmit}>
                        <ModalBody>
                            <div >                               
                                <label for="form7" class="pb-2">MobileDevice Name</label><br></br>
                                <textarea required id="txtMobileDeviceName" defaultValue={this.props.data.mobileDeviceName} placeholder="Please Enter Mobile Device Name" rows="2" cols="60" />
                                <label for="form7" class="pb-2">OS Version</label><br></br>
                                <textarea required id="txtOSVersion" defaultValue={this.props.data.osVersion} placeholder="Please Enter OS Version" rows="2" cols="60" />
                                <label for="form7" class="pb-2">Processor Architecture</label><br></br>
                                <textarea required id="txtProcessorArchitecture" defaultValue={this.props.data.processorArchitecture} placeholder="Please Enter Processor Architecture" rows="2" cols="60" />
                                {/*<label for="form7" class="pb-2">Status</label><br></br>*/}
                                {/*<textarea required id="txtStatus" defaultValue={this.props.data.status} placeholder="Please Enter Status" rows="2" cols="60" />*/}
                                <label for="form7" class="pb-2">Display In Inches</label><br></br>
                                <textarea required id="txtDisplayInInches" defaultValue={this.props.data.displayInInches} placeholder="Please Enter Display In Inches" rows="2" cols="60" />
                                <label for="form7" class="pb-2">Supported Protocol</label><br></br>
                                <textarea required id="txtSupportedProtocol" defaultValue={this.props.data.supportedProtocol} placeholder="Please Enter Supported Protocol" rows="2" cols="60" />
                                <label for="form7" class="pb-2">Resolution</label><br></br>
                                <textarea required id="txtResolution" defaultValue={this.props.data.resolution} placeholder="Please Enter Resolution" rows="2" cols="60" />
                                <label for="form7" class="pb-2">Status</label><br></br>
                                <textarea required id="txtStatus" defaultValue={this.props.data.status} placeholder="Please Enter Status" rows="2" cols="60" />
                                <label for="form7" class="pb-2">Description</label><br></br>
                                <textarea required id="txtDescription" defaultValue={this.props.data.description} placeholder="Please Enter Description" rows="2" cols="60" />
                                <label for="form7" class="pb-2">Serial Number</label><br></br>
                                <textarea required id="txtSerialNumber" defaultValue={this.props.data.serialNumber} placeholder="Please Enter Serial Number" rows="2" cols="60" />
                                <label for="form7" class="pb-2">Select Brand  </label>
                                <select id="brandId" rows="2" cols="60">
                                    {brandList}
                                </select>
                                <div class="dropdown">
                                    <label for="form7" class="pb-2">Select Team</label>
                                    <select id="teamId" rows="2" cols="60">
                                        {teamList}
                                    </select> 
                                </div>
                                <div class="dropdown">
                                    <label for="form7" class="pb-2"> Select Chipset  </label>
                                    <select id="chipsetId" rows="2" cols="60">
                                        {chipsetList}
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
