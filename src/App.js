import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// components
import Header from './components/header';
import Footer from './components/footer';
import Homepage from './components/pages/homePage';
import About from './components/pages/about';
import Projects from './components/pages/projects';

// includes
import './Assets/css/default.min.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homepage: true,
    }

    this.handler = this.handleHomepage.bind(this)
  }

  handleHomepage = (e, isHomepage) => {
    //e.preventDefault()
    this.setState({
      homepage: isHomepage
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header handler={this.handleHomepage} homepage={this.state.homepage}/>

          <Route exact path="/" component={Homepage} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Projects" component={Projects} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
