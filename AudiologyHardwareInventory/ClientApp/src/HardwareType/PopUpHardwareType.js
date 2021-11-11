import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
/*import './DefaultReactTable.css';*/
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';


export class PopUpHardwareType extends Component {
    static displayName = PopUpHardwareType.name;
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: ''
        };
    }

    render() {
        //let countriesList = this.props.data.hardwareTypeInfo.length > 0
        //    && this.props.data.hardwareTypeInfo.map((item, i) => {
        //        return (
        //            <option key={i} value={item.hardwareName}>{item.hardwareName}</option>
        //        )
        //    }, this);
        return (
            <div>
                <h1> </h1>
                <Modal isOpen={this.props.data.modal} fade={this.props.data.fade} toggle={this.props.toggle}>
                    <ModalHeader style={{ background: 'Highlight', color: 'white' }} toggle={this.props.toggle} >
                        <div >HardwareType Details</div>
                    </ModalHeader>
                    <form onSubmit={this.props.handleSubmit}>
                        <ModalBody>
                            <div >                               
                                <label for="form7" class="pb-2">Hardware Name</label><br></br>
                                <textarea required id="txtHardwareName" defaultValue={this.props.data.hardwareName} placeholder="Please Enter Hardware Name" rows="2" cols="60" />
                                <label for="form7" class="pb-2">Description</label><br></br>
                                <textarea required id="txtDescription" defaultValue={this.props.data.description} placeholder="Please Enter Description" rows="2" cols="60" />
                                {/*<DropDownListComponent id="ddlelement" dataSource={this.props.data.sportsData} placeholder="Select a game" />*/}
                                {/*<select id="id">*/}
                                {/*    {countriesList}*/}
                                {/*</select>*/}
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
    //async getHardwareTypeId() {
    //    const response = await fetch('api/HardwareType');
    //    const data = await response.json();
    //    this.setState({ hardwareTypeInfo: data });
    //}
}
