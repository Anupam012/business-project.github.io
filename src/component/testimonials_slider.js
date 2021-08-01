import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';






export default function TestimonialsSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };

    return(
        <Slider {...settings}>
            <div className="testimonials_slider">
                <div className="testimonials_photo">
                    <img src="images/user_photo.png" alt="Photo"/>
                </div>
                <div className="text_content">
                    <p> different scholars. Herbert Spencer believed in the 'complete-living aim’ which signifies that education should prepare the children for life. Rousseau and Mahatma Gandhi also supported the view as they believed in the complete development or perfection of nature. Education provides a progressive development of innate abilities that creates good citizens.</p>
                    <div className="bottom_sec">
                        <h5 className="name">John Deo</h5>
                        <h6 className="designation">Teacher</h6>
                    </div>
                </div>
            </div>
            <div className="testimonials_slider">
                <div className="testimonials_photo">
                    <img src="images/user_photo.png" alt="Photo"/>
                </div>
                <div className="text_content">
                    <p> different scholars. Herbert Spencer believed in the 'complete-living aim’ which signifies that education should prepare the children for life. Rousseau and Mahatma Gandhi also supported the view as they believed in the complete development or perfection of nature. Education provides a progressive development of innate abilities that creates good citizens.</p>
                    <div className="bottom_sec">
                        <h5 className="name">John Deo</h5>
                        <h6 className="designation">Teacher</h6>
                    </div>
                </div>
            </div>
            <div className="testimonials_slider">
                <div className="testimonials_photo">
                    <img src="images/user_photo.png" alt="Photo"/>
                </div>
                <div className="text_content">
                    <p> different scholars. Herbert Spencer believed in the 'complete-living aim’ which signifies that education should prepare the children for life. Rousseau and Mahatma Gandhi also supported the view as they believed in the complete development or perfection of nature. Education provides a progressive development of innate abilities that creates good citizens.</p>
                    <div className="bottom_sec">
                        <h5 className="name">John Deo</h5>
                        <h6 className="designation">Teacher</h6>
                    </div>
                </div>
            </div>
        </Slider>
    );
}