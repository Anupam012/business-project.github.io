
import React, {Component} from 'react';

  import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

import NavMenu from '../component/nav_header.js';
import Banner from '../component/banner.js';
import OurFeatures from '../component/our_features.js';
import AboutUs from '../component/about_us.js';
import OurService from '../component/our_service.js';
import TestimonialsSec from '../component/testimonials_sec.js';
import ContactSec from '../component/contact_sec.js';
import FooterSec from '../component/footer_sec.js';







class Home extends Component {

    /* ScrollY Js */
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    
    handleScroll = () => {
        if (window.scrollY > 10) {
          document.querySelector(".header_sec").className = "header_sec sticky"
        } else {
          document.querySelector(".header_sec").className = "header_sec";
        }
    };

     /* Toggle Js */
     constructor(props) {
        super();

        this.state = {
            home_page: true,
        };
    }
    toggle() {
        this.setState({home_page: !this.state.home_page});
      }


    render(){
        
        return(
            <div className={this.state.home_page ? "home_page" : "home_page  active"} onClick={this.toggle.bind(this)} style={{background:`url('/images/home_bg.svg')`,}}>

                <div className="header_sec" onScroll={ this.handleScroll }>
                    <div className="container">
                    <Router>
                            <Link className="logo" to="#">
                                <img src="images/a_logo.png" alt="Logo"/>
                            </Link>
                        </Router>
                        <NavMenu/>
                        <Router>
                            <Link className="toggle_btn" to="#"  onClick={this.toggle.bind(this)}>
                                <span>&nbsp;</span>
                                <span>&nbsp;</span>
                                <span>&nbsp;</span>
                            
                            </Link>
                        </Router>
                    </div>
                </div>
              
               <Banner/>
               <OurFeatures/>
               <AboutUs/>
               <OurService/>
               <TestimonialsSec/>
               <ContactSec/>
               <FooterSec/>

            </div>
        );

        
    }

}
export default  Home;