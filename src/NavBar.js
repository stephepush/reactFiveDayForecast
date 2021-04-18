import React from 'react'
import { Navbar, Form, FormControl, Button } from 'react-bootstrap'
import logo from './graphics/logo.svg'

export default function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" className="justify-content-between">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Five Day Forecaster by Stephen Peters
            </Navbar.Brand>
{/*             <Form inline>
                <FormControl type="text" placeholder="Enter Zip Code" className=" mr-sm-2" />
                <Button type="submit">Submit</Button>
            </Form> */}
        </Navbar>
    )
}
