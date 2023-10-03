import React,{useState, useEffect} from 'react'
import recherhceIcon from './../../../../Images/Icons/rechercheIcon.png'
import usersList from './usersList';
import './MyContactBox.css'
import { Link } from 'react-router-dom';
function MyContactBox(props) {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const results = usersList
        setSearchResults(results);
      }, []);
    
    
      useEffect(() => {
        const results = usersList.filter(user =>
          user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
      }, [searchTerm]);

    
  return (
    <div className='my-contact-box'>
        <div className='box-title-discution'>
            <span className='name' style={{ fontSize: "25px",  }}>Discussions</span>
        </div>
        <div className='input-message-expert' >
            <div className='box-search-icon' >
                < img src={recherhceIcon} style={{ height: '23px' }}/>
            </div>
            <input className='input-message-field-expert'
                type="text" 
                placeholder='Recherche'
                onChange={e => setSearchTerm(e.target.value)}
            />
        </div>

        <div className='contact-List-box'>
            {searchResults.map((user, index) => (
                <Link key={index} to={`./${user.id}`} style={{ textDecoration: 'none',  }}>
                    <div  className='user-Button-Expert' >
                        <img src={user.image}  className='expert-image-user'/>
                        <div style={{display: "flex", flexDirection: "column", color: "black"  }}>
                            <span className='name' style={{ display: "inline-block" }} >{user.firstName + " " + user.lastName}</span>
                            <span >message a été envoyer</span>
                        </div>           
                    </div>
                </Link>
            ))}
        </div> 
        
    </div>
  )
}

export default MyContactBox