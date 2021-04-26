import React from "react";
import ReactDOM from "react-dom";
import Button from 'react-bootstrap/Button';

function SideBar(props){

    return(
    <div class="sidebar">
    
    <p  class="sidebar_text">Lorem Ipsum</p>
    
        <div class="side_button" >
        <Button size="xs" variant="outline-light"  onClick={props.click} >Click here</Button>
        </div>
    
    </div>
    )
    
}

export default SideBar;