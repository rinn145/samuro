import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import './assets/fonts.css';


function ShoppingTable() {
  return (
    <div style={styles.mainContainer}>
      {/* Profile Section */}
      <div style={styles.profileSection}>
        <img src="profile-placeholder.png" alt="Profile Picture" style={styles.profileImage} />
        <div style={styles.nickname}>Nickname</div>
        <div style={styles.regDate}>Registration date:<br />11.11.2024</div>
      </div>
    
      {/* Shopping Section */}
      <div style={styles.shoppingSection}>
        <h2>My shopping</h2>
        <table style={styles.shoppingTable}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Order Number</th>
              <th>Description</th>
              <th>Seller</th>
              <th>Status</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {Array(5).fill().map((_, index) => (
              <tr key={index}>
                <td>11.11.2024, 20:23</td>
                <td>00895962</td>
                <td>
                  <strong>Bot telegram</strong><br />
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </td>
                <td>
                  <div style={styles.sellerImg}></div>
                  <span style={styles.sellerName}>IvanGenius</span>
                </td>
                <td><span style={styles.statusClosed}>Closed</span></td>
                <td>20$</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  mainContainer: {
    display: 'flex',
    width: '100%',
    maxWidth: '1000px',
    backgroundColor: '#fff',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '0 auto',
    marginTop: '30px',
  },
  profileSection: {
    width: '200px',
    textAlign: 'center',
    paddingRight: '20px',
    borderRight: '1px solid #e0e0e0',
  },
  profileImage: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: '#ccc',
    display: 'block',
    margin: '0 auto',
  },
  nickname: {
    fontSize: '1.2em',
    marginTop: '10px',
  },
  regDate: {
    color: '#777',
    marginTop: '5px',
  },
  shoppingSection: {
    flexGrow: 1,
    paddingLeft: '20px',
  },
  shoppingTable: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  sellerImg: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: '#ccc',
    display: 'inline-block',
    verticalAlign: 'middle',
    marginRight: '8px',
  },
  sellerName: {
    verticalAlign: 'middle',
  },
  statusClosed: {
    color: 'green',
    fontWeight: 'bold',
  },
};

export default ShoppingTable;
