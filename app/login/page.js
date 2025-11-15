"use client"
import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Eye, EyeOff, Mail, User } from 'lucide-react';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign up with:', { email, password });
    // Add your sign-up logic here
  };

  const styles = {
    container: {
      minHeight: '100vh',
      padding: 0,
      maxWidth: '100%',
    },
    formSide: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      background: 'white',
    },
    formContainer: {
      maxWidth: '440px',
      width: '100%',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
   
    },
    logoIcon: {
      width: '40px',
      height: '40px',
      background: '#2563eb',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    logoIconInner: {
      width: '24px',
      height: '24px',
      border: '2px solid white',
      borderRadius: '2px',
      transform: 'rotate(45deg)',
    },
    logoText: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#111827',
    },
    subtitle: {
      color: '#6b7280',
      fontSize: '0.875rem',
      marginBottom: '0.5rem',
    },
    title: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '1.5rem',
    },
    label: {
      fontSize: '0.875rem',
      fontWeight: '500',
      marginBottom: '0.5rem',
    },
    labelEmail: {
      color: 'black',
    },
    labelPassword: {
      color: '#6b7280',
    },
    inputWrapper: {
      position: 'relative',
    },
    input: {
      paddingRight: '2.5rem',
      borderRadius: '8px',
      border: '1px solid #d1d5db',
    },
    icon: {
      position: 'absolute',
      right: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#9ca3af',
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      padding: 0,
      display: 'flex',
      alignItems: 'center',
    },
    signUpBtn: {
      width: '100%',
      padding: '0.75rem',
      background: '#2563eb',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1rem',
      fontWeight: '500',
      marginTop: '0.5rem',
    },
    signInLink: {
      textAlign: 'center',
      marginTop: '1.5rem',
      color: '#6b7280',
    },
    signInLinkA: {
      color: '#2563eb',
      fontWeight: '500',
      textDecoration: 'none',
    },
    backgroundSide: {
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #60a5fa 0%, #c084fc 50%, #f9a8d4 100%)',
      minHeight: '100vh',
    },
    bubble: {
      position: 'absolute',
      borderRadius: '50%',
    },
    bubble1: {
      width: '256px',
      height: '256px',
      top: '80px',
      left: '80px',
      background: 'rgba(255, 255, 255, 0.2)',
      filter: 'blur(60px)',
    },
    bubble2: {
      width: '384px',
      height: '384px',
      bottom: '80px',
      right: '80px',
      background: 'rgba(59, 130, 246, 0.3)',
      filter: 'blur(60px)',
    },
    bubble3: {
      width: '600px',
      height: '600px',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.4), transparent)',
      filter: 'blur(50px)',
    },
    bubbleSmall1: {
      width: '16px',
      height: '16px',
      top: '25%',
      right: '25%',
      background: 'rgba(255, 255, 255, 0.6)',
    },
    bubbleSmall2: {
      width: '12px',
      height: '12px',
      top: '33%',
      right: '33%',
      background: 'rgba(255, 255, 255, 0.4)',
    },
    bubbleSmall3: {
      width: '20px',
      height: '20px',
      bottom: '25%',
      left: '25%',
      background: 'rgba(255, 255, 255, 0.5)',
    },
    bubbleSmall4: {
      width: '8px',
      height: '8px',
      bottom: '33%',
      right: '50%',
      background: 'rgba(255, 255, 255, 0.7)',
    },
    bubbleSmall5: {
      width: '24px',
      height: '24px',
      top: '50%',
      right: '25%',
      background: 'rgba(255, 255, 255, 0.3)',
    },
    overlay1: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(45deg, transparent, rgba(37, 99, 235, 0.2), transparent)',
      transform: 'rotate(45deg)',
    },
    overlay2: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(225deg, rgba(244, 114, 182, 0.2), transparent, rgba(59, 130, 246, 0.2))',
    },
  };

  return (
    <Container fluid style={styles.container}>
      <Row className="g-0">
        {/* Left Side - Form */}
        <Col lg={6} style={styles.formSide}>
          <div style={styles.formContainer}>
            {/* Logo */}
            <div style={styles.logo}>
              <div>
                <img src={'/assets/img/logo/infraKabelLogo.png'} width={200} height={80} />
              </div>
            </div>

            {/* Form Content */}
            <div>
         
              <h1 style={styles.title}>Sign In to InfraKabel</h1>

              <Form onSubmit={handleSubmit}>


                {/* Email Input */}
                <Form.Group className="mb-3">
                  <Form.Label style={{ ...styles.label, ...styles.labelEmail }}>
                    E-mail
                  </Form.Label>
                  <div style={styles.inputWrapper}>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      style={styles.input}
                      required
                    />
                    <span style={styles.icon}>
                      <Mail size={20} />
                    </span>
                  </div>
                </Form.Group>

                {/* Password Input */}
                <Form.Group className="mb-3">
                  <Form.Label style={{ ...styles.label, ...styles.labelPassword }}>
                    Password
                  </Form.Label>
                  <div style={styles.inputWrapper}>
                    <Form.Control
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      style={styles.input}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={styles.icon}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </Form.Group>

                

                {/* Sign Up Button */}
                <Button
                  type="submit"
                  style={styles.signUpBtn}
                  onMouseOver={(e) => e.target.style.background = '#1d4ed8'}
                  onMouseOut={(e) => e.target.style.background = '#2563eb'}
                >
                  Sign In
                </Button>
              </Form>

              {/* Sign In Link */}
              <div style={styles.signInLink}>
                <p>
                Don't have an account?{' '}
                  <a href="register" style={styles.signInLinkA}>
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Col>

        {/* Right Side - Background */}
         <Col 
  lg={6} 
  className="d-none d-lg-block"
  style={{
    padding: 0,
    margin: 0,
  }}
>
  <img 
    src="/assets/img/login/p7.jpg"
    style={{
      width: "100%",
      height: "100vh",
      objectFit: "cover",
      display: "block",
    }}
  />
</Col>
      </Row>
    </Container>
  );
}