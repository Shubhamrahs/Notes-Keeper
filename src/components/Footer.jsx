//jshint esversion:6

import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} by Shubham Sharma </p>
    </footer>
  );
}

export default Footer;