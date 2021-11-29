import { useEffect, useState } from "react";
import axios from 'axios';


const Services = () => {

   
const [item, setItem] = useState()
const [name, setName] = useState()
const [action, setAction] = useState()


const getdata = async () =>{
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${item}`)

    setName(res.data.name)
    setAction(res.data.moves.length)
}

useEffect(()=>{
    getdata();
},)

    return (
        <> 
        <h1> we are learn and using axios for api</h1>
        <h1>
         you select the number {item}
        </h1>
        <h1>
            hello my name is {name}
        </h1>
        <h1>
            and my total moves is {action}
        </h1>
       

        <select value={item} onChange={(e)=> setItem(e.target.value)} >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>

        </>
    )
}

export default Services;
