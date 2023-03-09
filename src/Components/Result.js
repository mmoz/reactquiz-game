import { useContext } from "react";
import { DataContext } from "../App";
import QuestionsData from "../data/QuestionsData";

const Result =()=>{
    const {result,setAppState,setResult} = useContext(DataContext)
    const restart=()=>{
        setResult(0)
        setAppState("menu")
    }
    
    return(
        <div>
            <div className="Result">
                <h1>Score</h1>
                <h2>{result} /{QuestionsData.length}</h2>    
                <button onClick={restart}>Try again!</button>
            </div>
        </div>
    );
}
export default Result
