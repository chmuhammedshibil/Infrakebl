"use client";
import { useState } from 'react';
import Breadcrumb from "@/components/Breadcrumb";
import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";
import { FaCreditCard, FaCcVisa, FaCcMastercard, FaBolt } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { SiPayoneer } from "react-icons/si";

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("Credit/Debit Cards");
  const [billingInfo, setBillingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    address: ''
  });
  const [cardInfo, setCardInfo] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: ''
  });
  const [saveCard, setSaveCard] = useState(false);

  // Order summary data (this would come from your cart)
  const orderSummary = {
    subtotal: 510.00,
    shipping: 10.00,
    discount: 51.00,
    total: 469.00
  };

  const paymentMethods = [
    { id: 'credit', name: 'Credit/Debit Cards', icon: <FaCreditCard size={28} /> },
    { id: 'paypal', name: 'PayPal', icon: <FaPaypal size={28} /> },
    { id: 'visa', name: 'Visa', icon: <FaCcVisa size={28} /> },
    { id: 'mastercard', name: 'Mastercard', icon: <FaCcMastercard size={28} /> },
    { id: 'payoneer', name: 'Payoneer', icon: <SiPayoneer size={28} /> },
    { id: 'fastpay', name: 'Fastpay', icon: <FaBolt size={28} /> }
  ];

  const handleInputChange = (e, type) => {
    const { name, value } = e.target;
    if (type === 'billing') {
      setBillingInfo(prev => ({ ...prev, [name]: value }));
    } else if (type === 'card') {
      setCardInfo(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Payment processing... This is a demo!');
  };

  return (
    <NetBandLayout>
      <Breadcrumb pageTitle={"Checkout"} />
      
      <section style={{ background: 'linear-gradient(to bottom right, #f8fafc, #f1f5f9)', minHeight: '100vh', padding: '60px 0' }}>
        <div className="container">
          {/* Header */}
          <div style={{ background: 'white', borderRadius: '16px', padding: '24px', marginBottom: '32px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>Secure Checkout</h1>
            <p style={{ color: '#64748b' }}>Complete your purchase securely</p>
          </div>

          <div className="row">
            {/* Main Checkout Form */}
            <div className="col-lg-8">
              {/* Payment Method Selection */}
              <div style={{ background: 'white', borderRadius: '16px', padding: '24px', marginBottom: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#0f172a', marginBottom: '20px' }}>
                   Payment Method
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px' }}>
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setPaymentMethod(method.name)}
                      style={{
                        padding: '16px',
                        border: paymentMethod === method.name ? '2px solid #2563eb' : '2px solid #e2e8f0',
                        borderRadius: '12px',
                        background: paymentMethod === method.name ? '#eff6ff' : 'white',
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <span style={{ fontSize: '24px' }}>{method.icon}</span>
                      <span style={{ 
                        fontSize: '14px', 
                        fontWeight: paymentMethod === method.name ? '600' : '500',
                        color: paymentMethod === method.name ? '#2563eb' : '#64748b'
                      }}>
                        {method.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Billing Address */}
              <div style={{ background: 'white', borderRadius: '16px', padding: '24px', marginBottom: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#0f172a', marginBottom: '20px' }}>
                   Billing Address
                </h3>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#64748b', marginBottom: '8px' }}>
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={billingInfo.firstName}
                      onChange={(e) => handleInputChange(e, 'billing')}
                      placeholder="Enter First Name"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #cbd5e1',
                        borderRadius: '8px',
                        fontSize: '16px'
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#64748b', marginBottom: '8px' }}>
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={billingInfo.lastName}
                      onChange={(e) => handleInputChange(e, 'billing')}
                      placeholder="Enter last name"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #cbd5e1',
                        borderRadius: '8px',
                        fontSize: '16px'
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#64748b', marginBottom: '8px' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={billingInfo.email}
                      onChange={(e) => handleInputChange(e, 'billing')}
                      placeholder="Enter your email"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #cbd5e1',
                        borderRadius: '8px',
                        fontSize: '16px'
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#64748b', marginBottom: '8px' }}>
                      Country *
                    </label>
                    <select
                      name="country"
                      value={billingInfo.country}
                      onChange={(e) => handleInputChange(e, 'billing')}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #cbd5e1',
                        borderRadius: '8px',
                        fontSize: '16px',
                        background: 'white'
                      }}
                    >
                      <option value="">Select Country</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="CA">Canada</option>
                      <option value="AU">Australia</option>
                      <option value="IN">India</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#64748b', marginBottom: '8px' }}>
                      Address *
                    </label>
                    <textarea
                      name="address"
                      value={billingInfo.address}
                      onChange={(e) => handleInputChange(e, 'billing')}
                      placeholder="Street address, apartment, suite, etc."
                      rows="3"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #cbd5e1',
                        borderRadius: '8px',
                        fontSize: '16px',
                        resize: 'vertical'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Card Information */}
              <div style={{ background: 'white', borderRadius: '16px', padding: '24px', marginBottom: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#0f172a', marginBottom: '8px' }}>
                  Card Information
                </h3>
                <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '20px' }}>
                  Payment method: <strong style={{ color: '#2563eb' }}>{paymentMethod}</strong>
                </p>
                <div className="row g-3">
                  <div className="col-12">
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#64748b', marginBottom: '8px' }}>
                      Card Number *
                    </label>
                    <input
                      type="text"
                      name="number"
                      value={cardInfo.number}
                      onChange={(e) => handleInputChange(e, 'card')}
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #cbd5e1',
                        borderRadius: '8px',
                        fontSize: '16px'
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#64748b', marginBottom: '8px' }}>
                      Expiry Date *
                    </label>
                    <input
                      type="text"
                      name="expiry"
                      value={cardInfo.expiry}
                      onChange={(e) => handleInputChange(e, 'card')}
                      placeholder="MM/YY"
                      maxLength="5"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #cbd5e1',
                        borderRadius: '8px',
                        fontSize: '16px'
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#64748b', marginBottom: '8px' }}>
                      CVC / CVV *
                    </label>
                    <input
                      type="text"
                      name="cvc"
                      value={cardInfo.cvc}
                      onChange={(e) => handleInputChange(e, 'card')}
                      placeholder="123"
                      maxLength="3"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #cbd5e1',
                        borderRadius: '8px',
                        fontSize: '16px'
                      }}
                    />
                  </div>
                  <div className="col-12">
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#64748b', marginBottom: '8px' }}>
                      Name on Card *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={cardInfo.name}
                      onChange={(e) => handleInputChange(e, 'card')}
                      placeholder="Enter name from card"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #cbd5e1',
                        borderRadius: '8px',
                        fontSize: '16px'
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input
                    type="checkbox"
                    id="saveCard"
                    checked={saveCard}
                    onChange={(e) => setSaveCard(e.target.checked)}
                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                  <label htmlFor="saveCard" style={{ fontSize: '14px', color: '#64748b', cursor: 'pointer' }}>
                    Save this card for future purchases
                  </label>
                </div>
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="col-lg-4">
              <div style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', position: 'sticky', top: '24px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '24px' }}>
                  Order Summary
                </h3>

                <div style={{ marginBottom: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b', marginBottom: '16px' }}>
                    <span>Subtotal</span>
                    <span style={{ fontWeight: '600', color: '#0f172a' }}>${orderSummary.subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#16a34a', marginBottom: '16px' }}>
                    <span>Discount</span>
                    <span style={{ fontWeight: '600' }}>-${orderSummary.discount.toFixed(2)}</span>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b', marginBottom: '16px' }}>
                    <span>Shipping</span>
                    <span style={{ fontWeight: '600', color: '#0f172a' }}>${orderSummary.shipping.toFixed(2)}</span>
                  </div>
                  
                  <div style={{ paddingTop: '16px', borderTop: '2px solid #e2e8f0', marginBottom: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '18px', fontWeight: '600', color: '#0f172a' }}>Total</span>
                      <span style={{ fontSize: '32px', fontWeight: '700', color: '#2563eb' }}>${orderSummary.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  style={{
                    width: '100%',
                    background: '#2563eb',
                    color: 'white',
                    fontWeight: '600',
                    padding: '16px',
                    borderRadius: '12px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                   Complete Payment
                </button>

                <div style={{ marginTop: '16px', padding: '12px', background: '#f1f5f9', borderRadius: '8px', textAlign: 'center' }}>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>
                     Your payment information is secure and encrypted
                  </p>
                </div>

                <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid #e2e8f0' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#0f172a', marginBottom: '12px' }}>
                    Order Details
                  </h4>
                  <div style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.8' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span>Premium Headphones</span>
                      <span>$325.00</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Smart Watch Series 5</span>
                      <span>$185.00</span>
                    </div>
                  </div>
                </div>

                <Link 
                  href="/shop-cart"
                  style={{
                    display: 'block',
                    marginTop: '20px',
                    padding: '12px',
                    textAlign: 'center',
                    color: '#2563eb',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '500',
                    borderRadius: '8px',
                    transition: 'background 0.3s'
                  }}
                >
                  ← Back to Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </NetBandLayout>
  );
};

export default CheckoutPage;