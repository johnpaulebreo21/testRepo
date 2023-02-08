import LogIn from "./components/LogIn";
import NavBarz from "./components/NavBarz";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import "./App.css";

function App() {
  
  const show = () =>{
   let item_value = sessionStorage.getItem("user");
    if (item_value) {
      console.log("Main");
      return <Main/>
    }else{
      console.log("LogIn");
      return <LogIn/>
    }

  }
  
  return (
    <div> 
       {show()}
    </div> 
  );
}


export default App;
