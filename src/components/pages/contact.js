import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPagePic from "../../../static/assets/images/auth/login.jpg";

export default function() {
    return (
        <div className="content-page-wrapper">
            <div 
            className="left-column"
            style={{
                background: "url(" + contactPagePic + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        />

            <div className="right-column"> 
                <div className="contact-bullet-points">
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="phone-slash"/>
                        </div>
                        <div className="text">
                            555-555-5555
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon="ethernet"/>
                        </div>
                        <div className="text">
                            realaccount@fakewebsite.org
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon="map-signs"/>
                        </div>
                        <div className="text">
                            Utah
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}