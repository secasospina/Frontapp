

import { useEffect,useState } from 'react'
import axios from 'axios'
import { ICharacter } from '../../interfaces/character';
import { CardComponent } from '../card/CardCharacter';
import { CenterComponent } from '../center/Center.component';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const endpoint = 'mos/dislikes'

export function MosDislikedComponent(){

  const [mosDisLiked,setMosDisLike] = useState({} as ICharacter)
  useEffect(()=>{
    axios.get(`${BASE_URL}/${endpoint}`)
      .then((data)=>setMosDisLike(data.data))
      .catch((_)=>setMosDisLike({} as ICharacter))
  },[])
  
  return <CenterComponent>
    <CardComponent 
      image={mosDisLiked.image} 
      title='Personaje mas mas dislikes'
      name={mosDisLiked.name}
      type={mosDisLiked.type}
      />
  </CenterComponent>
}