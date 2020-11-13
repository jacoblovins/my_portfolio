import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, HashRouter as Router, Switch } from 'react-router-dom'
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer/Footer';
import './css/app.css';



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={About} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
