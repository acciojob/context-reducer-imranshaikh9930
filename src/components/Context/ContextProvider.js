import React,{createContext, useState} from 'react';

  // Aruthentication Context
export const AuthContext = createContext();

// Display List Context

export const shoppingContext = createContext();



const  ContextProvider = ({children})=>{

  const [user,setUser] = useState("null");
  const [isAuthenticate,setIsAuthenticate] = useState(false);
  const [list,setList] = useState([]);


  const login=((username)=>{

    setUser(username);
    setIsAuthenticate(true);

  
   
  })

  const signOut = ()=>{
    setUser(null);
    setIsAuthenticate(false);
  }

  const addItem = (item)=>{

    setList([...list,item]);
  }

  const deleteItem = (itemName)=>{

   setList(list.filter((item)=> item!== itemName));

  }

  const clearItem = ()=>{

    setList([]);
  }


  return (

    <AuthContext.Provider value={{ user, isAuthenticate, login, signOut }}>
    <shoppingContext.Provider value={{ list, addItem, deleteItem, clearItem }}>
      {children}
    </shoppingContext.Provider>
  </AuthContext.Provider>
   
  )
}

export default ContextProvider