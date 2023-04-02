import React,{Component} from "react"
import {LanguageText} from "../data/main"
import { CloseNav,OpenNav } from "../SideBar"
import social from "../api/data.json"
import { Link } from "react-router-dom"


class Language extends Component{
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
        return(
            <div className="win">
                <div className="len-bar" style={{display:this.state.topBar}}>-</div>
                <div className="length-bar" style={{display:this.state.display}}>
                    <div className="bar-name">
                        <img src="../log/logo.jpg" width="200px"></img>
                        <p>Soltan H</p>
                    </div>
                    <ul className="bar-set" >
                        <li><Link to="/" >Biyografia  <i className="fas fa-user"></i></Link></li> 
                        <li><Link to="/Framework">Framework <i className="fas fa-brackets-curly"></i></Link></li>
                        <li><Link to="/Language" style={{color:"white"}}>Languages <i  className="fas fa-laptop-code"></i></Link> </li>
                        <li><Link to="/Library">Library <i  className="fal fa-books"></i></Link></li>
                        <li><Link to="runway">RUNWAY <i className="fas fa-running"></i></Link></li>
                        <li><Link to="/Game">Game <i className="fas fa-gamepad"></i></Link></li>
                        <li><Link to="/blog">BLOG <i className="fas fa-rss-square"></i></Link></li>
   
                    </ul>
                    <div className="bar-social">
                        <a href={social.twitter}><i className="fab fa-twitter"></i></a>
                        <a href={social.discord}><i className="fab fa-discord"></i></a>
                        <a href={social.github}><i className="fab fa-github"></i></a>
                        <a href={social.linkedin}><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div style={{marginLeft:this.state.marginLeft}}>
                    {button}
                    <LanguageText/>
                </div>
            </div>
        )
    }
}
export default Language