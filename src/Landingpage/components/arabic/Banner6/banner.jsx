import React from "react";
import "./banner.css"; // You can create a CSS file for styling

const Email = () => {
    return (
        <div className="email-container" style={{maxWidth:"1920px"}}>
            <div className="background-image-desktop">
                <div className="centered-content">
                    <div className="content_email" style={{color:"#fff"}}>
                    <h1>Get expert Advice Today!</h1>
                    <p>best of our health content delivered right to your inbox.</p>
                    </div>
                    <div className="subscription-form">
                        <input type="email" placeholder="Enter your email" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="background-image-mobile">
                <div className="centered-content" style={{color:"#fff",paddingTop:"25px"}}>
                    <div  className="email_mob" >
                    <h1>Get expert Advice Today!</h1>
                    <p>best of our health content Delivered Right to your inbox.</p>
                    </div>
                    <form>
                    <div className="subscription-form mobile_sub">
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit" required="">SUBSCRIBE</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Email;
