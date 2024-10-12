import axios from "axios";
import { useEffect, useState } from "react";
import { CardComponent } from "../card/CardCharacter";
import { ICharacter } from "../../interfaces/character";
import { CenterComponent } from "../center/Center.component";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const endpoint = 'last-evaluated'
export function LastEvaluatedComponent(){

  const [lastEvaluated,setLastEvaluated] = useState({} as ICharacter)
  useEffect(()=>{
    axios.get(`${BASE_URL}/${endpoint}`)
      .then((data)=>setLastEvaluated(data.data))
      .catch((_)=>setLastEvaluated({} as ICharacter))
  },[])

  return (<CenterComponent >
      <CardComponent 
        image={lastEvaluated.image} 
        title="Ultimo personaje evaluado" 
        name={lastEvaluated.name}
        type={lastEvaluated.type}
      />
  </CenterComponent>)


}