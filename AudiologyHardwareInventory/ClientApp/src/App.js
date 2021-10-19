import React, { Component } from 'react';
import { Route } from 'react-router';
/*import { layoutTest } from './components/layoutTest';*/
import { Layout } from './components/Layout';
import { Home } from './components/Home';
/*import { FetchData } from './Team/FetchData';*/
import { PlatformOperation } from './PlatForm/PlatformOperation';
import { TeamOperation } from './Team/TeamOperation';
/*import { Counter } from './components/Counter';*/
import { ChipSetOperation } from './ChipSet/ChipSetOperation';
import { BrandOperation } from './Brand/BrandOperation';
import { HardwareTypeOperation } from './HardwareType/HardwareTypeOperation';
import { ImageOperation } from './Images/ImageOperation';
import { HearingAidOperation } from './HearingAid/HearingAidOperation';
import { MobileOperation } from './Mobile/MobileOperation';
import { FamilyTypeOperation } from './FamilyType/FamilyTypeOperation';
import { ProgrammerOperation } from './Programmers/ProgrammerOperation';
import { layoutTest } from './components/layoutTest';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                {/*<Route path='/counter' component={Counter} />*/}
                {/* <Route path='/fetch-data' component={FetchData} />*/}
                {/*<Route path='/team-data' component={TeamOperation} />*/}
                {/*<Route path='/chipset' component={ChipSetOperation} />*/}
                {/*<Route path='/platform-data' component={PlatformOperation} />*/}
                {/*<Route path='/brand' component={BrandOperation} />*/}
                {/*<Route path='/hardwareType' component={HardwareTypeOperation} />*/}
                {/*<Route path='/image' component={ImageOperation} />*/}
                {/*<Route path='/hearingAid' component={HearingAidOperation} />*/}
                {/*<Route path='/mobile' component={MobileOperation} />*/}
                <Route path='/familyType' component={FamilyTypeOperation} />
                <Route path='/programmer' component={ProgrammerOperation} />
            </Layout>
           
        );
    }
}
