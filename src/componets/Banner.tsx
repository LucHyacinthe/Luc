
 import '../style/Banner.css'
  export const Banner = () => {
   const title = "La maison jungle"
   return (
      <div style={{
         color: 'white',
         padding: '50px 0px',
         borderBottom: 'solid 3px white',
         display: 'flex',
         justifyContent: 'center',
        alignItems: 'center',
         width: "100vw"
       }}>
         <h1>{title.toUpperCase()}</h1>
       </div>
   )
 }
 
