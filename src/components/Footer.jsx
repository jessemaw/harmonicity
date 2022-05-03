import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer>
        <div className="footer">
          <p className="footer-text">© Harmonicity {currentYear}</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
