import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useJwt } from "react-jwt";
import SearchBar from "../../components/HeaderPage/Search";
import NavegationBar from "../../components/utils/navegation";
import ButtonCategories from "../../components/utils/Button/Categories/Categories";
import api from "../../service";
import ProjectCard from "../Projects/ProjectCard";
import PortifolioCard from "../../components/perfil/Card/portifolio";
import PortifolioCardHome from "./PortfolioCardHome";

export interface IPost {
    id: string,
    title: string,
    description: string,
    is_active: boolean,
    categories:
    {
        id: string,
        name: string,
        icon: string,
        is_active: boolean,
        create_at: string,
        update_at: string
    }[],
    images:
    {
        id: string,
        url: string
    }[],
    team: {
        id: string,
        name: string,
        nickname: string,
        profile_picture: string
    }
}

const HomePage = () => {

    const user = localStorage.getItem('userDetails');
    const { decodedToken, isExpired } = useJwt(user ? user : "");
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])
    const [posts, setPosts] = useState([])
    const [selectedCategories, setselectedCategories] = useState<string[]>([])


    const findSubCategories = () => {

    }

    const changeCategories = (id: string) => {
        if (selectedCategories.find((idCategory: string) => idCategory === id)) {
            setselectedCategories(selectedCategories.filter((idCategory: string) => idCategory !== id))
        } else {
            setselectedCategories([...selectedCategories, id])
        }

    }

    const getPosts = () => {
        api.get(`/post?page=1&take=100&search=&categories=${selectedCategories.join()}`).then((res: any) => {
            setPosts(res.data.data.data[0])
        })
    }

    useEffect(() => {
        api.get("/category").then((res: any) => {
            setCategories(res.data)
        })
        getPosts()

    }, [])

    useEffect(() => {
        getPosts()
    }, [selectedCategories])

    return (


        <main id="ContentPage">

            <NavegationBar />
            <section className="container_home">
                <header className="header_home">
                    <SearchBar />
                    <div className="container_logo_text">
                        <img src="https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FlogoMediaSpaceWhite.png?alt=media&token=201ea68e-2cf8-4f40-9ada-ec47a7dfa8c3" alt="" />

                        <div>
                            <h1>Um esp??o abundante em m??dias digitais</h1>
                            <span>Encontre prestadores de servi??os digitais ou ofere??a seus pr??prios servi??os. Todo projeto come??a com uma ideia, n??s facilitamos o resto...</span>
                        </div>
                    </div>
                </header>

                <div className="function_site">
                    <h2>Tornamos sua jornada mais simples</h2>
                    <div className="container_functions">
                        <div>
                            <div className="elispe_function">
                                <img src="https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2Fexplore.png?alt=media&token=0a6fe0fc-1e37-43a8-a88a-a34ebe5dc9d5" alt="" />
                            </div>
                            <span>Cadastre-se e explore</span>
                        </div>

                        <div>
                            <div className="elispe_function">
                                <img src="https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2Fsearch.png?alt=media&token=19526fc2-df69-4b3e-b14c-c4c5a64395a3" />
                            </div>
                            <span>Pesquise diversas ??reas</span>
                        </div>
                        <div>
                            <div className="elispe_function">
                                <img src="https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2Fdealing.png?alt=media&token=f9ebe541-1c86-40e8-8aec-4085c9236285" />
                            </div>
                            <span>Forme equipes</span>
                        </div>
                        <div>
                            <div className="elispe_function">
                                <img src="https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FupgradeRocket.png?alt=media&token=3a8a8c90-b7d3-4bfa-9968-fffe2ad8c868" />
                            </div>
                            <span>Impulsione sua publica????o</span>
                        </div>
                    </div>
                    <span>
                        N??s existimos para facilitar sua divulga????o e te ajudamos a achar o ???brilho??? do seu projeto.
                    </span>

                </div>

                <div>
                    <div className="project-page-filter-container">


                        {
                            categories.map((category: any) =>
                                <ButtonCategories category={category.name} name={category} icon={category.icon} id={category.id} key={category.id} action={() => console.log("")} setSubCategories={findSubCategories} />
                            )
                        }


                    </div>

                    <div className="project-page-projects-container">
                        <h2>Portf??lios</h2>

                        <div className="project-page-projects-card-container">
                            {
                                posts.map((post: IPost) =>
                                    <PortifolioCardHome post={post} />
                                )
                            }
                        </div>


                    </div>
                </div>
                <footer>
                    <div className="back_start">
                        <span>Voltar ao ??nicio</span>
                    </div>
                    <div className="container_mapa_site">
                        <div>
                            <ul>
                                <li>Conhe??a-nos</li>
                                <li>Landing page</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Ganhe dinheiro conosco</li>
                                <li>Anuncie seus produtos</li>
                                <li>Candidate-se ?? projetos</li>
                                <li>Participe de eventos</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Pagamentos</li>
                                <li>Cart??o de cr??dito</li>
                                <li>Cart??o de d??bito</li>
                                <li>Carteiras digitais</li>
                                <li>Boleto</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Condi????es de uso</li>
                                <li>Termos e condi????es</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Alguma d??vida?</li>
                                <li>Ajuda</li>
                            </ul>
                        </div>
                    </div>

                    <div className="container_empresa_desenvolvedores">
                        <img src="https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FlogoColorPlay.png?alt=media&token=6a99a7e2-f527-4cb6-a6b2-532babc7b078" />
                        <h5>Desenvolvedores</h5>
                        <p>Eduardo, Gabriel, Gean, Laise, Marcus, Maria</p>
                        <span>??2022</span>
                    </div>
                </footer>
                {/* <section className="section_main"> main</section> */}
            </section>


        </main>



    );
}

export default HomePage;