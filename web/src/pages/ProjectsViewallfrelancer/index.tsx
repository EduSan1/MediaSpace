import { stringify } from "querystring";
import React, { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import SearchBar from "../../components/HeaderPage/Search";
import Interestedserver from "../../components/project";
import NavegationBar from "../../components/utils/navegation";
import api from "../../service";
import { useParams} from 'react-router-dom';

const AllfreelancerView = () => {
    const { projectId } = useParams()
    const user = localStorage.getItem('userDetails');
    const { decodedToken, isExpired } = useJwt(user ? user : "");

    const [allFreelancerView, setllFreelancerView] = useState({
        name : '',
        description : "",
        interest: [],
         
    });



    useEffect(() => {
        api.get(`/project/${projectId}`)
            .then((res) => {
                setllFreelancerView(res.data.data)
            })
            .catch()
    }, [])

    useEffect(() => {

        console.log(allFreelancerView)

    }, [allFreelancerView])

    return (


        <main id="ContentPage">

            <NavegationBar />
            <div className="Container">
                <SearchBar />
                <section className="section_main_Project">

                    <header className="Tittles_Description">

                   
                                    <span className="Big_Tittle">  <h1> {allFreelancerView.name} </h1>  </span>
                                    <span className="small_Tittle"> <h3> {allFreelancerView.description}</h3>   </span>

               
                        

                    </header>

                    <div className="SearchBar_candidates">
                        <SearchBar />
                    </div>

                    <div className="candidates">

                        {
                            allFreelancerView.interest.map((intereest: any) => {
                                return <Interestedserver action={() => console.log("navigate perfil ")} type={"submit"} name={intereest.team.name} nickname={`${intereest.team.nickname}`} photo={intereest.team.profile_picture} />

                            })}

                    </div>



                </section>
            </div>
        </main>



    );
}




export default AllfreelancerView;