import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// components
import Header from './components/header';
import Footer from './components/footer';
import Homepage from './components/pages/homePage';
import Projects from './components/pages/projects';

// includes
import './Assets/css/default.min.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>

          <Route exact path="/" component={Homepage} />
          <Route exact path="/Projects" component={Projects} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
