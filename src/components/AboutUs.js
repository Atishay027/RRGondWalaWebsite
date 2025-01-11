// src/components/AboutUs.js
import React from 'react';
import logo from '../assets/shop.jpg';
import Factory from '../assets/Factory.jpg';

const AboutUs = () => {
  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.sectionTitle}>About Us</h2>
      <p style={styles.sectionText}>
        Established decades ago, Rodmal Rajesh Kumar Gond & Jadibuti Wala has been a trusted name in natural gums and herbal products.
        Specializing in sourcing and supplying the highest quality Katira Gum, Naigiriyan Gum, Desi Gond, and Herbs - Jadibutti like Satavari, Ashwagandha,Safed Musli and all other type also, we serve customers looking
        for traditional remedies and natural ingredients. Our commitment to quality and authenticity has made us a preferred choice for
        health-conscious individuals and herbal practitioners alike.
      </p>
      <p>      दशकों पहले स्थापित, रोडमल राजेश कुमार गोंद और जड़ी-बूटी वाला प्राकृतिक गोंद और हर्बल उत्पादों के क्षेत्र में एक विश्वसनीय नाम रहा है।
हम उच्च गुणवत्ता वाले कटिरा गोंद, नाइजीरियन गोंद, देसी गोंद, और जड़ी-बूटियों जैसे शतावरी, अश्वगंधा, सफेद मूसली और अन्य सभी प्रकार की जड़ी-बूटियों की आपूर्ति और खरीद में विशेषज्ञ हैं।
हम उन ग्राहकों को सेवा प्रदान करते हैं जो पारंपरिक उपचार और प्राकृतिक सामग्री की तलाश में हैं।
गुणवत्ता और प्रामाणिकता के प्रति हमारी प्रतिबद्धता ने हमें स्वास्थ्य के प्रति जागरूक व्यक्तियों और हर्बल विशेषज्ञों के लिए एक पसंदीदा विकल्प बना दिया है।</p>
      
      <p style={styles.sectionText}>
        With a deep understanding of Ayurvedic principles and a heritage of herbal expertise, we are dedicated to providing products
        that support natural health and wellness. Our products are carefully selected, ensuring that each item is pure and sourced
        ethically, preserving the natural potency and benefits.
      </p>
      <p> (आयुर्वेदिक सिद्धांतों की गहरी समझ और हर्बल विशेषज्ञता की विरासत के साथ, हम प्राकृतिक स्वास्थ्य और कल्याण का समर्थन करने वाले उत्पाद प्रदान करने के लिए समर्पित हैं। हमारे उत्पादों को सावधानीपूर्वक चुना जाता है, यह सुनिश्चित करते हुए कि प्रत्येक वस्तु शुद्ध है और नैतिक रूप से प्राप्त की गई है, जिससे उसकी प्राकृतिक शक्ति और लाभ संरक्षित रहें।)</p>


      {/* Shop Section */}
      <div style={styles.imageSection}>
        <img src={logo} alt="Bhilwara MP Mansion Shop" style={styles.image} />
        <p style={styles.address}>Shop Located At: - M P MARKET BAZAR NO 2 BHOPALGANJ, BHILWARA-311001, Rajasthan</p>
      </div>

      {/* Factory Tour Section */}
      <div style={styles.imageSection}>
        <img src={Factory} alt="Manufacturing Factory" style={styles.image} />
        <p style={styles.address}>Factory Located At: - Industrial Area, Haled - Jeetya Road , Bhilwara, Rajasthan</p>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '20px 0',
    backgroundColor: '#FBEDE5',
    color: '#4A2E2A',
    textAlign: 'center',
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
  imageSection: {
    margin: '20px 0',
    textAlign: 'center',
  },
  image: {
    width: '80%',
    maxWidth: '600px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  address: {
    fontSize: '0.9rem',
    color: '#4A2E2A',
    marginTop: '8px',
  },
};

export default AboutUs;
