import React from "react";
import Checkbox from "../../components/utils/Input/checkbox/InputCheckbox";
import ButtonCategories from "../../components/utils/Button/Categories/Categories";
import InputBtn from "../../components/utils/Button/InputBtn";
import BoostButton from "./components/BoostButton";
import SearchBar from "../../components/HeaderPage/Search";
import NavegationBar from "../../components/utils/navegation";




const CreateProject = () => {

   const findSubCategories = (idCategory: string, action: "REMOVE" | "ADD") => {

      // const categoryFilter: any = categories.find((category: any) => category.id === idCategory)

      // if (action === "ADD") {
      //    setSubategoriesToRender([...subcategoriesToRender, categoryFilter])
      //    addToFreelancer(categoryFilter.id, "categories")
      // }
      // else {

      //    const categoryFilter = subcategoriesToRender.filter((category: any) => category.id !== idCategory)
      //    setSubategoriesToRender(categoryFilter)
      //    const categoryToRemove = categoryFilter.map((category: any) => {
      //       return { id: category.id }
      //    })
      //    removeFromFreelancer(categoryToRemove, "categories")
      // }
   }

   return (
      <>
         <main id="ContentPage">

            <NavegationBar />
            <div className="Container">
               <SearchBar />

               <section className="section_main">
                  <div className="testeTeste">
                     <div className="page_create_project">
                        <div className="container_informations">
                           <div className="title_page_project" >
                              <h1>Criação de projeto</h1>
                           </div>
                           <div className="container_input_project">
                              <label className="subtitulo_projects"> Nome do projeto <span> * </span></label>
                              <div>
                                 <input type="text" maxLength={100} name="teste" />
                                 <span>0/100</span>
                              </div>
                           </div>


                           <div className="container_description_project">
                              <label className="subtitulo_projects">Descrição <span> * </span></label>
                              <div>
                                 <textarea />
                                 <span>0/800</span>
                              </div>

                           </div>

                           <div className="container_categories_projects">
                              <div className="subtitulo_projects">
                                 <label> Categorias </label>
                                 <p className="paragraph_projects">Selecione a categoria do projeto</p>
                              </div>
                              <div className="categories projects">
                                 <ButtonCategories setSubCategories={findSubCategories} category="teste" name="teste" icon="" id="3" action={() => console.log("testando")} />


                              </div>
                           </div>

                           <div className="container_subacategories_projects">
                              <div className="subtitulo_projects">
                                 <label> Sub-categorias </label>
                                 <p className="paragraph_projects">Selecione a sub-categoria do projeto</p>
                              </div>
                              <div className="sub_categories">
                                 <Checkbox onClickFunction={(check: boolean) => console.log("a")} nameOption="teste" />

                              </div>
                           </div>

                           <div className="container_input_project">
                              <label className="subtitulo_projects">  Prazo estimado de entrega <span> * </span></label>
                              <div>
                                 <input type="date" maxLength={100} name="teste" />
                              </div>
                              <div>
                                 <label className="paragraph_projects">Obs: Sugerimos que essa data seja uma estimativa crível de acordo com seu projeto,
                                    você pode negociá-la com um prestador depois.</label>
                              </div>
                           </div>

                           <div className="container_input_project">
                              <label className="subtitulo_projects">Valor estimado (BRL)<span> * </span></label>
                              <div>
                                 <input className="input_value_project" type="number" min={0} name="teste" />
                              </div>
                              <span>
                                 <label className="paragraph_projects">Obs: Sugerimos um valor mínimo de R$15,00. Você pode negociá-lo com um prestador depois.</label>
                              </span>
                           </div>

                        </div>

                        <div className="container_informations">
                           <div className="container_files">
                              <div className="container_text">
                                 <label className="subtitulo_projects">Imagens</label>
                                 <div>
                                    <p className="paragraph_projects">Imagens de referências ao projeto</p>
                                    <span className="paragraph_projects">0/4</span>
                                 </div>

                              </div>

                              <div className="container_images">
                                 <div className="aligment_images">
                                    <div className="images">
                                       <img src="" />
                                    </div>
                                    <div className="images">
                                       <img src="" />
                                    </div>
                                 </div>

                                 <div className="aligment_images" >
                                    <div className="images">
                                       <img src="" />
                                    </div>
                                    <div className="images">
                                       <img src="" />
                                    </div>
                                 </div>


                              </div>
                              <div>
                                 <p className="paragraph_projects" >Extensões permitidas: .png, .jpg, .jpeg, .gifs</p>
                              </div>
                              <div>
                                 <label className="inputFotoTeste">
                                    <input type="file" id="" />
                                 </label>

                                 {/* <InputBtn typeInput={'submit'} name={'btn_add_photo'} className={'input_btn_upload_photo_project'} valueBtn={'Selecionar imagem'} onClick={() => { }} /> */}
                              </div>


                           </div>
                           <div className="container_anexos"></div>
                           <div className="container_boost">
                              <label className="subtitulo_projects"> Impulsionamento <span> (recurso pago) </span></label>
                              <p className="paragraph_projects">Tenha um alcance maior com sua publicação</p>
                              <div className="teste">
                                 <div className="container_boost_buttons">
                                    <BoostButton type={"Padrão"} valueBoost={"Gratuito"} imageBoost={""} label={""} />
                                    <BoostButton type={"Impulsionado"} valueBoost={"R$ 50,00"} imageBoost={""} label={""} />
                                 </div>
                                 <div className="container_texts_boost">
                                    <p>Com a opção "impulsionado" você tem a sua publicação divulgada com um maior alcance, sendo anunciada nos primeiros resultados de exibição na plataforma. </p>
                                    <p>Incluídos no Impulsionamento
                                       <ul>
                                          <li>Pagamento único (uma vez para cada publicação)</li>
                                          <li>Maior visibilidade</li>
                                          <li>Destaque na exibição</li>
                                       </ul>
                                    </p>

                                    <p>Recomendado para grandes projetos.</p>
                                 </div>

                              </div>

                           </div>
                        </div>
                     </div> </div>
               </section>
            </div>
         </main>


         {/* 
            <div className="aligment_button">
               <InputBtn typeInput={'submit'} name={'btnCadastrar'} className={'input_btn_cadastrar'} valueBtn={'Cadastrar'} onClick={() => { }} />
            </div>
         */}
      </>
   )
}

export default CreateProject
