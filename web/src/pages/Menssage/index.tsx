import React, { useState } from "react";
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
                    <button onClick={() => openModal("6514a3b7-1ba2-4c92-8d09-7aa02552572c")}>ABRIR MODAL DE CADASTRO DE ENTREGA</button>
                </section>


            </div>
            {
                modalVisible &&
                <DeliveryModal onSend={() => setModalVisible(false)} onClose={() => setModalVisible(false)} requirementId="f11b70bc-a884-4865-a9e0-677121517b32" projectName={"Nome"} />
            }
        </main>





    );
}

export default Menssagens;