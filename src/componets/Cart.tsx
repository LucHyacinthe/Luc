import { useState, useEffect } from "react"
import "./Cart.css"

export const Cart = () => {   
  const [color, setColor] = useState<"jaune" | "vert" | "rouge">('vert');
  const [color1, setColor1] = useState<"jaune" | "vert" | "rouge">('vert');
  const [pieton, setPieton] = useState(false);
  const [pieton1, setPieton1] = useState(false)
  

    useEffect(() => {
      if (color === 'rouge'&& color1 === 'vert') {
        setPieton(true);
        setPieton1(false)
      } else {
        setPieton(false)
        setPieton1(true)
      }
    }, [color, color1]);
    console.log('t')

    const handleClickVert = () => {
      setColor('vert');
      setColor1('rouge')
    }

    const handleClickRouge = () => {
      setColor('rouge')
      setColor1('vert')
      // setPieton (true)
    }

    const handleClickJaune = () => {
      setColor('jaune')
      setColor1('jaune')
      // setPieton(false)
    }

    return (
      <div className="container">
        <div className="colonne">
         <Feu colorss={color} />
          <p>{pieton ? 'Tsy afaka miampita' :'afaka miampita'}</p>
            <button onClick={handleClickVert}>Vert</button>
            <button onClick={handleClickRouge}>Rouge</button>
            <button onClick={handleClickJaune}>Jaune</button>
        </div>

       <div className="colonne">
        <Feu colorss={color1}/>
         <p>{pieton1 ?'Tsy afaka miampita' :'afaka miampita'}</p>
          <button onClick={handleClickRouge}>Vert</button>
          <button onClick={handleClickVert}>Rouge</button>
          <button onClick={handleClickJaune}>Jaune</button>
       </div>
      </div>
    
    )
  }

// -------------------------
const specialColor={
  "vert": "green",
  "rouge": "red",
  "jaune": "yellow"
}

// ------------------------

  const Feu = ({colorss}: { colorss: "jaune" | "vert" | "rouge" }) => {
    
    return (
      <div>
        <div>
           <h1 style={{color: specialColor[colorss]}}>Le feu est: {colorss} !!!</h1>
        </div>
      
      </div>
        
      )
  }