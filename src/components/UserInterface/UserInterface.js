import React,{useState} from 'react'
import SideBar from './Sidebar/SideBar'
import ChatApp from './Chat Page/ChatPage';
import FAQ_Page from './FAQ Page/FAQ_Page';
import { Route, Routes } from "react-router-dom";
import ExperQuestion from './Expert Question/ExperQuestion';
function UserInterface() {
  const [activeMenu, setActiveMenu] = useState();

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };


  return (
    <div className="app">
      <SideBar activeMenu={activeMenu} handleMenuClick={handleMenuClick}/>
      <div className="content">
  
        <Routes>
          <Route path="/chatAI" element={<ChatApp /> } /> 
          <Route path="/Experts/*" element={<ExperQuestion/>} />   
          <Route path="/FAQ/*" element={<FAQ_Page/>} />   
        </Routes>

      </div>
    </div>
  )
}
export default UserInterface


