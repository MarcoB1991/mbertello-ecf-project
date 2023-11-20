
import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import ForgotPassword from "./ForgotPassword";
import { useAuth } from "../context/AuthContext";

function Login() {
  const history = useNavigate();
  const auth = getAuth();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Login success:', user);
      await login(emailRef.current.value, passwordRef.current.value);
      history("/"); // Redirect after login
    } catch (error) {
      setError('Failed to log in');
    }

    setLoading(false);
  };

  return (
    <>
        <div className="auth-form-container">
            <Card>
              <Card.Body>
                <h2 className="text-center mb-4">Login</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleLogin}>
                  <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required value={email} onChange={(e) => setEmail(e.target.value)} />
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required value={password} onChange={(e) => setPassword(e.target.value)} />
                  </Form.Group>
                  <Button disabled={loading} className="w-100" type="submit">Login</Button>
                  <Button variant="link" onClick={() => setShowForgotPassword(true)}>Forgot Password?</Button>
                </Form>
              </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
              Need an account?
              <NavLink className={({ isActive }) => isActive ? "active nav-link" : "nav-link"} to="/signup">Sign-up</NavLink>
            </div>
          </div>
      )

      {/* Show ForgotPassword component if showForgotPassword is true */}
      {showForgotPassword && <ForgotPassword onClose={() => setShowForgotPassword(false)} />}
    </>
  );
}

export default Login;
