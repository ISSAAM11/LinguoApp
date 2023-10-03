import React, {useEffect, useRef, useState } from 'react';
import logoLinguo  from '../../../Images/Logo List/Icon.png'
import userIcon from '../../../Images/userImages/userimage5.png'
import speaker from '../../../Images/Icons/speaker.png'

import iconModify from '../../../Images/Icons/iconModify.png'
import iconSend from '../../../Images/Icons/Vector.png'
import HeaderChat from '../headerUser/HeaderChat';
import iconAddFile from './../../../Images/Icons/attatchment-01.png'
import axios from 'axios';
import '../../../App.css';
import './ChatPage.css';
function ChatApp() {

  const [messages, setMessages] = useState([]);
  const [ChatAiList, setChatAiList] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom()  // if the creen not touching the ground don 't do anything
  }, [ChatAiList]);

  const sendMessage = () => {
    if(inputMessage.trim() !== '') {
      setIsLoading(true)
      setErrorMessage("")
      const currentDate = new Date()
      const formattedDate = formatDate(currentDate)
      const chatListLength = ChatAiList.length
      if(error){
        setChatAiList(prevList => {
          console.log(chatListLength)
          prevList[chatListLength-1] = {message: inputMessage, response: "" ,dateSend: formattedDate};
          return prevList; 
        });
      } 
      else
      setChatAiList([...ChatAiList, {message: inputMessage, response: "" ,dateSend: formattedDate}])

      axios.get(`http://127.0.0.1:8000/chat?input_text=${inputMessage}`)
        .then(response => {
          let newMessage = {
            message  : response.data.response.message,
            dateSend : formattedDate,
            response : response.data.response.response,
            datetime : response.data.response.datetime,
          }
          setChatAiList(prevList => {
            const newList = [...prevList]; 
            if (newList.length > 0) {
              newList[newList.length - 1] = newMessage
            }
            return newList; 
          });
          
          setIsLoading(false)
        })
        .catch(error => {
          console.error('Error:', error);
          setErrorMessage(error.message)
          setIsLoading(false)
          setError(true)
        })
      setInputMessage('');
    }
  }

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      const currentDate = new Date();
      const formattedDate = formatDate(currentDate);
      setMessages(prevList => [...prevList, { text: inputMessage, sender: 'You', date: formattedDate }]);
      setInputMessage('');

      setTimeout(receivedMessage, 1000);
    }
  };

  function receivedMessage() {
    const botMessage="Paragraph Completion category includes free online quizzes on paragraph completion tests consisting of multiple choice questions with answers."
    setMessages(prevList => [...prevList, { text: botMessage, sender: 'send' }]);
  }

  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }  

  const [audio ,setAudio] = useState()
  const activateSpecker = () => {
    setAudio('')
    
  }
  
  return (
    <div ref={chatContainerRef} className='chat-app-container'>
      <HeaderChat />
      <div className="chat-app" >
      {ChatAiList.length > 0 ?
        <div className="chat-box">
          {ChatAiList.map((message, index) => (
            <div key = {index}>
              <div style={{ marginBottom: 20, }}>
                <div style={{ display: "flex", alignItems: "center",paddingLeft:'5', marginBottom: 10, }}>
                  <div style={{display: "flex", alignItems: "center",flex: 1,}}>
                    <img src={userIcon} style={{ width: '20px', height: '20px', marginRight: "10px" }}/>
                    <a >Issam</a>
                  </div>

                </div>
                <div key={index} className={"message sent"}>
                    <div style={{display:"flex", marginBottom:"10px" }}>
                      <div style={{display:"flex", flex:1,}}>
                        {message.message}
                      </div>
                      <div >
                        <img src={iconModify} className='icon-chat-ai'/>
                      </div> 
                    </div>
                    <div style={{ display: "flex",height:"20px", alignItems: "center", }}>
                      <div style={{display: "flex", alignItems: "center",flex: 1, }}></div>
                      <p style={{paddingTop:"20px"}}>{message.dateSend}</p>
                    </div >
                </div>
              </div>
              
                {message.response != '' ?
                <div style={{ marginBottom: 20, }}>
                  <div style={{ display: "flex", alignItems: "center",paddingLeft:'5', marginBottom: 10, }}>
                    
                    <div style={{display: "flex", alignItems: "center",flex: 1,}}>
                      <img src={logoLinguo} style={{ width: '20px', height: '20px', marginRight: "10px" }}/>
                      <a>Bot</a>
                    </div>

                  </div>
                  <div key={index} className={"message received"}>
                      <div style={{display:"flex",marginBottom:"10px" }}>
                        <div style={{display:"flex", flex:1, }}>
                          {message.response}
                        </div>

                        <div className="button-icon" onClick={activateSpecker(message.response)}>
                          <img src={speaker} className='icon-chat-ai' />
                        </div> 
                      </div> 
                      <div style={{ display: "flex",height:"20px", alignItems: "center", }}>
                        <div style={{display: "flex", alignItems: "center",flex: 1, }}></div>
                        <p style={{paddingTop:"20px"}}>{message.datetime}</p>
                      </div >
                  </div>
                </div> 
                :
                <>
                  {error ? 
                    <div style={{ marginBottom: 20, }}>
                      <div style={{ display: "flex", alignItems: "center",paddingLeft:'5', marginBottom: 10, }}>
                        <div style={{display: "flex", alignItems: "center",flex: 1,}}>
                          <img src={logoLinguo} style={{ width: '20px', height: '20px', marginRight: "10px" }}/>
                          <a>Bot</a>
                        </div>
                      </div>

                      <div key={index} className={"message received"}>
                          <span style={{color:"#C10000"}}> {errorMessage} </span>

                      </div>
                    </div>  
                  :                  
                  <div style={{ marginBottom: 20, }}>
                    <div style={{ display: "flex", alignItems: "center",paddingLeft:'5', marginBottom: 10, }}>
                      <div style={{display: "flex", alignItems: "center",flex: 1,}}>
                        <img src={logoLinguo} style={{ width: '20px', height: '20px', marginRight: "10px" }} className="logo-rotation"/>
                        <a>Bot</a>
                      </div>

                    </div>
                    <div  className={"message received"}>
                      <div className="loading">
                        <span className="loading__dot"></span>
                        <span className="loading__dot"></span>
                        <span className="loading__dot"></span>
                      </div>
                    </div>
                  </div> 
                  }
                </>
                }

            </div>
          ))}
        </div>
      :
        <>
          <span style ={{ fontSize: "50px", color:"#e1e1e1", paddingTop:'70px'}}> Linguo Application</span>
          <p style={{color:"#e1e1e1",}}> Ici, vous pouvez poser à l'AI n'importe quelle question juridique </p>
        </>
      }
       
      </div>
      <div className="input-box" >
        <button className='user-Button-chatAI' >
          < img src={iconAddFile} />
        </button>
        <input className='auto-expanding-input'
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={ (e) =>{ if (e.key === 'Enter') {sendMessage(e)}} }
          placeholder="Envoyer une question"
          disabled = {isLoading} 
        />      

        {isLoading === true ?
          <div className="loader" style={{margin: "15px"}} ></div>
                       :
          <button className='user-Button-chatAI' onClick={sendMessage}>
            <img src={iconSend} />
          </button>
        }
      </div> 
    </div>
  );
}

export default ChatApp;