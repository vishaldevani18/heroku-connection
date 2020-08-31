import React from 'react'
import Alert from 'react-bootstrap/Alert'
function NotFound() {
    return (
        <div className="container bg-light">
        <h1 className="m-5">404 Page not found</h1>
        <p className="m-5 p-3">
          This is the Wrong URL please enter valid url
        </p>

        <p>
        <Alert  variant="info">
  Make Sure That Your Url Must be in Small caps.
  </Alert>
        </p>
      </div>
    )
}

export default NotFound
