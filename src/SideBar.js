function OpenNav(props){
    return(
        <p className="bars"><i class="fas fa-bars" onClick={props.onClick}></i></p>
    )
}
function CloseNav(props){
    return(
        <p className="bars"><i class="far fa-times" onClick={props.onClick}></i></p>
    )
}
export {CloseNav,OpenNav}