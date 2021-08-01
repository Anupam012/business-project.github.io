import React, {Component} from 'react';
import { ListGroup, ListGroupItem, } from 'reactstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';







class OurFeatures  extends Component {


    render(){
        return(
            <div className="our_features" id="our_features">
                <div className="container">
                    <h3 className="blog_title text-uppercase font-weight-bold text-center pb-3" data-aos="fade-up">Our Features</h3>
                    <ListGroup>
                        <ListGroupItem tag="a" href="#" className="features_grid border-0"  data-aos="fade-left">
                            <div className="activities_icon text-center  d-flex align-items-center justify-content-center  m-auto">
                                <img src='images/ib_dashboard_icon_one.svg' alt="Dashboard"/>
                            </div>
                            <h4 className="title text-uppercase font-weight-bold mt-3 text-center">School</h4>
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="#" className="features_grid health_grid border-0" data-aos="fade-up">
                            <div className="activities_icon text-center  d-flex align-items-center justify-content-center  m-auto">
                                <img src='images/ib_dashboard_icon_two.svg' alt="Dashboard"/>
                            </div>
                            <h4 className="title font-weight-bold mt-3 text-center">HEALTH</h4>
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="#" className="features_grid border-0 sansthan_gird"  data-aos="fade-right">
                            <div className="activities_icon text-center  d-flex align-items-center justify-content-center  m-auto">
                                <img src='images/ib_dashboard_icon_three.svg' alt="Dashboard"/>
                            </div>
                            <h4 className="title font-weight-bold mt-3 text-center">Institute</h4>
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="#" className="features_grid border-0 connect_grid"  data-aos="fade-left">
                            <div className="activities_icon text-center  d-flex align-items-center justify-content-center  m-auto">
                                <img src='images/ib_dashboard_icon_four.svg' alt="Dashboard"/>
                            </div>
                            <h4 className="title font-weight-bold mt-3 text-center">CONNECT</h4>
                        </ListGroupItem>
                        <ListGroupItem tag="a" href="#" className="features_grid family_grid border-0"  data-aos="fade-down">
                            <div className="activities_icon text-center  d-flex align-items-center justify-content-center  m-auto">
                                <img src='images/ib_dashboard_icon_five.svg' alt="Dashboard"/>
                            </div>
                            <h4 className="title font-weight-bold mt-3 text-center">FAMILY</h4>
                        </ListGroupItem>
                       
                    </ListGroup>
                 </div>
            </div>

            
        );

        
    }

}
export default  OurFeatures;