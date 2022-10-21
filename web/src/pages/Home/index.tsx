import React from "react";
import { useJwt } from "react-jwt";
import SearchBar from "../../components/HeaderPage/Search";
import NavegationBar from "../../components/utils/navegation";

const HomePage = () => {

    const user = localStorage.getItem('userDetails');
    const { decodedToken, isExpired } = useJwt(user ? user : "");
  
    return (

        
            <main id="ContentPage">

                <NavegationBar user={decodedToken}/>
                <div className="Container">
                    <SearchBar />
                    <section className="section_main"> main</section>
                </div>


            </main>

        

    );
}

export default HomePage;