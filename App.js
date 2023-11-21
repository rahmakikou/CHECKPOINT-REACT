import NavR from "./composantes/NavR"
import Cards from "./composantes/Cards" 
import './style.css'  
import paris from './paris.jpeg'

function App() {
    return ( 
     <div> 
      <NavR/>
      <br/> 
  <div className="Cards"> 
      <Cards className="C"/> 
      <Cards className="C"/> 
      <Cards className="C"/> 
   </div> 
   <br/> 
   <div className="photoP"> 
   <img className="photo" src={paris} alt="not found"/> 
   </div>
  </div>   
    )  
  } 

  export default App