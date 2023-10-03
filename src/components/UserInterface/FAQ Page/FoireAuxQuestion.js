import React,{useEffect, useState} from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './FoireAuxQuestion.css'
import goal from'./../../../Images/FAQ_Icons/international.png'
//fa8146
import FAQDetails from './FAQ details/FAQDetails';
import FAQ_DB from './FAQ_DB';
export default function FoireAuxQuestion() {

  const [activeMenu, setActiveMenu] = useState(false);
  const [id, setid] = useState();
  const [content , setContent] = useState([])

  useEffect(() => {
    setContent(FAQ_DB)
  })

  const handleMenuClick = (id) => {
    setActiveMenu(true)
    setid(id)
  };



  return (  
    < >
      <div className='Header-FAQ'>
        <span style={{alignSelf:"center", marginTop:"15px", fontSize:"70px", fontWeight:"bold"}}> FAQ </span>
        <hr className="custom-hr" />
        <p style={{alignSelf:"center", fontSize:"15px", fontWeight:"600"}}>Voici quelques-unes des questions fréquemment posées</p> 
      </div>
      <div className="grid-container" >
        {content.map((item, index) => ( 
          <Link key={index} to={`./${item.id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <div
              className="grid-item"
              style={{ display: "flex",}}
              onClick={()=>handleMenuClick(item.id)}
            >
              <div className="icon-grid-item" >
                <img src={item.image}  style ={{width: "50px"}}/>
              </div>

              <div >
                <p className='title-element' style={{fontSize:"30px", fontWeight:"bold"}}>{item.title}</p>
                <p className='constent-element'>{item.description}</p>
                <p style={{color:'#F07F36', fontWeight:"600",fontSize:"13px"}}>En savoir plus</p>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

