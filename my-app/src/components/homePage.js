import React from 'react'
import { Link } from 'react-router-dom'
import './homePage.css'

const HomePage = ({ isLoggedIn }) => {
  return (
    <div className={`homepage-container ${isLoggedIn ? 'logged-in' : ''}`}>
      <h1>Welcome to the Homepage</h1>
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <p>
          You are not logged in. Please <Link to="/login">log in</Link> or{' '}
          <Link to="/register">register</Link>.
        </p>
      )}
    </div>
  )
}

export default HomePage
