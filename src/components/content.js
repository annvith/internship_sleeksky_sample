import React from "react";

function Content(props){


    return(
        <div class="content">
            <div class="time_list">
            {props.items.map((item,index)=>{
                 return <p>{item}</p>
            })}
            </div>
            <div class="footer">
                <p class="timer" >You clicked {props.count} times</p>
            </div>
        </div>
    ) 
}

export default Content;