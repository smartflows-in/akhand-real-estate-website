import React from 'react';
import './Configurations.css';

const Configurations = () => {
  const configurations = [
    {
      type: '1 BHK',
      carpetArea: 'SQft',
      price: 'Rs 46 Lakhs* Onwards',
      priceBreakup: 'On reqst'
    },
    {
      type: '2 BHK',
      carpetArea: 'Sqft',
      price: 'Rs 68 Lakhs* Onwards',
      priceBreakup: 'On reqst'
    },
    {
      type: '3 BHK',
      carpetArea: 'Sqft',
      price: 'Rs 1.02 Cr* Onwards',
      priceBreakup: 'On reqst'
    },
    {
      type: 'Jodi Flat',
      carpetArea: 'Sqft',
      price: 'On Reqst',
      priceBreakup: 'On Reqst'
    }
  ];

  return (
    <section className="configurations-section">
      <div className="configurations-container">
        {/* Header */}
        <div className="configurations-header">
          <h2 className="configurations-title">
            Techton Akhand Configurations
          </h2>
          <div className="title-underline"></div>
        </div>

        {/* Table */}
        <div className="configurations-table-container">
          <table className="configurations-table">
            <thead>
              <tr>
                <th className="table-header">Type</th>
                <th className="table-header">Carpet Area</th>
                <th className="table-header">Price</th>
                <th className="table-header">Price Breakup</th>
              </tr>
            </thead>
            <tbody>
              {configurations.map((config, index) => (
                <tr key={index} className="table-row">
                  <td className="table-data type-cell">
                    <span className="type-badge">{config.type}</span>
                  </td>
                  <td className="table-data area-cell">{config.carpetArea}</td>
                  <td className="table-data price-cell">
                    <span className="price-amount">{config.price}</span>
                  </td>
                  <td className="table-data breakup-cell">
                    <button className="request-btn">
                      {config.priceBreakup}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Note */}
        <div className="table-footer">
          <p className="footer-note">
            *Prices are subject to change. Contact us for detailed breakdown and current availability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Configurations;