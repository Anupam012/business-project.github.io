import React, {Component} from 'react';

import {Container, Form, FormGroup, Label, Input, } from 'reactstrap';
import { BrowserRouter, Link } from "react-router-dom";
import 'aos/dist/aos.css';

class ContactSec extends Component {


    render(){
       
        return(
            <React.Fragment>
            <div className="contact_sec" id="contact_sec">
                <Container>
                    <div className="contact_wrapp" data-aos="fade-down">
                        <BrowserRouter>
                            <Link className="phone_no d-flex m-auto" to="#">
                                <div className="phone_icon">
                                    <img src="images/phone_icon.svg" alt="Logo"/>
                                </div>
                                <span>9586331526</span>   
                            </Link>
                        </BrowserRouter>
                        <h4 className="contact_title">Contact Us</h4>
                        <Form className="contact_form">
                            <FormGroup>
                                <Label>Name</Label>
                                <Input class="form-control" type="text" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input  class="form-control" type="email" name="mail"/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Phone</Label>
                                <Input  class="form-control" type="number" name="number"/>
                            </FormGroup>
                            <button className="submit_btn">Submit</button>
                        </Form>
                    </div>
                    <div className="f_polygon_sec">
                        <img className="f_polygon_one" src="images/f_polygon_one.svg" alt="Polygon"/>
                        <img className="f_polygon_two" src="images/f_polygon_two.svg" alt="Icon"/>
                        <img className="f_polygon_three" src="images/f_polygon_three.svg" alt="Icon"/>
                    </div>
                    <div className="f_circle_sec">
                        <div className="f_circle f_circle_one">&nbsp;</div>
                        <div className="f_circle f_circle_two">&nbsp;</div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
            
        );

        
    }

}
export default  ContactSec;