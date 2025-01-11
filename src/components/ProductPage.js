import React, { useState } from 'react';
import KatiraGond from '../images/KatiraGond.jpg';
import Baheda from '../images/baheda.png';
import NaijriyanGond from '../images/NaijriyanGond.jpg';
import DesiGond from '../images/DesiGond.png';
import KamarkasGond from '../images/Kamarkas-gond.jpg';
import Satavari from '../images/shatavari.jpg';
import BabulGond from '../images/BabulGond.jpg';
import Ashwagandha from '../images/Ashwaganda.jpg';
import Lond from '../images/Lodh.jpg';
import Kayfhal from '../images/kaiphal.jpg';
import Aavla from '../images/amla.png';
import Medalakdi from '../images/maidaLakdi.jpg';
import SafedMusli from '../images/safeedmusli.jpg';
import KochBeej from '../images/KochBeej.png';

const products = [
  { id: 1, name: 'Katira Gond (कतिरा गोंद)', image: KatiraGond, description: 'Katira Gond is known for its cooling properties and is often used in traditional remedies. (कतीरा गोंद अपने ठंडक देने वाले गुणों के लिए जाना जाता है और अक्सर पारंपरिक उपचारों में उपयोग किया जाता है।) ', price: ' 150-400/kg', rate: '150-400 per kg (All types of Price Range available)', contact: '+91 - 9413358220 / 9829848220', address: 'M P MARKET BAZAR NO 2 BHOPALGANJ, BHILWARA, Bhilwara -311001, Rajasthan' },
  { id: 2, name: 'Naigiriyan Gond (नाइगीरियन गोंद)', image: NaijriyanGond, description: 'Naigiriyan Gond is valued for its medicinal properties and usage in various Ayurvedic preparations. (नैगीरियन गोंद को इसकी औषधीय गुणों और विभिन्न आयुर्वेदिक तैयारियों में उपयोग के लिए बहुत महत्व दिया जाता है।)', price: '150-400/kg', rate: '150-400 per kg (All types of Price Range available) ', contact: '+91 - 9413358220 / 9829848220', address: 'M P MARKET BAZAR NO 2 BHOPALGANJ, BHILWARA, Bhilwara -311001, Rajasthan' },
  { id: 3, name: 'Dhavda-Desi Gond (धवड़ा-देसी गोंद)', image: DesiGond, description: 'Dhavda Gond is a natural resin used in traditional cooking and health remedies. (धवड़ा गोंद एक प्राकृतिक रेजिन है, जिसका उपयोग पारंपरिक खाना पकाने और स्वास्थ्य उपचारों में किया जाता है।)', price: '200-1300/kg', rate: '200-1300 per kg (All types of Price Range available)', contact: '+91 - 9413358220 / 9829848220', address: 'M P MARKET BAZAR NO 2 BHOPALGANJ, BHILWARA, Bhilwara -311001, Rajasthan' },
  { id: 4, name: 'Kamarkas Gond (कमरकस गोंद)', image:KamarkasGond, description: 'Kamarkas Gond is known for its benefits in strengthening muscles and is popular in traditional foods. (कमरकस गोंद अपने मांसपेशियों को मजबूत करने के लाभों के लिए जाना जाता है और यह पारंपरिक खाद्य पदार्थों में प्रचलित है।)', price: ' 300-400/kg', rate: ' 300-400 per kg (All types of Price Range available)', contact: '+91 - 9413358220 / 9829848220', address: 'M P MARKET BAZAR NO 2 BHOPALGANJ, BHILWARA, Bhilwara -311001, Rajasthan' },
  { id: 5, name: 'Babul Gond (बबूल गोंद)', image:BabulGond, description: 'Babul Gond is commonly used in Ayurvedic treatments and known for its health benefits. (बबूल गोंद का आयुर्वेदिक उपचारों में सामान्य उपयोग होता है और इसके स्वास्थ्य लाभ प्रसिद्ध हैं।)', price: '150-250/kg', rate: '150-250 per kg (All types of Price Range available)', contact: '+91 - 9413358220 / 9829848220', address: 'M P MARKET BAZAR NO 2 BHOPALGANJ, BHILWARA, Bhilwara -311001, Rajasthan' },
  // Existing products

  { id: 10, name: 'Satavari (सतावरी)', image:Satavari, description: 'Satavari is known to help with boosting immunity and improving vitality. (सतावरी इम्यूनिटी को बढ़ाने और जीवन शक्ति को सुधारने में मदद करती है।)', price: '340-400/kg', rate: '340-400 per kg (All types of Price Range available)', contact: '+91 - 9413358220 / 9829848220', address: 'M P MARKET BAZAR NO 2 BHOPALGANJ, BHILWARA, Rajasthan' },
  { id: 11, name: 'Ashwagandha (अश्वगंधा)', image:Ashwagandha , description: 'Ashwagandha is an adaptogen that helps the body manage stress. (अश्वगंधा एक एडाप्टोजेन है जो शरीर को तनाव से निपटने में मदद करता है।)', price: '350-500/kg', rate: '350-4500 per kg (All types of Price Range available)', contact: '+91 - 9413358220 / 9829848220', address: 'M P MARKET BAZAR NO 2 BHOPALGANJ, BHILWARA, Rajasthan' },
  { id: 12, name: 'Lond (लोंद)', image:Lond, description: 'Lond is commonly used in Ayurvedic treatments for digestive health. (लोंड जड़ीबूटी का उपयोग आमतौर पर आयुर्वेदिक उपचारों में पाचन स्वास्थ्य को सुधारने के लिए किया जाता है। यह पेट की समस्याओं को दूर करने, अपच और गैस की समस्या को कम करने में मदद करती है।)', price: '90-150/kg', rate: '90-150 per kg (All types of Price Range available)', contact: '+91 - 9413358220 / 9829848220', address: 'M P MARKET BAZAR NO 2 BHOPALGANJ, BHILWARA, Rajasthan' },
  { id: 13, name: 'Kayfhal (कायफल)', image:Kayfhal, description: 'Kayfhal is traditionally used in herbal remedies and is known for its various health benefits. ( कायफल पारंपरिक रूप से हर्बल उपचारों में उपयोग किया जाता है और इसके विभिन्न स्वास्थ्य लाभ होते हैं।)', price: '80-105/kg', rate: '80-105 per kg (All types of Price Range available)', contact: '+91 - 9413358220 / 9829848220', address: 'M P MARKET BAZAR NO 2 BHOPALGANJ, BHILWARA, Bhilwara -311001, Rajasthan' },
  { id: 14, name: 'Baheda (बहेड़ा)', image: Baheda, description: 'Baheda is known for its positive effects on respiratory health. (बहेड़ा श्वसन स्वास्थ्य पर इसके सकारात्मक प्रभाव के लिए जाना जाता है। यह खांसी, अस्थमा और अन्य श्वसन समस्याओं को दूर करने में मदद करता है और फेफड़ों को स्वस्थ रखने में सहायक है।)', price: '50/kg', rate: '50 per kg (All types of Price Range available)', contact: '+91 - 9413358220 / 9829848220', address: 'M P MARKET BAZAR NO 2 BHOPALGANJ, BHILWARA, Rajasthan' },
  { id: 15, name: 'Aavla (आवला)', image:Aavla, description: 'Aavla, or Indian gooseberry, is high in Vitamin C and beneficial for immunity. (आंवला, या भारतीय गूसबेरी, विटामिन C से भरपूर होता है और इम्यूनिटी के लिए लाभकारी है।)', price: '85-120/kg', rate: '85-120 per kg (All types of Price Range available)', contact: '+91 - 9413358220 / 9829848220', address: 'M P MARKET BAZAR NO 2 BHOPALGANJ, BHILWARA, Rajasthan' },
  { id: 16, name: 'Medalakdi (मेदलाकड़ी)', image:Medalakdi, description: 'Medalakdi is often used in herbal remedies for skin health. (मेड़लाकड़ी का उपयोग अक्सर त्वचा स्वास्थ्य के लिए हर्बल उपचारों में किया जाता है। यह त्वचा की समस्याओं को दूर करने, जलन को कम करने और त्वचा को मुलायम और स्वस्थ बनाने में सहायक होता है।)', price: '80-120/kg', rate: '80-120 per kg (All types of Price Range available)', contact: '+91 - 9413358220 / 9829848220', address: 'M P MARKET BAZAR NO 2 BHOPALGANJ, BHILWARA, Rajasthan' },
  { id: 17, name: 'Safed Musli (सफेद मूसली)', image:SafedMusli, description: 'Safed Musli is valued for its aphrodisiac properties in Ayurveda. (सफेद मुसली आयुर्वेद में अपने वीर्यवर्धक गुणों के लिए प्रतिष्ठित है। यह पुरुषों की सेक्सुअल स्वास्थ्य को सुधारने, ऊर्जा बढ़ाने और शारीरिक ताकत को बढ़ावा देने में मदद करता है।)', price: '1500-2500/kg', rate: '1500-2500 per kg (All types of Price Range available)', contact: '+91 - 9413358220 / 9829848220', address: 'M P MARKET BAZAR NO 2 BHOPALGANJ, BHILWARA, Rajasthan' },
  { id: 18, name: 'Koch Beej (कोच बीज)', image: KochBeej, description: 'Koch Beej is used to enhance overall stamina and vitality. (कोच बीज का उपयोग संपूर्ण सहनशक्ति और जीवनशक्ति को बढ़ाने के लिए किया जाता है। यह शरीर को ऊर्जा प्रदान करता है और थकावट को दूर करने में मदद करता है।)', price: '90/kg', rate: '90 per kg (All types of Price Range available)', contact: '+91 - 9413358220 / 9829848220', address: 'M P MARKET BAZAR NO 2 BHOPALGANJ, BHILWARA, Rajasthan' },
];

