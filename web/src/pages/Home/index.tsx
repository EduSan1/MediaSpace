import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useJwt } from "react-jwt";
import SearchBar from "../../components/HeaderPage/Search";
import NavegationBar from "../../components/utils/navegation";
import ButtonCategories from "../../components/utils/Button/Categories/Categories";
import api from "../../service";
import ProjectCard from "../Projects/ProjectCard";


const HomePage = () => {

    const user = localStorage.getItem('userDetails');
    const { decodedToken, isExpired } = useJwt(user ? user : "");
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])
    const [projects, setProjects] = useState([])

    const findSubCategories = () => {

    }

    useEffect(() => {
        api.get("/category").then((res: any) => {
            setCategories(res.data)
        })

        api.get("/project").then((res: any) => {
            setProjects(res.data.data)
        })
    }, [])

    return (


        <main id="ContentPage">

            <NavegationBar />
            <section className="container_home">
                <header className="header_home">
                    <SearchBar />
                    <div className="container_logo_text">
                        <img src="https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FlogoMediaSpaceWhite.png?alt=media&token=201ea68e-2cf8-4f40-9ada-ec47a7dfa8c3" alt="" />

                        <div>
                            <h1>Um espço abundante em mídias digitais</h1>
                            <span>Encontre prestadores de serviços digitais ou ofereça seus próprios serviços. Todo projeto começa com uma ideia, nós facilitamos o resto...</span>
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
                            <span>Pesquise diversas áreas</span>
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
                            <span>Impulsione sua publicação</span>
                        </div>
                    </div>
                    <span>
                        Nós existimos para facilitar sua divulgação e te ajudamos a achar o ✨brilho✨ do seu projeto.
                    </span>

                </div>

                <div>
                    <div className="project-page-filter-container">

                        <div className="project-page-filter-icon">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        {
                            categories.map((category: any) =>
                                <ButtonCategories category={category.name} name={category} icon={category.icon} id={category.id} key={category.id} action={() => console.log("")} setSubCategories={findSubCategories} />
                            )
                        }


                    </div>

                    <div className="project-page-projects-container">
                        <h2>Projetos</h2>

                        <div className="project-page-projects-card-container">
                            {
                                projects.map((project: any) => {
                                    return <ProjectCard user={project.user} id={project.id} name={project.name} description={project.description} value={project.value} image={project.images} categories={project.categories} />
                                })
                            }
                        </div>


                    </div>
                </div>
                <footer>
                    <div className="back_start">
                        <span>Voltar ao ínicio</span>
                    </div>
                    <div className="container_mapa_site">
                        <div>
                            <ul>
                                <li>Conheça-nos</li>
                                <li>Landing page</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Ganhe dinheiro conosco</li>
                                <li>Anuncie seus produtos</li>
                                <li>Candidate-se à projetos</li>
                                <li>Participe de eventos</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Pagamentos</li>
                                <li>Cartão de crédito</li>
                                <li>Cartão de débito</li>
                                <li>Carteiras digitais</li>
                                <li>Boleto</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Condições de uso</li>
                                <li>Termos e condições</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Alguma dúvida?</li>
                                <li>Ajuda</li>
                            </ul>
                        </div>
                    </div>

                    <div className="container_empresa_desenvolvedores">
                        <img src="https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FlogoColorPlay.png?alt=media&token=6a99a7e2-f527-4cb6-a6b2-532babc7b078" />
                        <h5>Desenvolvedores</h5>
                        <p>Eduardo, Gabriel, Gean, Laise, Marcus, Maria</p>
                        <span>©2022</span>
                    </div>
                </footer>
                {/* <section className="section_main"> main</section> */}
            </section>


        </main>



    );
}

export default HomePage;