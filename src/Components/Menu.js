import { useContext } from "react";
import { DataContext } from "../App";
const Menu =()=>{
   const {setAppState} = useContext(DataContext)
    return(
        <div>
            <div className="menu">
                <h1>Quiz</h1>    
                <button onClick={()=>setAppState("quiz")}>Start</button>
            </div>
        </div>
    );
}
export default Menu