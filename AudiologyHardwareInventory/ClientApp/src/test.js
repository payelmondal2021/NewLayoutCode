import React, { Component } from 'react';
import { Route } from 'react-router';
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


import './custom.css'

export default class test extends Component {
    static displayName = test.name;

    render() {
        return (
            <Layout>
          <div> hi </div>
            </Layout>
        );
    }
}
