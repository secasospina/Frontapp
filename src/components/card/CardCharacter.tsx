import { Link } from 'react-router-dom'
import './card.css'
interface params {
  type: string;
  image: string;
  title: string;
  name: string;
  isHome?: boolean;
}
export function CardComponent({ image, title, name, type, isHome = false }: params) {

  return (
    <div className='container_card'>
      <h2>{title}</h2>
      <div className="container_card_img">
        <img src={image} alt="imagen" />
      </div>

      <div>
        <h3>
          <i>Nombre</i> : {name} <i> Categoria</i> : {type}
        </h3>
      </div>
      <div>
        {
          !isHome ? (
            <button className='buttons' >
              <Link to={'/home'}>
                Ir al Inicio
              </Link>
            </button>
          ) : ''
        }

      </div>

    </div>
  )


}