const gondProducts = products.slice(0, 5); // Adjusted to include the 5 gond products
const jadibuttiProducts = products.slice(5); // Remaining products

const ProductPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleLearnMore = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section id="products" style={styles.pageContainer}>
      <h2 style={styles.title}>Our Products</h2>

      <h3 style={{ ...styles.categoryTitle, backgroundColor: '#F7D9C4' }}>Natural Gums - Gonds (गोंद)</h3>
      <div style={styles.productGrid}>
        {gondProducts.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <img src={product.image} alt={product.name} style={styles.productImage} />
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.productDescription}>{product.description}</p>
            <p style={styles.productPrice}>Rate: {product.price}</p>
            <button style={styles.button} onClick={() => handleLearnMore(product)}>Learn More (अधिक जानें)</button>
          </div>
        ))}
      </div>
      <p style={styles.closingMessage}>All Other Types Of Gonds and Jadibutti Products Are Also Available (सभी प्रकार के गोंद और जड़ी-बूटी उत्पाद भी उपलब्ध हैं।)</p>
       {/* The message to be underlined and scrollable */}
       <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <a href="#contact" style={{ textDecoration: 'underline' }}>
          So contact us or visit the shop store
        </a>
      </div>
      <hr style={styles.divider} />

      <h3 style={{ ...styles.categoryTitle, backgroundColor: '#F7D9C4' }}>Herbs - Jadibutti (जड़ी-बूटी)</h3>
      <div style={styles.productGrid}>
        {jadibuttiProducts.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <img src={product.image} alt={product.name} style={styles.productImage} />
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.productDescription}>{product.description}</p>
            <p style={styles.productPrice}>Rate: {product.price}</p>
            <button style={styles.button} onClick={() => handleLearnMore(product)}>Learn More (अधिक जानें)</button>
          </div>
        ))}
      </div>
      <hr style={styles.divider} />

      <p style={styles.closingMessage}>All Other Types Of Gonds and Jadibutti Products Are Also Available (सभी प्रकार के गोंद और जड़ी-बूटी उत्पाद भी उपलब्ध हैं।)</p>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <a href="#contact" style={{ textDecoration: 'underline' }}>
          So contact us or visit the shop store
        </a>
      </div>

      {selectedProduct && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <button style={styles.closeButton} onClick={handleCloseModal}>X</button>
            <img src={selectedProduct.image} alt={selectedProduct.name} style={styles.modalImage} />
            <h3 style={styles.modalTitle}>{selectedProduct.name}</h3>
            <p style={styles.modalDescription}>{selectedProduct.description}</p>
            <p><strong>Current Rate:</strong> {selectedProduct.rate}</p>
            <p><strong>Contact:</strong> {selectedProduct.contact}</p>
            <p><strong>Address:</strong> {selectedProduct.address}</p>
          </div>
        </div>
      )}
    </section>
  );
};

