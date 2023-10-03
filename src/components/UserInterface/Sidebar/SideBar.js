import React from 'react'
import { Link } from "react-router-dom";

import logoImage from  './../../../Images/Logo List/Logo linguo.png';
import iconImage1 from './../../../Images/Icons/image 3.png';
import iconImage2 from './../../../Images/Icons/image 4.png';
import iconImage3 from './../../../Images/Icons/image 5.png';
import iconImage4 from './../../../Images/Icons/image 6.png';
import iconImage5 from './../../../Images/Icons/image 2.png';
import './SideBar.css'
export default function SideBar(props) {
    return (
        <div className="sidebar">

            <div className='Logo-linguo-application' >
                <img src={logoImage} />
            </div>

            <Link to="/home/chatAI/"  >
                <div style={{overflow: "hidden",}}
                    className={`menu-item ${props.activeMenu === 'chat AI' ? 'selected-menu-item' : ''}  `} 
                    onClick={() => props.handleMenuClick('chat AI')}
                >
                    <img src={iconImage1} style={{  width: '20px', marginRight: "10px"}} />
                    <span style={{color: `${props.activeMenu === 'chat AI' ? "#e15634" : "#000"}`,}} className='text-item'> 
                        Chat IA 
                    </span>
                </div>
            </Link>
            <Link to="/home/Experts/"  >
                <div 
                    className={`menu-item ${props.activeMenu === 'Questionner les Experts' ? 'selected-menu-item' : ''}`}
                    onClick={() => props.handleMenuClick('Questionner les Experts')}
                >
                    <img src={iconImage2} style={{ width: '20px', marginRight: "10px" }} />
                    <span style={{color: `${props.activeMenu === 'Questionner les Experts' ? "#e15634" : "#000"}`} }className='text-item'> 
                       Questionner les Experts
                    </span>
                </div>
            </Link>

            <Link to="/home/FAQ/"  >
                <div  
                    className={`menu-item ${props.activeMenu === 'Foire aux Questions' ? 'selected-menu-item' : ''}`}
                    onClick={() => props.handleMenuClick('Foire aux Questions')}
                >
                    <img src={iconImage3} style={{width: '20px', marginRight: "10px" }} />
                    <span style={{color: `${props.activeMenu === 'Foire aux Questions' ? "#e15634" : "#000"}`} } className='text-item'> 
                        Foire aux Questions
                    </span>
                </div>
            </Link>

            <Link to="/home/Experts/"  >
                <div 
                    className={`menu-item ${props.activeMenu === 'Générer Document' ? 'active' : ''}`}
                    onClick={() => props.handleMenuClick('Générer Document')}
                >
                    <img src={iconImage4} style={{ width: '20px', marginRight: "10px" }} />
                    <span style={{color: `${props.activeMenu === 'Générer Document' ? "#e15634" : "#000"}`} } className='text-item'> 
                        Générer Document
                    </span>
                </div>
            </Link>
            <Link to="/home/Experts/"  >
                <div 
                    className={`menu-item ${props.activeMenu === 'Paramètres' ? 'selected-menu-item' : ''}`}
                    onClick={() => props.handleMenuClick('Paramètres')}
                >
                    <img src={iconImage5} style={{width: '20px', marginRight: "10px" }} />
                    <span style={{color: `${props.activeMenu === 'Paramètres' ? "#e15634" : "#000"}`} } className='text-item'> 
                        Paramètres
                    </span>
                </div>
            </Link>
        </div>

    )
}
