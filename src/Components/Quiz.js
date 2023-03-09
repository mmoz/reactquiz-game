import { useContext, useEffect, useState } from "react";
import { DataContext } from "../App";
import QuestionsData from "../data/QuestionsData";

const Quiz =()=>{
    const [Current,setCurrent] = useState(0)
    const [SelectChoice,setSelectChoice] = useState('')
    const {result,setResult,setAppState} = useContext(DataContext)

    

    useEffect(()=>{

        checkAnswer()
    // eslint-disable-next-line
    },[SelectChoice])


    const checkAnswer=()=>{
        if(SelectChoice !== ""){
            if(SelectChoice === QuestionsData[Current].answer){
                setResult(result+1)
                Next()
            }else{
                Next()

            }
        }
      
    }
    const Next=()=>{
        setSelectChoice("")
        if(Current === QuestionsData.length-1){
            setAppState("result")
        }

        else{
            setCurrent(Current+1)

        }
    }
    
    
    return(
        <div>
            <div className="Quiz">
                <h1>{QuestionsData[Current].question}</h1>
                <div className="Choice">
                    <button onClick={()=>{setSelectChoice("A")}}>{QuestionsData[Current].A}.</button>
                    <button onClick={()=>{setSelectChoice("B")}}>{QuestionsData[Current].B}.</button>
                    <button onClick={()=>{setSelectChoice("C")}}>{QuestionsData[Current].C}.</button>
                    <button onClick={()=>{setSelectChoice("D")}}>{QuestionsData[Current].D}.</button>
                </div>    
                <p>{Current+1}/{QuestionsData.length}</p>

            </div>
        </div>
    );
}
export default Quiz