
import './App.css';
import {useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "./components/Logo";
import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import Content from "./components/content";


function App() {
  
  var [count,setcount]=useState(0);
  var [arr,setarr]=useState([]);
  var [time,settime]=useState(new Date());

useEffect(()=>{
    var time_count=setInterval(()=>settime(new Date()),1000);
   
    return function cleanup(){
        clearInterval(time_count)
    }

})
  

  function buttonclick(){
    setcount(count+1);
    setarr(prevvalue=>{
      return [time.toLocaleTimeString('en-us'),...prevvalue];
     
  })
  
   
  }
  
  return (
    <div class="overall">
      <div class="title" >
      <Logo style={{flexGrow:2}} />
   
       <Header style={{flexGrow:8}}  final={time.toLocaleTimeString('en-us')} />
      
      </div>
     
      <div class="content_container">
      <SideBar   click={buttonclick} />
      <Content  items={arr} count={count} />
      </div>
      

    </div>
  );
}

export default App;
