import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props)=>{

    const[input,setInput] = useState("");
    const[reacent,setRecent] =useState("");
    const[previous,setPrevious] = useState([]);
    const[result,setResult] = useState(false);
    const[loading,setLoading] =useState(false);
    const[resultData,setResultData] = useState("");


    async function onSent(prompt) {
        await run(input);
    }

    
    const ContextValue = {
        previous,
        setPrevious,
        onSent,
        setRecent,
        reacent,
        result,
        loading,
        resultData,
        input,
        setInput

    }

    return (
        <Context.Provider value={ContextValue}>
            {props.childern}
        </Context.Provider>
    )
}

export default ContextProvider;