import React, { Component } from 'react';
import Header from '../header';

class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <Header />
        <div className="container-fluid">
          <h1>404, the page you are looking for was not found.</h1>
        </div>
      </div>
    );
  }
}

export default NotFound;
