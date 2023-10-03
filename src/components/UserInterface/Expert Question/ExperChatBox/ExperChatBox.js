import React , {useState, useEffect}from 'react'
import './ExperChatBox.css'
import logoLinguo  from '../../../../Images/Logo List/Icon.png'
import iconAddFile from './../../../../Images/Icons/attatchment-01.png'
import Likebutton from './../../../../Images/Icons/Like1.png'
import micIcon from './../../../../Images/Icons/micIcon.png'
import iconEmoji from './../../../../Images/Icons/icon emoji.png'
import usersList from '../MyContactBox/usersList';
import { useParams } from 'react-router-dom'

function ExperChatBox() {
  let { id } = useParams()
  const [messageList, setMessagesList] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const [userSelected, setUserSelected] = useState();
  const [isloading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true); // Data has been loaded

        // Simulate an async operation (replace this with your actual data fetching)
        const response = await new Promise((resolve) => {
          setTimeout(() => {
            resolve({ data: usersList[id-1] });
            setIsLoading(false); // Data has been loaded

          }, 500); // Simulate a delay
        });

        setUserSelected(response.data); // Update the state with the fetched data
        setMessagesList(usersList[id-1].messageList)
        setIsLoading(false); // Data has been loaded
      } catch (err) {
        setIsLoading(false); // Loading has finished (even with an error)
      }
    }
    fetchData(); // Call the fetchData function
  },[id] );

  const handleSendMessage = (event) => {
    if (event.key === 'Enter'){
      if (inputMessage.trim() !== '') {
        const currentDate = new Date();
        const formattedDate = formatDate(currentDate);
        setMessagesList(prevList => [...prevList, { message: inputMessage, sender: 'You', date: formattedDate , type: "text" }]);
        setInputMessage('');
        setTimeout(receivedMessage, 1000);
      }
    }
  };

  function receivedMessage() {
    const botMessage="This paragraph it is just a test"
    setMessagesList(prevList => [...prevList, { message: botMessage, sender: 'send', type: "text" }]);
  }

  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }

  const likeButtonfunction  = () => {
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
    setMessagesList(prevList => [...prevList, { image: {Likebutton}, sender: 'You',date: formattedDate , type: "image" }]);
  }

  if(isloading){
    return (     
      <div className='exper-chat-box-container'>
        <div className='expert-chating-box' >
          <div className='user-image-expert-box' style={{height:"30vh",display:"flex",flexDirection:"row",alignContent:"center"}}>
              <img src={logoLinguo} style={{ width: '50px', height: 'auto',margin:"10px 15px 0px 10px"}} className="logo-rotation"/>
              <span className='linguo-application-background' > Loading </span>
          </div>     
        </div>
      </div>
    );
  }else
  return (
    <div className='exper-chat-box-container'>
      <div className='expert-chating-box'>

        <div className='user-image-expert-box'>

          <img src={userSelected.image}  className='image-user-expert'/>  
          <b >{userSelected.firstName} {userSelected.lastName}</b>
          
        </div>
        {messageList.length > 0 ?
        <div >
            {messageList.map((message, index) => (
              <div key={index} style={{marginBottom:"10px"}}>
                {message.type === "text" ?
                  <div className='message-box'>
                    {message.sender === 'You'? 
                      <div style={{display: "flex", justifyContent: "end"  }}>  {/*//////////*/}
                        <div key={index} className={`message sent-expert`}>
                          {message.message}
                        </div>
                      </div>

                      :
                      <div style={{display: "flex",  justifyContent: "start"}}>
                        
                        {index == messageList.length - 1  ?                           
                          <img src={userSelected.image}  className='image-user-expert' style={{height:"40px", width: "40px", marginRight: "10px"}}/>
                        :
                          <div style={{ width: "40px", marginRight: "10px"}}/>
                        }
                        <div key={index} className={`message received-expert`}>
                          {message.message}
                        </div>
                        
                      </div>
                    }
                  </div>
                : 
                <div className='Message-box'>
                  {message.sender === 'You'? 
                    <div style={{display: "flex", flex: 1, justifyContent: "end" }}>
                        <div key={index} className={`LikeMessage`}>
                          <img src={Likebutton} />
                        </div>
                    </div>
                    :
                    <div style={{display: "flex", flex: 1, justifyContent: "start"}}>
                      <div key={index} className={`LikeMessage`}>
                        <img src={Likebutton} />
                      </div>
                    </div>
                  }
                </div>
                }
              </div>
            ))}
        </div>
        :
          null
        }
      </div>

      <div className='input-field-expert-page'>
        <button className='buttonchat' >
          < img src={micIcon} style={{ height: '25px', }}/>
        </button>
        <button className='buttonchat' >
          < img src={iconAddFile} style={{ height: '20px', }}/>
        </button>

        <div className='input-message-expert-positon' >
          <input className='input-message-field-expert'
            type="text" 
            placeholder='Envoyer un message'
            value={inputMessage}
            onChange={(e)=> setInputMessage(e.target.value)}
            onKeyDown={ e => {handleSendMessage(e)}}
          />
          <button className='buttonchat'>
            < img src={iconEmoji} style={{ height: '30px' }}/>
          </button>
        </div>

        <button className='buttonchat'onClick={likeButtonfunction}>
          < img src={Likebutton} style={{ height: '30px' }}/>
        </button>

      </div>
    </div>  
  )
}

export default ExperChatBox