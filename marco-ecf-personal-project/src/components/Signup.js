
import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { NavLink } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

function Signup() {
  const auth = getAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);

      const userCredential = await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
      const user = userCredential.user;
      console.log('Signup success:', user);

      // Signup in React context
      if (signup) {
        await signup(emailRef.current.value, passwordRef.current.value);
      } else {
        setError("Signup function not available");
      }
    } catch (error) {
      console.error("Failed to create an account", error.message);
      setError("Failed to create an account");
    }

    setLoading(false);
  };

  return (

    <div className="auth-form-container">
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password" ref={passwordConfirmRef} required />
              </Form.Group>
              <Button disabled={loading} className="w-100" type="submit">Sign-Up</Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account?{" "}
          <NavLink className={({ isActive }) => isActive ? "active nav-link" : "nav-link"} to="/login">Login</NavLink>
        </div>
      </div>
  );
}

export default Signup;
