
/**//*Using testing purpose ..not using this js file*//**//**/

import { extend } from 'jquery';
import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReactTable from 'react-table-6'
/*import './DefaultReactTable.css';*/


export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {
            platformInfo: [], brandInfo: [], teamInfo: [], hearingAidInfo: [], searchResult: [], searchResult:[]
        };
    }

    componentDidMount() {
        this.populatePlatformData();
        this.BrandData();
        this.TeamData();
        this.AddDropdownItem();

    }
    clickSearch = (event) => {       
        var platform = document.getElementById('platformId').value;
        var brandId = document.getElementById('brandId').value;
        var teamId = document.getElementById('teamId').value;
        if (platform =='Select Item' )
        {
            platform = 0;
        }
        if (brandId == 'Select Item') {
            brandId = 0;
        }
        if (teamId == 'Select Item') {
            teamId = 0;
        }
        let searchField =
        {
            BrandId: Number(brandId),
            PlatformId: Number(platform),
            TeamId: Number(teamId)
        };
        this.GetHearingAidSearchResult(searchField);
    }

    render() {
        let platform = this.state.platformInfo.length > 0
            && this.state.platformInfo.map((item, i) => {
                return (
                    <option key={i} value={item.platformId}>{item.platformName}</option>
                )
            }, this);
        let brand = this.state.brandInfo.length > 0
            && this.state.brandInfo.map((item, i) => {
                return (                 
                    <option key={i} value={item.brandId}>{item.brandName}</option>
                )
            }, this);
        let team = this.state.teamInfo.length > 0
            && this.state.teamInfo.map((item, i) => {
                return (
                    <option key={i} value={item.teamId}>{item.teamName}</option>
                )
            }, this);
      return (
          <div>
              <div class="row ">
                  <div class="col-sm-2">
                      <div class="dropdown">
                          <label for="form7" class="pb-2"> Select PlatForm </label>
                          <select id="platformId" rows="2" cols="60">
                              {platform}
                          </select><br />
                      </div>
                  </div>
                  <div class="col-sm-2">
                      <div class="dropdown">
                          <label for="form7" class="pb-2"> Select Brand </label>
                          <select id="brandId" rows="2" cols="60">
                              {brand}
                          </select><br />
                      </div>
                  </div>
                  <div class="col-sm-2">
                      <div class="dropdown">
                          <label for="form7" class="pb-2"> Select Team </label>
                          <select id="teamId" rows="2" cols="60">
                              {team}
                          </select><br />
                      </div>
                  </div>
                  <div class="col-sm-2">
                      <div >
                          <br/><br/>
                          <Button color='primary' onClick={this.clickSearch} data-id="deleteButtonId">
                              Search
                           </Button>
                       </div>
                  </div>

              </div>
              <br /><br /><br /><br />
              <div class="row ">

                  <div class="col-sm">
                      <ReactTable
                          getTdProps={this.onRowClick}
                          expandedRows={true}
                          data={this.state.searchResult}
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
                                      }
                                  ],
                              },
                          ]}
                          defaultPageSize={5}

                      />
                  </div>
              </div>
                 
         </div>       
      
    );
    }
    async populatePlatformData() {
        const response = await fetch('api/Platform');
        const data = await response.json();
        this.setState({ platformInfo: data});
    }
    async BrandData() {
        const response = await fetch('api/Brand');
        const data = await response.json();
        this.setState({ brandInfo: data });
    }
    async TeamData() {
        const response = await fetch('api/Team');
        const data = await response.json();
        this.setState({ teamInfo: data });
    }
    //async TeamData() {
    //    const requestOptions = {
    //        method: 'POST',
    //        headers: { 'Content-Type': 'application/json' },
    //        body: JSON.stringify({ title: "hi" })
    //    };
    //    const response = await fetch('api/Team', requestOptions);
    //    const data = await response.json();
    //   // this.setState({ teamInfo: data });
    //}
    async GetHearingAidSearchResult(searchField) {
        const response = await fetch('api/SearchHearingAid/GetSearchResult', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                searchField

            )
        })
        const data = await response.json();
        this.setState({ searchResult: data });
    }
    async AddDropdownItem()
    {        
        var option = document.createElement("option");
        option.text = "Select Item";
        var platform = document.getElementById("platformId");
        platform.add(option, platform[0]);

        var option = document.createElement("option");
        option.text = "Select Item";
        var brand = document.getElementById("brandId");
        brand.add(option, brand[0]);

        var option = document.createElement("option");
        option.text = "Select Item";
        var team = document.getElementById("teamId");
        team.add(option, team[0]);
        
    }

}
