import React, { useState } from "react";
import Checkbox from "../../components/utils/Input/checkbox/InputCheckbox";
import ButtonCategories from "../../components/utils/Button/Categories/Categories";
import InputBtn from "../../components/utils/Button/InputBtn";
import BoostButton from "./components/BoostButton";
import InputProject from "./components/Input";
import SearchBar from "../../components/HeaderPage/Search";
import NavegationBar from "../../components/utils/navegation";




const CreateProject = () => {

   const [project, setProject] = useState({

   })

   // const [image, setImagem] = React.useState({
   // });
   // const imageHandler = (event: any) => {
   //    const reader = new FileReader();
   //    reader.onload = () => {
   //       if (reader.readyState === 2) {
   //          //console.log(reader.result)
   //          setImagem({ setImagem: reader.result })
   //       }
   //    }
   //    console.log(reader.readAsDataURL(event.target.files[0]))
   // }


   const [subCategorias, setSubCategorias] = React.useState([])

   const categories = [
      {
         "id": "29a6f6c8-552e-41b5-b7ec-c26f59b85144",
         "name": "Programação",
         "icon": "aaaaaa",
         "is_active": true,
         "create_at": "2022-10-03T16:03:47.814Z",
         "update_at": "2022-10-11T18:50:00.000Z",
         "sub_categories": [
            {
               "id": "d44094c0-204d-409f-82a0-d7bfa30cea6c",
               "name": "Java",
               "is_active": true,
               "create_at": "2022-10-03T16:04:36.730Z",
               "update_at": "2022-10-11T18:50:55.000Z"
            },
            {
               "id": "7d5008cc-f901-4f82-abed-67618045dd82",
               "name": "JavaScript",
               "is_active": true,
               "create_at": "2022-10-03T16:04:31.999Z",
               "update_at": "2022-10-11T18:50:16.000Z"
            }
         ]
      },
      {
         "id": "35a1debd-45ea-4151-8c38-9bfc1a0328d0",
         "name": "Design",
         "icon": "teste",
         "is_active": true,
         "create_at": "2022-09-28T19:28:39.352Z",
         "update_at": "2022-10-11T18:47:24.000Z",
         "sub_categories": [
            {
               "id": "bde617c5-3c4f-4f96-9d03-131e07fd1b54",
               "name": "Logo",
               "is_active": true,
               "create_at": "2022-10-11T18:49:30.152Z",
               "update_at": "2022-10-11T18:49:30.152Z"
            },
            {
               "id": "9796fbed-13f0-49a6-bb29-442abdd4a8a8",
               "name": "3d",
               "is_active": true,
               "create_at": "2022-10-11T18:47:50.604Z",
               "update_at": "2022-10-11T18:47:50.604Z"
            },
            {
               "id": "9283e980-4fa9-458a-be10-aa86327184db",
               "name": "Adobe Photoshop",
               "is_active": true,
               "create_at": "2022-10-11T18:49:26.249Z",
               "update_at": "2022-10-11T18:53:40.000Z"
            },
            {
               "id": "8921ad8a-5580-442c-ac87-3dea9f2b2ad5",
               "name": "Ícones",
               "is_active": true,
               "create_at": "2022-10-11T18:49:35.832Z",
               "update_at": "2022-10-11T18:49:35.832Z"
            }
         ]
      },
      {
         "id": "f7b6ae02-b5e8-4ed6-8984-b629eb293796",
         "name": "Arte",
         "icon": "aaaaaa",
         "is_active": true,
         "create_at": "2022-09-28T19:29:01.880Z",
         "update_at": "2022-10-11T18:52:03.000Z",
         "sub_categories": [
            {
               "id": "c9e1072a-5717-4c12-b864-09bfa784784b",
               "name": "Realista",
               "is_active": true,
               "create_at": "2022-09-28T19:47:51.513Z",
               "update_at": "2022-10-11T18:52:45.000Z"
            },
            {
               "id": "aea06656-a732-44df-80c6-69ec361da75f",
               "name": "Anime",
               "is_active": true,
               "create_at": "2022-09-28T19:47:55.887Z",
               "update_at": "2022-10-11T18:52:19.000Z"
            },
            {
               "id": "47f592c0-5a95-4dc5-9167-453e3f06219e",
               "name": "Cartoon",
               "is_active": true,
               "create_at": "2022-09-28T19:47:59.990Z",
               "update_at": "2022-10-11T18:54:46.000Z"
            },
            {
               "id": "2f96a279-258c-4ec5-adc9-10df528c491b",
               "name": "Retrato",
               "is_active": true,
               "create_at": "2022-09-28T19:47:36.820Z",
               "update_at": "2022-10-11T18:54:08.000Z"
            }
         ]
      }
   ]


   const [subcategoriesToRender, setSubCategoriesToRender] = useState<any>([])

   // const findSubCategories = (idCategory: string) => {
   //    const categoryFilter: any = categories.find((category: any) => category.id === idCategory)
   //    setSubCategoriesToRender([...subcategoriesToRender, categoryFilter])
   // }



   const [caracteres, setCaracteres] = React.useState({
      caracteres: 0
   })

   const numberCaracteres = (event: any) => {
      setCaracteres({
         ...caracteres, caracteres: event.target.value.length
      })
   }

   const findSubCategories = (idCategory: string, action: "REMOVE" | "ADD") => {

      const categoryFilter: any = categories.find((category: any) => category.id === idCategory)

      if (action === "ADD") {
         // setSubategoriesToRender([...subcategoriesToRender, categoryFilter])
         // addToFreelancer(categoryFilter.id, "categories")
      }
      else {

         const categoryFilter = subcategoriesToRender.filter((category: any) => category.id !== idCategory)
         setSubCategoriesToRender(categoryFilter)
         const categoryToRemove = categoryFilter.map((category: any) => {
            return { id: category.id }
         })
         // removeFromFreelancer(categoryToRemove, "categories")
      }
   }

   return (
      <>
<main>
   <NavegationBar/>
   <div className="Container">
      <SearchBar/>
      <section className="section_main">
      <div className="testeTeste">
            <div className="page_create_project">
               <div className="container_informations">
                  <div className="title_page_project" >
                     <h1>Criação de projeto</h1>
                  </div>
                  <InputProject label={"Nome do projeto"} maxLenght={100} name={"teste"} />

                  <div className="container_description_project">
                     <label className="subtitulo_projects">Descrição <span> * </span></label>
                     <div>
                        <textarea onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => { numberCaracteres(event) }} maxLength={800} />
                        <span>{caracteres.caracteres}/800</span>
                     </div>

                  </div>

                  <div className="container_categories_projects">
                     <div className="subtitulo_projects">
                        <label> Categorias </label>
                        <p className="paragraph_projects">Selecione a categoria do projeto</p>
                     </div>
                     <div className="categories projects">
                        {
                           categories.map((category: any) => {
                              return <ButtonCategories category={category.name} name={category} icon="" id={category.id} key={category.id} action={() => console.log("")} setSubCategories={findSubCategories}/>
                           })
                        }


                     </div>
                  </div>

                  <div className="container_subacategories_projects">
                     <div className="subtitulo_projects">
                        <label> Sub-categorias </label>
                        <p className="paragraph_projects">Selecione a sub-categoria do projeto</p>
                     </div>
                     <div className="sub_categories">
                        {
                           subcategoriesToRender.map((category: any) => {
                              return category.sub_categories.map((subCategory: any) => {
                                 return <Checkbox nameOption={subCategory.name} onClickFunction={(check) => check ? "oi":"choro e desesperp"}/>
                              })
                           })
                        }


                     </div>
                  </div>
               </div>

               <div className="container_informations">

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
                  </div> 


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

                              </div></div>
                              </div>
                 


               </div> 

               <div className="aligment_button">
                  <InputBtn typeInput={'submit'} name={'btnCadastrar'} className={'input_btn_publicar_project'} valueBtn={'Publicar'} onClick={() => { }} />
               </div>

            </div>
      </section>
   </div>


  

            </main>
         </>
         )
}

         export default CreateProject
