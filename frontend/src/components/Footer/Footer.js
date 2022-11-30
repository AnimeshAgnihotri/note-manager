import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="Footer">
            <h2 className="FooterTitle">Noter</h2>
            <div className="Router">
                <span className="Routes">About</span>
                <span className="Routes">Contact</span>
                <span className="Routes">Support</span>
                <span className="Routes">Terms</span>
                <span className="Routes">Privacy</span>
            </div>
        </div>
    );
};

export default Footer;
