"use client";
import { useState } from 'react';
import Breadcrumb from "@/components/Breadcrumb";
import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";

const page = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Fiber Optic Cable - Single Mode',
      price: 325.00,
      quantity: 1,
      image: 'assets/img/shop/product1.jpeg'
    },
    {
      id: 2,
      name: 'Industrial Network Switch',
      price: 185.00,
      quantity: 1,
      image: 'assets/img/shop/product2.jpeg'
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);
  const shippingCost = 10;

  const updateQuantity = (id, change) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === 'SAVE10') {
      setAppliedPromo({ code: promoCode, discount: 0.1 });
    } else {
      alert('Invalid promo code');
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = appliedPromo ? subtotal * appliedPromo.discount : 0;
  const total = subtotal - discount + shippingCost;

  return (
    <NetBandLayout>
      <Breadcrumb pageTitle={"Shop Cart"} />
      
      <section className="cart-section section-padding" style={{ background: 'linear-gradient(to bottom right, #f8fafc, #f1f5f9)', minHeight: '100vh' }}>
        <div className="container">
          {/* Header */}
          <div style={{ background: 'white', borderRadius: '16px', padding: '24px', marginBottom: '32px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>Shopping Cart</h1>
            <p style={{ color: '#64748b' }}>{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart</p>
          </div>

          <div className="row">
            {/* Cart Items */}
            <div className="col-lg-8">
              {cartItems.length === 0 ? (
                <div style={{ background: 'white', borderRadius: '16px', padding: '48px', textAlign: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#0f172a', marginBottom: '8px' }}>Your cart is empty</h3>
                  <p style={{ color: '#64748b' }}>Add some products to get started</p>
                </div>
              ) : (
                <>
                  {cartItems.map((item) => (
                    <div key={item.id} style={{ background: 'white', borderRadius: '16px', padding: '24px', marginBottom: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', transition: 'box-shadow 0.3s' }}>
                      <div style={{ display: 'flex', gap: '24px' }}>
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: '128px', height: '128px', objectFit: 'cover', borderRadius: '12px' }}
                        />
                        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                          <div>
                            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#0f172a', marginBottom: '8px' }}>{item.name}</h3>
                            <p style={{ fontSize: '24px', fontWeight: '700', color: '#2563eb' }}>${item.price.toFixed(2)}</p>
                          </div>
                          
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#f1f5f9', borderRadius: '8px', padding: '4px' }}>
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                disabled={item.quantity <= 1}
                                style={{ 
                                  width: '32px', 
                                  height: '32px', 
                                  display: 'flex', 
                                  alignItems: 'center', 
                                  justifyContent: 'center', 
                                  borderRadius: '6px', 
                                  background: 'white', 
                                  border: 'none',
                                  cursor: item.quantity <= 1 ? 'not-allowed' : 'pointer',
                                  opacity: item.quantity <= 1 ? 0.5 : 1
                                }}
                              >
                                <span style={{ fontSize: '18px' }}>−</span>
                              </button>
                              <span style={{ width: '48px', textAlign: 'center', fontWeight: '600', color: '#0f172a' }}>
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                style={{ 
                                  width: '32px', 
                                  height: '32px', 
                                  display: 'flex', 
                                  alignItems: 'center', 
                                  justifyContent: 'center', 
                                  borderRadius: '6px', 
                                  background: 'white', 
                                  border: 'none',
                                  cursor: 'pointer'
                                }}
                              >
                                <span style={{ fontSize: '18px' }}>+</span>
                              </button>
                            </div>

                            <button
                              onClick={() => removeItem(item.id)}
                              style={{ 
                                color: '#ef4444', 
                                background: 'transparent',
                                border: 'none',
                                padding: '8px',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontSize: '16px'
                              }}
                            >
                              ✕ Remove
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ color: '#64748b' }}>Subtotal</span>
                        <span style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a' }}>
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))}

                  {/* Promo Code */}
                  <div style={{ background: 'white', borderRadius: '16px', padding: '24px', marginBottom: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#0f172a', marginBottom: '16px' }}>
                      🏷️ Have a promo code?
                    </h3>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Enter promo code"
                        style={{ 
                          flex: '1', 
                          padding: '12px 16px', 
                          border: '1px solid #cbd5e1', 
                          borderRadius: '8px',
                          fontSize: '16px'
                        }}
                      />
                      <button
                        onClick={applyPromoCode}
                        style={{ 
                          padding: '12px 24px', 
                          background: '#0f172a', 
                          color: 'white', 
                          fontWeight: '600', 
                          borderRadius: '8px',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        Apply
                      </button>
                    </div>
                    {appliedPromo && (
                      <div style={{ marginTop: '12px', padding: '12px', background: '#dcfce7', border: '1px solid #86efac', borderRadius: '8px' }}>
                        <p style={{ color: '#166534', fontWeight: '500' }}>
                          ✓ Promo code "{appliedPromo.code}" applied! Save {appliedPromo.discount * 100}%
                        </p>
                      </div>
                    )}
                    <p style={{ fontSize: '14px', color: '#64748b', marginTop: '8px' }}>Try: SAVE10 for 10% off</p>
                  </div>
                </>
              )}
            </div>

            {/* Order Summary */}
            {cartItems.length > 0 && (
              <div className="col-lg-4">
                <div style={{ background: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', position: 'sticky', top: '24px' }}>
                  <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#0f172a', marginBottom: '24px' }}>Order Summary</h2>
                  
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b', marginBottom: '16px' }}>
                      <span>Subtotal</span>
                      <span style={{ fontWeight: '600', color: '#0f172a' }}>${subtotal.toFixed(2)}</span>
                    </div>
                    
                    {appliedPromo && (
                      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#16a34a', marginBottom: '16px' }}>
                        <span>Discount ({appliedPromo.discount * 100}%)</span>
                        <span style={{ fontWeight: '600' }}>-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b', marginBottom: '16px' }}>
                      <span>Shipping</span>
                      <span style={{ fontWeight: '600', color: '#0f172a' }}>${shippingCost.toFixed(2)}</span>
                    </div>
                    
                    <div style={{ paddingTop: '16px', borderTop: '2px solid #e2e8f0' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '18px', fontWeight: '600', color: '#0f172a' }}>Total</span>
                        <span style={{ fontSize: '32px', fontWeight: '700', color: '#2563eb' }}>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <Link 
                    href="/checkout" 
                   className="theme-btn"
                  >
                    Proceed to Checkout →
                  </Link>

                  <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid #e2e8f0' }}>
                    <h4 style={{ fontWeight: '600', color: '#0f172a', marginBottom: '12px' }}>We Accept</h4>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {['Visa', 'MC', 'Amex', 'PayPal'].map((method) => (
                        <div key={method} style={{ padding: '8px 12px', background: '#f1f5f9', borderRadius: '8px', fontSize: '12px', fontWeight: '500', color: '#64748b' }}>
                          {method}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </NetBandLayout>
  );
};

export default page;