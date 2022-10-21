import React from "react";
import SearchBar from "../../components/HeaderPage/Search";
import LoginSpace from "../../components/Login";
import SpaceBackground from "../../components/SpaceBackground/index";
import NavegationBar from "../../components/utils/navegation";

const HomePage = () => {

    return (

        
            <main id="ContentPage">

                <NavegationBar />
                <div className="Container">
                    <SearchBar />
                    <section className="section_main"> main</section>
                </div>






            </main>

        

    );
}

export default HomePage;