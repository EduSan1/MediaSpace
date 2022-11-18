import React, { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import SearchBar from "../../components/HeaderPage/Search";
import Interestedserver from "../../components/project";
import NavegationBar from "../../components/utils/navegation";
import api from "../../service";
import InputBtn from "../../components/utils/Button/InputBtn";
import { useParams } from 'react-router-dom';

const ProjectsSelecetFreelancer = () => {

    const user = localStorage.getItem('userDetailes');
    const { decodedToken, isExpired } = useJwt(user ? user : "");
    const { projectId } = useParams()


    const [selecetFreelancerView, setSelectFreelancerView] = useState({
        name: '',
        description: "",
        interest: [],
        id: ""

    });



    const [selecetFreelancer, setSelectFreelancer] = useState({
        freelancerId: ""
    });


    useEffect(() => {
        api.get(`/project/${projectId}`)
            .then((res) => {
                setSelectFreelancerView(res.data.data)
            })
            .catch()
    }, [])



    const selectidFreelancer = () => {

        api.post(`/project/registerInterest/${projectId}`, selecetFreelancer)
            .then(() => {
                window.alert('freelancer selecionado com sucesso')
            })

    }


    return (


        <main id="ContentPage">

            <NavegationBar />
            <div className="Container">
                <SearchBar />
                <section className="section_main_Project">

                    <header className="Tittles_Description">
                        <span className="Big_Tittle">  <h1>{selecetFreelancerView.name}</h1>  </span>
                        <span className="small_Tittle"> <h3> {selecetFreelancerView.description} </h3>   </span>
                    </header>

                    <div className="SearchBar_candidates">
                        <SearchBar />
                    </div>

                    <div className="select_candidates">
                        {
                            selecetFreelancerView.interest.map((intereest: any) => {
                                return <Interestedserver action={() => {
                                    setSelectFreelancer({ ...selecetFreelancer, freelancerId: intereest.id });
                                }} type={"radio"} name={intereest.team.name} nickname={intereest.team.nickname} photo={intereest.team.profile_picture} />

                            })

                        }



                    </div>



                    <div className="send_freelance_selecet">
                        <InputBtn className="btn_selecet_freelancer" name="" onClick={() => {

                            selectidFreelancer();
                            console.log('mandar outra tela')

                        }} typeInput={'button'} valueBtn={'Selecionar'} enable={false} />
                    </div>
                </section>


            </div>
        </main>



    );
}


export default ProjectsSelecetFreelancer;