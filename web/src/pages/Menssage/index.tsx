import React, { useState } from "react";
import { useJwt } from "react-jwt";
import SearchBar from "../../components/HeaderPage/Search";
import NavegationBar from "../../components/utils/navegation";
import DeliveryModal from "../ProjectInExecution/Deliveries/Modal";

const Menssagens = () => {

    const [modalVisible, setModalVisible] = useState(false)

    const openModal = (id: string) => {
        setModalVisible(!modalVisible)
    }

    return (


        <main id="ContentPage">

            <NavegationBar />
            <div className="Container">
                <SearchBar />
                <section className="section_main">
                    <button onClick={() => openModal("")}>ABRIR MODAL DE CADASTRO DE ENTREGA</button>
                </section>


            </div>
            {
                modalVisible &&
                <DeliveryModal onClose={() => setModalVisible(false)} projectId={"84631451-869a-4c32-b849-00f3972042a6"} />
            }
        </main>





    );
}

export default Menssagens;