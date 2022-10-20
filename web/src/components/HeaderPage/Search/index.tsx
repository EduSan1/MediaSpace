import React from "react";
import { BiSearchAlt } from "react-icons/bi"

const SearchBar = () => {
   return (
      <>
         <div className="container_bar_search">
            <div className="icone_serach">
               <BiSearchAlt />
            </div>
            <input className="bar_search" type="search" placeholder="Pesquisar..." />
         </div>
      </>
   )
}

export default SearchBar;