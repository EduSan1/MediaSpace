import React from "react";
import SearchBar from "../../components/HeaderPage/Search";
import NavegationBar from "../../components/utils/navegation";

const Menssagens = () => {

    return (

        
            <main id="ContentPage">

                <NavegationBar />
                <div className="Container">
                    <SearchBar />
                    <section className="section_main"> Messagens</section>
                </div>
            </main>

        

    );
}

export default Menssagens;