import "./App.css";
import SideMenu, { menuItems } from "./components/SideMenu";
import "./components/SideNavBar.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      
      setLoading(false);
    },3000);
  },[])

  return (
    <Router>
    <div className="App">
      {
        loading ?<Loader/>
        :
      
        
        <Sidebar/>
        
       
      }
    </div>
    </Router>
  );
}

export default App;