import React from "react";
import SearchBar from "../../components/HeaderPage/Search";
import NavegationBar from "../../components/utils/navegation";

const Eventes= () => {

    return (

        
            <main id="ContentPage">

                <NavegationBar />
                <div className="Container">
                    <SearchBar />
                    <section className="section_main"> Eventes</section>
                </div>
            </main>

        

    );
}

export default Eventes;