import React,{useState,useContext} from 'react'
import { shoppingContext } from './Context/ContextProvider';


function Shoplist() {

    const{list,addItem,deleteItem,clearItem} = useContext(shoppingContext)
    const [newItem,setNewItem] = useState("");

    const handleAddItem= (()=>{
        
        if(newItem.trim() !== ""){

            addItem(newItem)
            setNewItem("");
        }
    })
    return (
    <div>
        <input id="shopping-input" type='text' value={newItem} onChange={(e)=>setNewItem(e.target.value)}/>
        <button onClick={handleAddItem}>Add</button> 
        <ul>
            {
                list.map((item,index)=>(
                    <li key={index}>
                        {item}
                        <button id={`remove-${item}`} onClick={ ()=>deleteItem(item)}>Remove</button>
                    </li>
                ))
            }
        </ul>
        <button id="clear-list" onClick={clearItem}>Clear List</button>
   
    </div>
  )
}

export default Shoplist;

