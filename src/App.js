import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Footer from './components/footer';
import Homepage from './components/pages/homePage';
import Projects from './components/pages/projects';
import NightBall from './components/pages/projects/nightball';
import BetterPD from './components/pages/projects/betterpd';
import Altocumulus from './components/pages/projects/altocumulus';
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
            <Route exact path="/Projects/NightBall" component={NightBall} />
            <Route exact path="/Projects/BetterPD" component={BetterPD} />
            <Route exact path="/Projects/Altocumulus" component={Altocumulus} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
