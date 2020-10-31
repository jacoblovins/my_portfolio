import React from 'react';
import './css/app.css';
import Navbar from './components/Navbar/Navbar';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer/Footer';



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
