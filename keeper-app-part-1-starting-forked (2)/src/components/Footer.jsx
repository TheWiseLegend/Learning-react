import React from "react";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div>
      <footer className="footer">
        <p>Copyright {year}</p>
      </footer>
    </div>
  );
}

export default Footer;
