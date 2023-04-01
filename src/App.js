import React, {Component} from "react"
//import ReactMarkdown from "react-markdown"

//Pages
import About from "./pages/about"
import Framework from "./pages/Framework"
import Game from "./pages/Game"
import Language from "./pages/Language"
import Library from "./pages/lbrary"

import{
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom"

class App extends Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={About}/>
                <Route path="https://soltanhuseynov.org/Framework" component={Framework}/>
                <Route path="/Game" component={Game}/>
                <Route path="/Language" component={Language}/>
                <Route path="/Library" component={Library}/>
            </Router>
        )
    }
}
export default App