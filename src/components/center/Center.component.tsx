
import './center.css'
export function CenterComponent({ children }:{ children:JSX.Element}){


  return (
    <div className="container">
      {children}
    </div>

  )
}