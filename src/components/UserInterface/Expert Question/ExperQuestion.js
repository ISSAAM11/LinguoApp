import React ,{useEffect, useState}from 'react'
import HeaderChat from '../headerUser/HeaderChat'
import "./ExperQuestion.css"
import { Routes, Route } from 'react-router-dom'
import ExperChatBox from './ExperChatBox/ExperChatBox'
import MyContactBox from './MyContactBox/MyContactBox'
import EmptyExperChatBox from './ExperChatBox/EmptyExperChatBox'

function ExperQuestion() {

  const[userSelected, setUserSelected] = useState()

  useEffect(() => {
    console.log(userSelected)  
  }, [userSelected]);

  return (
    <div style={{flex: 1, display: "flex", flexDirection: "column", overflow:"hidden" }}>
      <HeaderChat />
      <div style={{flex:1 ,display: "flex", flexDirection: "row" }}>
        
        <Routes>
          <Route path="/*" element={<EmptyExperChatBox />} /> 
          <Route path="/:id" element={<ExperChatBox />} />
        </Routes>

        <MyContactBox setUserSelected={setUserSelected}/>
      </div>
    </div>
  )
}

export default ExperQuestion