import React,{useState,useEffect} from "react";

import ReactDOM from "react-dom";
import "./styles.css";


function Header(props){
    return(
        
     <div class="header_container">
        <p class="timer">{props.final}</p>
        </div>
    )
   
    }
export default Header;