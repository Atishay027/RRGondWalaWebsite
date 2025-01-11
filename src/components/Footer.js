import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#4A2E2A', /* Use your primary theme color */
    color: '#ffffff',
    padding: '20px',
    textAlign: 'center',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '20px 0',
  };

  const sectionStyle = {
    flex: '1 1 200px',
    margin: '15px',
  };

  const headingStyle = {
    fontSize: '18px',
    marginBottom: '15px',
    color: '#ffffff', /* Headings color */
  };

  const textStyle = {
    fontSize: '14px',
    color: '#d9d9d9', /* Text color */
    textDecoration: 'none',
  };

  const linkStyle = {
    display: 'inline-block',
    margin: '5px 10px',
    color: '#d9d9d9',
    textDecoration: 'none',
  };

  const linkHoverStyle = {
    color: '#ffffff',
  };

  const ulStyle = {
    listStyle: 'none',
    padding: 0,
  };

  const liStyle = {
    margin: '5px 0',
  };

  const bottomStyle = {
    borderTop: '1px solid #ffffff',
    marginTop: '20px',
    paddingTop: '15px',
    fontSize: '12px',
    color: '#d9d9d9',
  };

  return (
    <footer style={footerStyle}>
      {/* <div style={containerStyle}>
        
        <div style={sectionStyle}>
          <h2 style={headingStyle}>About Us</h2>
          <p style={textStyle}>
            We are dedicated to providing high-quality natural products, including traditional herbs, gums, and oils. Our mission is to bring the best of natural health and wellness to our customers.
          </p>
        </div>

       
        <div style={sectionStyle}>
          <h2 style={headingStyle}>Contact Us</h2>
          <p style={textStyle}>
            <strong>Phone:</strong> 9413358220<br />
            <strong>Email:</strong> info@rrgondwala.com<br />
            <strong>Address:</strong> M P MARKET BAZAR NO 2, BHOPALGANJ, BHILWARA, Rajasthan - 311001
          </p>
        </div>

        
        <div style={sectionStyle}>
          <h2 style={headingStyle}>Quick Links</h2>
          <ul style={ulStyle}>
            <li style={liStyle}><a href="/about" style={textStyle}>About Us</a></li>
            <li style={liStyle}><a href="/products" style={textStyle}>Our Products</a></li>
            <li style={liStyle}><a href="/contact" style={textStyle}>Contact</a></li>
            <li style={liStyle}><a href="/faq" style={textStyle}>FAQ</a></li>
          </ul>
        </div>
        <div style={sectionStyle}>
          <h2 style={headingStyle}>Follow Us</h2>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>Twitter</a>
        </div>
      </div> */}
      <div style={bottomStyle}>
        <p>&copy; {new Date().getFullYear()} RRGondwala. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
