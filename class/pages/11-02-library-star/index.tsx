import { Rate } from 'antd';
import {useState} from "react"


export default function  LibraryStarPage(){
    const [value, setValue]=useState(3)
    function handleChange(value: number){
        setValue(value)
    }

    return(
        <span>
        <Rate onChange={handleChange} value={value} />
        
      </span>
    )
}