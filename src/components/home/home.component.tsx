import { useEffect,useState, } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './home.css'
import { CardComponent } from '../card/CardCharacter'
import { ICharacter } from '../../interfaces/character'
const endpoint = 'get/random-character'
const BASE_URL = import.meta.env.VITE_BASE_URL;
async function getPerson(){
  try{
   const { data } = await axios.get(`${BASE_URL}/${endpoint}`)
   return  data
  }
  catch(error){
    return {}
  }
} 
async function makeAction(action:'like'|'dislike',body:any){
  try{
   const { data } = await axios.post(`${BASE_URL}/${action}`,body)
   return  data
  }
  catch(error){
    return {}
  }
} 

export function HomeComponent() {
    const [ response,setResponse ] = useState({} as ICharacter)
    useEffect(()=>{
      getPerson().then(setResponse)
    },[])
  const getOtherPerson=async()=>{
    setResponse(await getPerson())
  } 
  const vote=async(action:'like'|'dislike')=>{
    await makeAction(action,response)
    getOtherPerson()
  }
  return (
    <div className="home_component">
      <CardComponent
        image={response.image}
        title='Like/Dislike'
        name={response.name}
        type={response.type}
        isHome
      />
      <div className="container_buttons">
        <button className='buttons' onClick={()=>vote('dislike')}>Dislike</button>
        <button className='buttons' onClick={getOtherPerson}>Siguiente Personaje</button>
        <button className='buttons' onClick={()=>vote('like')}>Like</button>
      </div>
      <div className="container_buttons">
          <button className='buttons' >
            <Link to={'/mos-liked'}>
              Personaje con más likes 
            </Link>
          </button>
          <button className='buttons' >
            <Link to={'/mos-disliked'}>
              Personaje con más Dislike 
            </Link>
            
          </button>
          <button className='buttons' >
            <Link to={'/last-evaluated'}>
               Último personaje evaluado 
            </Link>
            
          </button>
      </div>
      
    </div>
  )
}