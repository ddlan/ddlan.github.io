import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Footer from './components/footer';
import Homepage from './components/pages/homePage';
import Projects from './components/pages/projects';
import NightBall from './components/pages/projects/nightball';
import InCite from './components/pages/projects/incite';
import Altocumulus from './components/pages/projects/altocumulus';
import Music from './components/pages/music';
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
            <Route exact path="/Projects/" component={Projects} />
            <Route exact path="/Projects/InCite/" component={InCite} />
            <Route exact path="/Projects/NightBall/" component={NightBall} />
            <Route exact path="/Projects/Altocumulus/" component={Altocumulus} />
            <Route exact path="/Music/" component={Music} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
