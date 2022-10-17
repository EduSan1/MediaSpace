import React from "react";
import SearchBar from "../../components/HeaderPage/Search";
import LoginSpace from "../../components/Login";
import SpaceBackground from "../../components/SpaceBackground/index";
import NavegationBar from "../../components/utils/navegation";

const HomePage = () =>{

    return(
   
        <>
        <main id="HomePage">
         
        <SearchBar/>
        <NavegationBar/>

        
     

        </main>
         
        </>
  
    );
}

export default HomePage;