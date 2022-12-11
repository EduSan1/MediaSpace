import React from "react";
import { useJwt } from "react-jwt";
import SearchBar from "../../components/HeaderPage/Search";
import NavegationBar from "../../components/utils/navegation";

const Eventes = () => {

    return (


        <main id="ContentPage">

            <NavegationBar />
            <div className="Container">
                {/* <SearchBar /> */}
                <section className="section_main_messages">
                    <img src="https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FGroup%2049%20(1).png?alt=media&token=52895689-1325-4e21-a5ff-970002dfd337" />
                </section> </div>
        </main>



    );
}

export default Eventes;