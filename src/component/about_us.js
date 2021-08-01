import React, {Component} from 'react';
import { BrowserRouter,  Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';







class AboutUs  extends Component {


    render(){
        return(
            <div className="about_us" id="about_us">
                <div className="container">
                    <h3 className="blog_title text-uppercase font-weight-bold text-center pb-3" data-aos="fade-up">About Us</h3>
                    <div className="about_contain d-flex align-items-center">
                        <div className="brief_photo mr-5"  data-aos="fade-left">
                            <img src='images/brief_photo.svg' alt="Brief"/>
                            <div className="brief_pointer_one"> &nbsp;</div>
                            <div className="brief_polygon_one brief_polygon"><img src="images/brief_polygon_one.svg" alt="Polygon"/></div>
                            <div className="brief_polygon_two brief_polygon"><img src="images/brief_polygon_two.svg" alt="Polygon"/></div>
                        </div>
                        <div className="text_contain" data-aos="fade-right">
                            <p className="description">Cras eget dolor eget nulla pellentesque accumsan vitae consectetur dui. Nam fringilla nibh sem. Integer congue, libero sit amet laoreet rhoncus, felis metus dapibus tortor, vel finibus sapien odio eu tortor. Vivamus tristique, felis eu blandit tincidunt, eros mi vehicula ante, et mattis ex arcu id sapien. Aenean sed nunc ultrices, condimentum ante et, tristique lorem. Morbi vestibulum egestas odio, sed imperdiet odio sollicitudin non. Ut iaculis a nunc vitae fermentum. Cras finibus lorem sit amet faucibus suscipit. Sed sit amet mollis odio. Sed tincidunt commodo gravida.</p>
                            <p className="description">Suspendisse imperdiet tincidunt felis, in eleifend metus bibendum vel. Pellentesque luctus efficitur placerat. Morbi vestibulum urna sit amet nibh varius semper. Aenean tincidunt odio eget enim porttitor sodales. Vestibulum mi justo, lacinia hendrerit maximus in, molestie ut enim. Nullam accumsan euismod justo, ac pulvinar nisi tempus vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas tristique eleifend mattis. Quisque pretium mauris posuere risus dapibus imperdiet. Etiam volutpat varius mollis. Donec euismod arcu aliquet iaculis faucibus.</p>
                            <BrowserRouter>
                                <Link className="more_btn mt-4" to="#">Read More</Link>
                            </BrowserRouter>
                            <div className="brief_polygon_three brief_polygon"><img src="images/brief_polygon_one.svg" alt="Polygon"/></div>
                            <div className="brief_polygon_four brief_polygon"><img src="images/brief_polygon_three.svg" alt="Polygon"/></div>
                            <div className="brief_pointer_five">
                                &nbsp;
                            </div>
                        </div>
                     

                    </div>

                   
                 </div>
            </div>

            
        );

        
    }

}
export default  AboutUs;