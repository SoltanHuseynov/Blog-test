import React, {Component} from "react"
//import ReactMarkdown from "react-markdown"

//Pages
import About from "./pages/about"
import Framework from "./pages/Framework"
import Game from "./pages/Game"
import Language from "./pages/Language"
import Library from "./pages/lbrary"
import Blog from "./pages/blog"
import Runway from "./pages/runway"

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
                <Route exact path="/Framework" component={Framework}/>
                <Route path="/Game" component={Game}/>
                <Route path="/Language" component={Language}/>
                <Route path="/Library" component={Library}/>
                <Route path="/Blog" component={Blog}/>
                <Route path="/runway" component={Runway}/>
            </Router>
        )
    }
}
export default App