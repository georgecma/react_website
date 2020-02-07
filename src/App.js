import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

/**
 * 
 * {!this.props.fullPage && <Nav />} -> cool shit, disables nav when not in fullpage mode 
 * 
 * 
 * 
 * */


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand navbar-light bg-light">
                        <ul className="navbar-nav mr-auto">
                            <li><Link to={'/'} className="nav-link"> Home </Link></li>
                            <li><Link to={'/about'} className="nav-link">About</Link></li>
                            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
                        </ul>
                    </nav>
                    <hr />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/about' component={About} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;