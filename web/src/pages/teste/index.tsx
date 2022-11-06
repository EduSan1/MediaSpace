import React, { useState } from "react";
import Interestedserver from "../../components/project";
import ModalRequirements from "../../components/RequirementsModal";
import HistoryTrack from "../../components/utils/HistoryTrack";


const Teste = () => {

    const [isModalVisible, setIsModalVisible] = useState(false)

    return (

        <main className="Divetste">

            {/* <Interestedserver name="marcus" nickname="fernadno dqa silva" photo="../assets/img/astronaut.svg" type="submit" />
            <Interestedserver name="marcus" nickname="fernadno dqa silva" photo="../assets/img/astronaut.svg" type="submit" />
            <Interestedserver name="marcus" nickname="fernadno dqa silva" photo="../assets/img/astronaut.svg" type="submit" />
            <Interestedserver name="marcus" nickname="fernadno dqa silva" photo="../assets/img/astronaut.svg" type="submit" />
            <Interestedserver name="marcus" nickname="fernadno dqa silva" photo="../assets/img/astronaut.svg" type="submit" /> */}








            <button onClick={() => { setIsModalVisible(true) }}>open</button>
            {isModalVisible ? <ModalRequirements onClose={() => setIsModalVisible(false)} /> : null}


        </main>






    );

}



export default Teste;