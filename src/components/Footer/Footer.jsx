import React from "react";
import "./Footer.css";

function Footer() {
    const year = new Date().getFullYear();
    return (
      <footer>
        <p>ⓒ {year} WordDistanceStudio.nl</p>
      </footer>
    );
  }
  
  export default Footer;