const styles = {
  pageContainer: {
    padding: '40px 20px',
    backgroundColor: '#f9f7f4',
    color: '#4A2E2A',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    color: '#7A4535',
    marginBottom: '20px',
  },
  categoryTitle: {
    fontSize: '1.5rem',
    color: '#4A2E2A',
    margin: '20px 0',
    padding: '10px',
    borderRadius: '8px',
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    padding: '0 20px',
  },
  productCard: {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  productImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  productName: {
    fontSize: '1.2rem',
    color: '#7A4535',
    margin: '10px 0',
  },
  productDescription: {
    fontSize: '0.9rem',
    color: '#4A2E2A',
  },
  productPrice: {
    fontSize: '1rem',
    color: '#8A6343',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  button: {
    padding: '8px 16px',
    backgroundColor: '#7A4535',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  divider: {
    margin: '20px auto',
    width: '80%',
    borderTop: '2px solid #d3d3d3',
  },
  closingMessage: {
    fontSize: '1rem',
    color: '#7A4535',
    fontWeight: 'bold',
    marginTop: '20px',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    width: '80%',
    maxWidth: '500px',
    textAlign: 'center',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    color:'black',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    fontSize: '2rem',
    cursor: 'pointer',
  },
  modalImage: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '10px',

  },
  modalTitle: {
    fontSize: '1.5rem',
    color: '#7A4535',
    marginBottom: '10px',
  },
  modalDescription: {
    fontSize: '1rem',
    color: '#4A2E2A',
    marginBottom: '10px',
  },
};

export default ProductPage;
