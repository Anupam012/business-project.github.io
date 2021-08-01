import React, {Component} from 'react';
import { ListGroup, ListGroupItem, } from 'reactstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';







class OurService  extends Component {


    render(){
        return(
            <div className="our_features our_service" id="our_service">
                <div className="container">
                    <h3 className="blog_title text-uppercase font-weight-bold text-center pb-3" data-aos="fade-up">Our Services</h3>
                    <ListGroup>
                        <ListGroupItem tag="a" href="#" className="features_grid border-0"  data-aos="fade-left">
                            <div className="activities_icon text-center  d-flex align-items-center justify-content-center  m-auto">
                                <img src='images/ib_dashboard_icon_one.svg' alt="service"/>
                            </div>
                            <h4 className="title text-uppercase font-weight-bold mt-3 text-center">Student</h4>
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="#" className="features_grid health_grid border-0" data-aos="fade-up">
                            <div className="activities_icon text-center  d-flex align-items-center justify-content-center  m-auto">
                                <img src='images/teaching_icon.svg' alt="service"/>
                            </div>
                            <h4 className="title text-uppercase font-weight-bold mt-3 text-center">TEACHER</h4>
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="#" className="features_grid border-0 sansthan_gird"  data-aos="fade-right">
                            <div className="activities_icon text-center  d-flex align-items-center justify-content-center  m-auto">
                                <img src='images/parents_icon.svg' alt="service"/>
                            </div>
                            <h4 className="title font-weight-bold mt-3 text-center">PARENTS</h4>
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="#" className="features_grid border-0 connect_grid"  data-aos="fade-left">
                            <div className="activities_icon text-center  d-flex align-items-center justify-content-center  m-auto">
                                <img src='images/industry_icon.svg' alt="service"/>
                            </div>
                            <h4 className="title font-weight-bold mt-3 text-center">INDUSTRY</h4>
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="#" className="features_grid family_grid border-0"  data-aos="fade-down">
                            <div className="activities_icon text-center  d-flex align-items-center justify-content-center  m-auto">
                                <img src='images/government_icon.svg' alt="Government"/>
                            </div>
                            <h4 className="title font-weight-bold mt-3 text-center">GOVERNMENT</h4>
                        </ListGroupItem>

                        <ListGroupItem tag="a" href="#" className="features_grid border-0"  data-aos="fade-left">
                            <div className="activities_icon text-center  d-flex align-items-center justify-content-center  m-auto">
                                <img src='images/i4i_center_icon.svg' alt="service"/>
                            </div>
                            <h4 className="title font-weight-bold mt-3 text-center">CALL CENTER</h4>
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="#" className="features_grid health_grid border-0" data-aos="fade-up">
                            <div className="activities_icon text-center  d-flex align-items-center justify-content-center  m-auto">
                                <img src='images/event_icon.svg' alt="service"/>
                            </div>
                            <h4 className="title text-uppercase font-weight-bold mt-3 text-center">EVENT</h4>
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="#" className="features_grid border-0 sansthan_gird"  data-aos="fade-right">
                            <div className="activities_icon text-center  d-flex align-items-center justify-content-center  m-auto">
                                <img src='images/kushal_icon.svg' alt="service"/>
                            </div>
                            <h4 className="title font-weight-bold mt-3 text-center">PRIVATE</h4>
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="#" className="features_grid border-0 connect_grid"  data-aos="fade-left">
                            <div className="activities_icon text-center  d-flex align-items-center justify-content-center  m-auto">
                                <img src='images/eklavya_icon.svg' alt="service"/>
                            </div>
                            <h4 className="title font-weight-bold mt-3 text-center">INSTITUE</h4>
                        </ListGroupItem>
                    </ListGroup>

                    <div className="i_bharat_pointer_sec">
                        <div className="i_bharat_pointer pointer_one">&nbsp;</div>
                        <div className="i_bharat_pointer pointer_two">&nbsp;</div>
                        <div className="i_bharat_pointer pointer_three">&nbsp;</div>
                        <div className="i_service_polygon polygon_one">
                            <img src="images/brief_polygon_one.svg" alt="Polygon"/>
                        </div>
                        <div className="i_service_polygon polygon_two">
                            <img src="images/brief_polygon_three.svg" alt="Polygon"/>
                        </div>
                    </div>
                 </div>
            </div>

            
        );

        
    }

}
export default  OurService;