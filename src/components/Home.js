// src/components/Home.js
import React from 'react';
import logo from '../assets/RR.jpg';


const Home = () => {
  return (
    <div style={styles.homeContainer}>
      <header style={styles.header}>
      <img src={logo} alt="Business Logo" style={styles.logo} />
        <h1 style={styles.welcomeText}>Welcome to Rodmal Rajesh Kumar Gond & Jadibuti Wala </h1>
        <h1 style={styles.welcomeText}>रोडमल राजेश कुमार गोंड और जड़ी-बूटी वाला में आपका स्वागत है।</h1>
      </header>
    </div>
  );
};

// Inline styling
const styles = {
  homeContainer: {
    padding: '20px',
    backgroundColor: '#F7D9C4',
    color: '#4A2E2A',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  logo: {
    width: '250px',
    height: 'auto',
    marginBottom: '10px',
  },
  welcomeText: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#7A4535',
  },
  section: {
    padding: '20px 0',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    color: '#7A4535',
    marginBottom: '10px',
  },
  sectionText: {
    fontSize: '1rem',
    color: '#4A2E2A',
    marginBottom: '10px',
  },
  contactButton: {
    display: 'inline-block',
    padding: '10px 15px',
    backgroundColor: '#7A4535',
    color: '#f7f3e9',
    textDecoration: 'none',
    borderRadius: '5px',
    marginTop: '10px',
  },
};

export default Home;
