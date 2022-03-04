import React, {Component} from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";

class Shop extends Component {
    render() {
        return (
            <>
                <header>
                    <Navbar className="navbar  py-3" expand="lg">
                        <Container fluid>
                            <Navbar.Brand href="#">Company name</Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll"/>
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{maxHeight: '100px'}}
                                    navbarScroll
                                >
                                </Nav>
                                <ul className="d-flex align-items-center list-unstyled gap-4 justify-content-center pt-2 me-4">
                                    <li><a className="text-dark text-decoration-none" href="#">Features </a></li>
                                    <li><a className="text-dark text-decoration-none" href="#">Enterprise </a></li>
                                    <li><a className="text-dark text-decoration-none" href="#">Support</a></li>
                                    <li><a className="text-dark text-decoration-none" href="#"> Pricing</a></li>
                                </ul>

                                <Button variant="outline-primary">Sign up</Button>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </header>
                <div className="section-card">
                    <div className="container">
                        <div className="text-center head-tag">
                            <h1 className="display-2">Pricing</h1>
                            <p>
                                Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.
                            </p>
                        </div>
                        <div className="row px-5 mt-5">
                            <div className="col-12 col-lg-4">
                                <div className="card text-center">
                                    <div className="card-header">
                                        <h4>Free</h4>
                                    </div>
                                    <div className="card-body">
                                        <h1 className="mb-3">$0 <span className="text-secondary">/mo</span></h1>
                                        <p className="m-0">10 users included</p>
                                        <p className="m-0">2 GB of storage</p>
                                        <p className="m-0">Email support</p>
                                        <p className="m-0">Help center access</p>
                                        <button className="btn btn-outline-primary w-100 mt-4">Sing up for free</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="card text-center">
                                    <div className="card-header">
                                  <h4>Pro</h4>
                                    </div>
                                    <div className="card-body">
                                        <h1 className="mb-3">$15 <span className="text-secondary">/mo</span></h1>
                                        <p className="m-0">20 users included</p>
                                        <p className="m-0">10 GB of storage</p>
                                        <p className="m-0">Priority email support</p>
                                        <p className="m-0">Help center access</p>
                                        <button className="btn btn-outline-primary w-100 mt-4">Get started</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="card text-center">
                                    <div className="card-header">
                                       <h4>Enterprise</h4>
                                    </div>
                                    <div className="card-body">
                                        <h1 className="mb-3">$29 <span className="text-secondary">/mo</span></h1>
                                        <p className="m-0">30 users included</p>
                                        <p className="m-0">15 GB of storage</p>
                                        <p className="m-0">Phone and Email support</p>
                                        <p className="m-0">Help center access</p>
                                        <button className="btn btn-outline-primary w-100 mt-4">Contact Us</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <footer>
                    <div className="container">
                        <div className="row px-5">
                            <hr/>
                            <div className="col-12 mt-4 col-lg-3">
                                <img className="bootstrap-img" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt=""/>
                                <span className="text-secondary d-block">© 2017-2018</span>
                            </div>
                            <div className="col-12 mt-4 col-lg-3">
                                <h6>Features</h6>
                            <ul className="list-unstyled">
                                <li><a className="text-secondary text-decoration-none" href="#">Cool stuff</a></li>
                                <li><a className="text-secondary text-decoration-none" href="#">Random feature</a></li>
                                <li><a className="text-secondary text-decoration-none" href="#">Team feature</a></li>
                                <li><a className="text-secondary text-decoration-none" href="#">Stuff for developers</a></li>
                                <li><a className="text-secondary text-decoration-none" href="#">Another one</a></li>
                            </ul>
                                
                            </div>
                            <div className="col-12 mt-4 col-lg-3">
                                <h6>Resources</h6>
                            <ul className="list-unstyled">
                                <li><a className="text-secondary text-decoration-none" href="#">Resource</a></li>
                                <li><a className="text-secondary text-decoration-none" href="#">Resource name</a></li>
                                <li><a className="text-secondary text-decoration-none" href="#">Another resource</a></li>
                                <li><a className="text-secondary text-decoration-none" href="#">Final resource</a></li>
                           </ul>

                            </div>
                            <div className="col-12 mt-4 col-lg-3">
                                <h6>About</h6>
                            <ul className="list-unstyled">
                                <li><a className="text-secondary text-decoration-none" href="#">Team</a></li>
                                <li><a className="text-secondary text-decoration-none" href="#">Locations</a></li>
                                <li><a className="text-secondary text-decoration-none" href="#">Privacy</a></li>
                                <li><a className="text-secondary text-decoration-none" href="#">Terms</a></li>
                           </ul>

                            </div>

                        </div>
                    </div>
                </footer>

            </>
        );
    }
}

export default Shop;