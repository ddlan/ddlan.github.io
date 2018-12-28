import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Footer from './components/footer';
import Homepage from './components/pages/homePage';
import Projects from './components/pages/projects';
import NotFound from './components/pages/notFound';

// includes
import './Assets/css/default.min.css'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/Projects" component={Projects} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
