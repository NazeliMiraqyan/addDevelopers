import Layouts from "./menu/Layouts"
import img from './img/hello.png'

const Home=()=>{
    return(
        <div style={{display:'flex', justifyContent:'center', marginTop:'15px', textAlign:'center'}}>
            <div>
            <h2>Hello My Dear Friend !</h2>
            <h6>Let's Create Developers List</h6>
            <img src={img}/> 
        </div>
        </div>
        
    )
}
export default Home