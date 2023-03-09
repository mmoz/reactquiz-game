import {createContext, useState} from "react"
import Menu from "./Components/Menu";
import Quiz from "./Components/Quiz";
import Result from "./Components/Result";
import './App.css'

export const DataContext = createContext()


function App() {
  const [appState,setAppState] = useState('menu')
  const [result,setResult] = useState(0)
  return (
    <DataContext.Provider value={{appState,setAppState,result,setResult}}>
      <div className="App">
        {appState === "menu" && <Menu/>}
        {appState === "quiz" && <Quiz/>}
        {appState === 'result' && <Result/>}

      </div>
    </DataContext.Provider>



  );
}

export default App;
