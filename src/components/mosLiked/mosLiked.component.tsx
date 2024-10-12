import { useEffect, useState } from 'react'
import axios from 'axios'
import { ICharacter } from '../../interfaces/character';
import { CardComponent } from '../card/CardCharacter';
import { CenterComponent } from '../center/Center.component';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const endpoint = 'mos/likes'

export function MosLikedComponent() {

  const [mosLiked, setMostLike] = useState({} as ICharacter)
  useEffect(() => {
    axios.get(`${BASE_URL}/${endpoint}`)
      .then((data) => setMostLike(data.data))
      .catch((_) => setMostLike({} as ICharacter))
  }, [])

  return( <CenterComponent>
            <CardComponent
      image={mosLiked.image}
      title='Personaje mas likeado'
      name={mosLiked.name}
      type={mosLiked.type}
    />
  </CenterComponent>
)
}