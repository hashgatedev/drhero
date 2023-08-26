import React from "react";
import img1 from '../../../../assets/footer/Group 6087@2x.png';
import img2 from '../../../../assets/footer/Group 6086@2x.png';
import img3 from '../../../../assets/footer/Group 6085@2x.png';
import Linkedin from '../../../../assets/footer/Group 6092.svg';
import Facebook from '../../../../assets/footer/Group 6091.svg';
import Instagram from '../../../../assets/footer/Group 6090.svg';
import Twitter from '../../../../assets/footer/Group 6093.svg';

import Twitter1 from '../../../../assets/footer//desktop/Group 6093.svg';
import Facebook1 from '../../../../assets/footer/desktop/Group 6091.svg';
import Instagram1 from '../../../../assets/footer/desktop/Group 6090.svg';
import Linkedin1 from '../../../../assets/footer/desktop/Group 6092.svg';
import Email from '../../../../assets/footer/desktop/Group 6114.svg';
import Call from '../../../../assets/footer/desktop/Group 6116.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';


const Footer = () =>{
    return(
        <>
       
        <div className="Footer_mobile" style={{background:"#034c81",maxWidth:"1920px"}}>
            <div className="footerd col-lg-12" >
            <div className="footer_part col-md-6 col-lg-6">
                <img src={img3} className="responsive-image " />
                <img src={img2} className="responsive-image footer_hub" />
                <img src={img1} className="responsive-image " />
            </div>
           
            <div className="footer_social col-md-6 col-lg-6" style={{alignItems:"flex-end"}}>
                   
               <img className="socialmob" src={Twitter }/>
               <img className="socialmob" src={Instagram}/>
                <img className="socialmob" src={Linkedin}/>
                <img className="socialmob" src={Facebook}/>

                <img className="socialdesk" src={Call}/>
                <img className="socialdesk" src={Email}/>
               <img className="socialdesk" src={Twitter1}/>  
               <img className="socialdesk" src={Linkedin1}/>
               <img className="socialdesk" src={Facebook1}/>
               <img className="socialdesk" src={Instagram1} />
             
            </div>
            </div>
            <div className="bottom_footer" style={{background:"#ededed"}}>
                
                <div className="footer_terms" style={{display:"flex",justifyContent:"spaceEvenly"}}>
                    <div className="allright"><span style={{color:"#034c81",fontWeight:"normal"}}> دكتور هيرو © 2023 | كل الحقوق محفوظة</span></div>
                    <div><span style={{color:"#e04d63",fontWeight:"normal"}}> <span className="development" style={{color:"#034c81"}}>لتطوير |</span>&nbsp;<a href="https://hashgate.ae" target="blank" style={{textDecoration:"none",color:"#e04d62"}}>ھیشغیت تقنية</a></span></div>
                    <div  style={{display:"flex",color:"#034c81",fontWeight:"normal"}}>
                        <a href="./privacy" style={{textDecoration:"none",color:"#034c81"}}><div className="privacy">نهج الخصوصية <span style={{color:"#034c81",fontWeight:"bold"}}>|</span></div></a>
                        <a href="./terms" style={{textDecoration:"none",color:"#034c81"}}><div className="terms"> &nbsp;شروط الاستخدام</div></a>
                    </div>
                </div>

            </div>

        </div>
       
        </>
    )
}
export default Footer;