import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi"

const SearchBar = () => {

 


   const [diceSearch, setDiceSearch] = useState({
      "pesquisar" : ""
   });

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDiceSearch({
         ...diceSearch,
         [event.target.name]: event.target.value
      })
   };

   useEffect(() => {
      console.log(diceSearch)
    }, [diceSearch]);


  let hadleKey = (event:any) =>{
           if(event.key == 'Enter'){
               console.log('enter')
           }
  }




   return (
      <>
         <div className="container_bar_search">
            <div className="icone_serach">
               {/* <BiSearchAlt /> */}
            </div>
            <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)} onKeyDown={hadleKey} className="bar_search" type="search" name="pesquisar" placeholder="Pesquisar..." value={diceSearch.pesquisar}/>
         </div>
      </>
   )
}

export default SearchBar;