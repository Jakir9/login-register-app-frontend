import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './loginPage.css'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        throw new Error('Login failed')
      }

      // Show modal on success
      setShowModal(true)
      setTimeout(() => {
        navigate('/')
      }, 2000) // Redirect after 2 seconds
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="loginpage-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Login Successful</h2>
            <p>You are being redirected...</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default LoginPage
