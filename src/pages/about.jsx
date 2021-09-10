import React, {Component} from "react"
//import ReactMarkdown from "react-markdown"
import {Text} from "../data/main"
import { CloseNav,OpenNav } from "../SideBar"

import {social} from "../api/data.json"

class About extends Component{
    constructor(props){
        super(props)
       this.open = this.open.bind(this);
       this.close= this.close.bind(this);
       this.state={
           isLoggedIn:true,
           display:"",
           marginLeft:"",
           topBar:""
       } 
    }
    open(){
        this.setState({
            isLoggedIn:false,
            display:"block",
            marginLeft:"290px",
            topBar:"none"
        })
    }
    close(){
        this.setState({
            isLoggedIn:true,
            display:"none",
            marginLeft:"0px",
            topBar:"block"
        })
    }
    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
        button = <OpenNav onClick={this.open} />;
        } else {
        button = <CloseNav onClick={this.close} />;
        }
        return (
            <div className="win">
                <div className="len-bar" style={{display:this.state.topBar}}>-</div>
                <div className="length-bar" style={{display:this.state.display}}>
                    <div className="bar-name">
                        <img src="../log/logo.png" width="200px"></img>
                        <p>Soltan H</p>
                    </div>
                    
                    <ul className="bar-set">
                        <li><a  style={{color:"white"}} href="/" >Biyografia  <i className="fas fa-user"></i></a></li> 
                        <li><a href="/Framework">Framework <i className="fas fa-brackets-curly"></i></a></li>
                        <li><a href="/Language">Languages <i  className="fas fa-laptop-code"></i></a> </li>
                        <li><a href="/Library">Library <i  className="fal fa-books"></i></a></li>
                        <li><a href="/Game">Game <i className="fas fa-gamepad"></i></a></li>
   
                    </ul>
                    <div className="bar-social" >
                        <a href={social.twitter}><i className="fab fa-twitter"></i></a>
                        <a href={social.discord}><i className="fab fa-discord"></i></a>
                        <a href={social.github}><i className="fab fa-github"></i></a>
                        <a href={social.linkedin}><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="big-body" style={{marginLeft:this.state.marginLeft}}>
                    {button}
                    <Text/> 
                </div>
            </div>
        )
    }
} 


export default About