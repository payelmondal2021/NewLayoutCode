import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenuTest } from './NavMenuTest';

export class layoutTest extends Component {
    static displayName = layoutTest.name;

    render() {
        return (
            <div>
                <NavMenuTest />
                <Container>
                    {this.props.children}
                </Container>
            </div>
        );
    }
}
