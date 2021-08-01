import React, {Component} from 'react';


class Banner extends Component {

  


    render(){
       
      
        return(
            <div className="banner"  id="banner">
                <div className="i-bharat-banner font-weight-bold banner-photo overflow-hidden" style={{background:`url('/images/i_bharat_banner_bg.svg')`,}}>
                    <div className="container">
                        <div className="text_content">
                            <h3 className="banner_title pb-2 mb-3">Build Business</h3>
                            <h5 className="education text-white font-weight-bold pb-3">Business in a solid way and grow more</h5>
                            <div className="banner_student">
                                <img src="images/banner_student.svg" alt="Student"/>
                            </div>
                        </div>
                        <div className="mobile_app_screen">
                            <div className="app_screen_one">
                                <img src="images/banner_app_screen_one.png" alt="app"/>
                            </div>
                            <div className="app_screen_two">
                                <img src="images/banner_app_screen_two.png" alt="app"/>
                            </div>
                        </div>
                        <div className="pointer_sec">
                            <div className="pointer pointer_one">&nbsp; </div>
                            <div className="pointer pointer_two">&nbsp; </div>
                            <div className="pointer pointer_three">&nbsp; </div>
                            <div className="pointer pointer_four">&nbsp; </div>
                            <div className="pointer pointer_one pointer_five ">&nbsp; </div>
                        </div>
                        <div className="triangle_sec">
                            <img className="triangle_one" src="images/triangle_one.svg" alt="triangle"/>
                            <img className="triangle_two triangle_one" src="images/triangle_one.svg" alt="triangle"/>
                        </div>
                    </div>
                </div>
            </div>

            
        );

        
    }

}
export default  Banner;