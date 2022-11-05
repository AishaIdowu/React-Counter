import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div>
        <h2>404</h2>
        <p>Page not found</p>
        <button><Link to="/"> Back Home</Link></button>
    </div>
  )
}

export default ErrorPage