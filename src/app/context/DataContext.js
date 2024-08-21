"use client"
import { createContext, useState} from "react";

export const DataContext= createContext(' ')

const DataProvider = ({children})=>{
    const [newWidget, setNewWidget] = useState({title:"",text:""})

     const updatedWidget = (newWidgetData) => {
        setNewWidget((prevWidget) => ({
            ...prevWidget,
            ...newWidgetData
        }));
    };
    
    return(
        <DataContext.Provider value={{ newWidget, updatedWidget}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider