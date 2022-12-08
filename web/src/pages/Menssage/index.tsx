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
                <section className="section_main_messages">
                    <img src="https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FGroup%2049%20(1).png?alt=media&token=52895689-1325-4e21-a5ff-970002dfd337" />

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