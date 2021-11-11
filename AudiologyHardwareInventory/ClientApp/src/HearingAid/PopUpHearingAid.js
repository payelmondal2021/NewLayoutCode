import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
/*import './DefaultReactTable.css';*/
import './DropdownList.css';

export class PopUpHearingAid extends Component {
    static displayName = PopUpHearingAid.name;
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

        let familyTypeList = this.props.data.familyTypeInfo.length > 0
            && this.props.data.familyTypeInfo.map((item, i) => {
                return (
                    <option key={i} value={item.familyTypeId}>{item.familyName}</option>
                )
            }, this);

        let programmerList = this.props.data.programmerInfo.length > 0
            && this.props.data.programmerInfo.map((item, i) => {
                return (
                    <option key={i} value={item.programmerId}>{item.programmerName}</option>
                )
            }, this);

        let teamList = this.props.data.teamInfo.length > 0
            && this.props.data.teamInfo.map((item, i) => {
                return (
                    <option key={i} value={item.teamId}>{item.teamName}</option>
                )
            }, this);

        let platformList = this.props.data.platformInfo.length > 0
            && this.props.data.platformInfo.map((item, i) => {
                return (
                    <option key={i} value={item.platformId}>{item.platformName}</option>
                )
            }, this);
        return (
            <div>               
                <Modal isOpen={this.props.data.modal} fade={this.props.data.fade} toggle={this.props.toggle}>
                    <ModalHeader style={{ background: 'Highlight', color: 'white' }} toggle={this.props.toggle} >
                        <div >HearingAid Details</div>
                    </ModalHeader>
                    <form onSubmit={this.props.handleSubmit}>
                        <ModalBody>
                            <div >                               
                                <label for="form7" class="pb-2">HearingAid Name</label><br></br>
                                <textarea required id="txtHearingAidName" defaultValue={this.props.data.hearingAidName} placeholder="Please Enter HearingAid Name" rows="2" cols="60" />
                                <label for="form7" class="pb-2">SerialNumber</label><br></br>
                                <textarea required id="txtSerialNumber" defaultValue={this.props.data.serialNumber} placeholder="Please Enter Serial Number" rows="2" cols="60" />
                                <label for="form7" class="pb-2">Description</label><br></br>
                                <textarea required id="txtDescription" defaultValue={this.props.data.description} placeholder="Please Enter Description" rows="2" cols="60" />
                                {/*<label for="form7" class="pb-2">Status</label><br></br>*/}
                                {/*<textarea required id="txtStatus" defaultValue={this.props.data.status} placeholder="Please Enter Status" rows="2" cols="60" />*/}
                                <label for="form7" class="pb-2">FirmwareVersion</label><br></br>
                                <textarea required id="txtFirmwareVersion" defaultValue={this.props.data.firmwareVersion} placeholder="Please Enter Firmware Version" rows="2" cols="60" />
                                <label for="form7" class="pb-2">Side</label><br></br>
                                <textarea required id="txtSide" defaultValue={this.props.data.side} placeholder="Please Enter Side" rows="2" cols="60" />
                                <label for="form7" class="pb-2">Select Brand  </label>                           
                                 <select id="brandId" rows="2" cols="60" >
                                    {brandList}
                                </select><br />
                                <div class="dropdown">
                                <label for="form7" class="pb-2">Select Team  </label>
                                    <select id="teamId" rows="2" cols="60">
                                        {teamList}
                                    </select>
                                </div><span></span>
                                <div class="dropdown">
                                    <label for="form7" class="pb-2">Select Family Type </label>
                                    <select id="familyId" rows="2" cols="60">
                                        {familyTypeList}
                                    </select>
                                </div><span></span>
                                <div class="dropdown">
                                    <label for="form7" class="pb-2">Select Programmer</label>
                                    <select id="programmerId" rows="2" cols="60">
                                        {programmerList}
                                    </select>
                                </div><span></span>
                                <div class="dropdown">                                  
                                    <label for="form7" class="pb-2"> Select PlatForm  </label>
                                    <select id="platformId" rows="2" cols="60">
                                        {platformList}
                                    </select><br />
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
