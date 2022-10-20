import React from "react";
import SearchBar from "./Search";
import ToggleButton from "./ToggleButton";
import { IoSettingsOutline } from "react-icons/io5"

const HeaderPages = () => {

   return (
      <>
         <div className="headerPages">
            <div>
               <SearchBar />
            </div>
            <div>
               <ToggleButton />
            </div>

            <div>
               <IoSettingsOutline />
            </div>

         </div>
      </>
   )
}

export default HeaderPages;