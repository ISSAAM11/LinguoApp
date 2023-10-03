import React,{useState, useEffect} from 'react'
import "./FAQDetails.css"
import goal from'./../../../../Images/Logo List/goal.webp'
import { useNavigate, useParams } from 'react-router-dom'
import FAQ_DB from '../FAQ_DB'
export default function FAQDetails(props) {
  let { id } = useParams()

  const [FAQ_Details, setFAQ_Details] = useState();
  const [isloading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true); // Data has been loaded
        // Simulate an async operation (replace this with your actual data fetching)
        const response = await new Promise((resolve) => {
          setTimeout(() => {
            resolve({ data: FAQ_DB[id - 1 ] });
            setIsLoading(false); // Data has been loaded

          }, ); // Simulate a delay
        });
        setFAQ_Details(response.data); // Update the state with the fetched data
        setIsLoading(false); // Data has been loaded
      } catch (err) {
        setIsLoading(false); // Loading has finished (even with an error)
      }
    }
    fetchData(); // Call the fetchData function
  },[id] );

  const [content , setContent] = useState([
      { id:1, title: "DROIT DES SOCIÉTÉS ", description: "L'affiliation est une activité facile à mettre en place mais beaucoup ont du mal à générer de l'argent. Il y a plusieurs raisons qui peuvent empêcher une personne de gagner de l'argent avec l'affiliation. Certaines d'entre elles peuvent inclure",  },
      { id:2, title: "DROIT BANCAIRE ", description: 'Practice writing skills with paragraph typing exercises. This practice lesson consists of short paragraphs.', },
      { id:3, title: "DROIT SOCIAL ", description: ' Ceux qui sont devenus riches ont posé des actes pour arriver à ce niveau. Ceux qui espèrent faire de même doivent être rigoureux en évitant des choses qui pourraient causer des conséquences irréparables.',   },
      { id:4, title: "FAMILLE – PERSONNES ", description: '  Practice writing skills with paragraph typing exercises. Practice writing skills with paragraph typing exercises.  Practice writing skills with paragraph typing exercises. This practice lesson consists of short paragraphs about interesting subjects.', },
      { id:5, title: "CONCURRENCE – DISTRIBUTION ", description: 'Practice writing skills with paragraph typing exercises. This practice lesson consists of short paragraphs about interesting subjects.',   },
      { id:6, title: "DROIT IMMOBILIER ", description: 'Practice writing skills with paragraph typing exercises. This practice lesson consists of short paragraphs about interesting subjects.',  },
      { id:7, title: "RESPONSABILITÉ CIVILE ", description: 'Practice writing skills with paragraph typing exercises. This practice lesson consists of short paragraphs about interesting subjects.',  },
      { id:8, title: "ENTREPRISE EN DIFFICULTÉ", description: 'Practice writing skills with paragraph typing exercises. This practice lesson consists of short paragraphs about interesting subjects.',  },
      { id:9, title: "DROIT FISCAL", description: 'Practice writing skills with paragraph typing exercises. This practice lesson consists of short paragraphs about interesting subjects.',  },
      { id:10, title: "RECOUVREMENT DE CRÉANCES", description: 'Practice writing skills with paragraph typing exercises. This practice lesson consists of short paragraphs about interesting subjects.',  },
    ])

  if(isloading){
    return (
      <div> Loading </div>
    )
  }else
  return (
    <div >

      <div className='HeaderDetails' style={{}}>
        <img src={FAQ_Details.image}  style ={{width: "80px"}}/>
        <h1 style={{alignSelf:"center", fontSize:"50px", fontWeight:"bold"}}>{FAQ_Details.title}</h1>
        <p style={{width:"50%",fontSize:"15px", fontWeight:"500"}}>{FAQ_Details.description}</p>
      </div>

 
        <div className="grid-container2" >
            {FAQ_Details.details.map((item, index) => (
              <div
                key={index}
                className="grid-item"
              >
                <div style={{ backgroundColor: content.color, display: "flex", marginBottom:"15px"}}>
                    <img src={item.image}  className='image-user-details-page'/>
                    <div style={{  flex: 1, display: "flex", flexDirection: "column", }}>
                        <span className='name'>{item.name}</span>
                        <span >{item.Job}</span>
                    </div>           
                </div>    

                  <div>
                    <span className='titleComment'>{item.title}</span>
                    <p className='constent-element-details'>{item.description}</p>
                    <span style={{color:'#479ffb'}}>Lire plus</span>
                  </div>
               </div>
            ))}
          </div>


    </div>
  )
}
