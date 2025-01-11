// src/components/ContactUs.js
import React , { useState, useEffect }from 'react';

const ContactUs = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollUp(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  // Address to be used in Google Maps
  const address = "M P MARKET BAZAR NO 2 BHOPALGANJ, BHILWARA, Bhilwara -311001, Rajasthan";

  // Encode the address for the Google Maps URL
  const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;

  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.sectionTitle}>Contact Us (संपर्क करें)</h2>
      <p style={styles.sectionText}>
        We’re here to help with any questions or inquiries you may have about our products. Please reach out to us
        using the contact information below and we’ll get back to you as soon as possible.
      </p>

      {/* Contact Details */}
      <div style={styles.contactDetails}>
        <div style={styles.contactItem}>
          <h3 style={styles.contactTitle}>Address</h3>
          {/* <p> M P MARKET BAZAR NO 2 BHOPALGANJ, BHILWARA, Bhilwara -311001, Rajasthan</p> */}
          {/* Address link to open Google Maps */}
          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" style={styles.addressLink}>
            {address}
          </a>
        </div>

        <div style={styles.contactItem}>
          <h3 style={styles.contactTitle}>Phone</h3>
          <p>
            <a href="tel:+919413358220" style={styles.phoneLink}>+91 9413358220</a>
          </p>
          <p>
            <a href="tel:+919829848220" style={styles.phoneLink}>+91 9829848220</a>
          </p>
        </div>
        

        <div style={styles.contactItem}>
          <h3 style={styles.contactTitle}>Email</h3>
          <p>
            <a href="mailto:info@gondjadibutiwala.com" style={styles.emailLink}>info@gondjadibutiwala.com</a>
          </p>
        </div>
      </div>

      {showScrollUp && (
        <button onClick={scrollToTop} style={styles.scrollButton}>
          ↑ Scroll to Top
        </button>
      )}
      
    </section>
  );
};

const styles = {
  section: {
    padding: '20px 0',
    backgroundColor: '#F7D9C4',
    color: '#4A2E2A',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    color: '#7A4535',
    marginBottom: '20px',
  },
  sectionText: {
    fontSize: '1rem',
    color: '#4A2E2A',
    marginBottom: '20px',
  },
  contactDetails: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  contactItem: {
    marginBottom: '10px',
  },
  contactTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#7A4535',
    marginBottom: '5px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '500px',
    margin: '0 auto',
  },
  emailLink: {
    color: '#4A2E2A',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  label: {
    fontSize: '1rem',
    color: '#4A2E2A',
    marginBottom: '10px',
    width: '100%',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '10px',
    fontSize: '1rem',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '1rem',
    marginBottom: '10px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#7A4535',
    color: '#fff',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  phoneLink: {
    color: '#4A2E2A',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  scrollButton: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '10px 15px',
    backgroundColor: '#7A4535',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '1.2rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
};

export default ContactUs;
