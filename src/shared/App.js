import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from "react-bootstrap";
import { Route } from 'react-router-dom';
import { Hi, Bye } from '../pages';

class App extends Component {
    render() {
        return (
            <div>
                <center>Test Web</center>

                <Nav className="flex-column" >
                     <Nav.Item>
                         <Nav.Link href="/">Active</Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                         <Nav.Link eventKey="link-1" href="/test1">Test1</Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                         <Nav.Link eventKey="link-1" href="/test2">Test2</Nav.Link>
                     </Nav.Item>
                </Nav>

                <Route exact path="/test1" component={Hi} />
                <Route path="/test2" component={Bye} />
            </div>

            );
    }
}


                export default App;