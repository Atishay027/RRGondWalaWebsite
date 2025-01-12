import React from 'react';

const Navbar = () => {

  
  const scrollToSection = (sectionId) => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0); 
  };
  
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <h1 style={styles.logoText}>Rodmal Rajesh Kumar Gond & Jadibuti Wala</h1>
        <p style={styles.subText}>Specializing in Natural Gums & Herbs</p>
      </div>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}><a href="#home" style={styles.link}>Home</a></li>
        <li style={styles.navItem}><a href="#products" onClick={() => scrollToSection('products')} style={styles.link}>Products</a></li>
        <li style={styles.navItem}><a href="#about" onClick={() => scrollToSection('about')} style={styles.link}>About Us</a></li>
        <li style={styles.navItem}><a href="#contacts" onClick={() => scrollToSection('contact')} style={styles.link}>Contact Us</a></li>
      </ul>
      <div style={styles.contactButtonContainer}>
      <span style={styles.contactButton}>GST: 27AAEPM1234Q1Z5</span>
      </div>
    </nav>
  );
};

// Inline CSS styling
const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#4A2E2A',
    color: '#f7f3e9',
    flexWrap: 'wrap',
  },
  logoContainer: {
    flex: '1',
    textAlign: 'left',
    margin:'10px 10px 10px 10px',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '0',
    color: '#f7f3e9',
  },
  subText: {
    fontSize: '0.9rem',
    margin: '0',
    color: '#dfc2a1',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    padding: '0',
    gap: '15px',
    flex: '2',
    justifyContent: 'center',
    margin:'10px 10px 10px 10px',
  },
  navItem: {
    padding: '5px',
  },
  link: {
    color: '#f7f3e9',
    textDecoration: 'none',
    fontSize: '1.2rem',
  },
  contactButtonContainer: {
    flex: '1',
    textAlign: 'right',
    margin:'10px 10px 10px 10px',
  },
  contactButton: {
    backgroundColor: '#7A4535',
    color: '#f7f3e9',
    padding: '8px 12px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '1rem',
  },
};

// Responsive styling
const responsiveStyles = `
  @media (max-width: 768px) {
    .navbar {
      flex-direction: column;
      align-items: flex-start;
    }
    .navLinks {
      flex-direction: column;
      gap: 10px;
    }
    .contactButtonContainer {
      text-align: center;
      margin-top: 10px;
    }
  }
`;

// Adding responsive styles as inline CSS
const styleSheet = document.createElement("style");
styleSheet.innerText = responsiveStyles;
document.head.appendChild(styleSheet);

export default Navbar;
