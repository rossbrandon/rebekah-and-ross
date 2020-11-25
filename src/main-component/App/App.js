import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Homepage from "../HomePage/index"
import Footer from "../../components/Footer"
import ScrollBar from "../../components/ScrollBar"
import "./App.css"

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
