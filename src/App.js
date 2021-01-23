import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'

import Footer from './components/Footer'
import ScrollBar from './components/ScrollBar'
import Homepage from './pages/HomePage/index'

const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/home" component={Homepage} />
                </Switch>
                <Footer />
                <ScrollBar />
            </Router>
        </div>
    )
}

export default App
