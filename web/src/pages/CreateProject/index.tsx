import React, { useEffect, useState } from "react";
import Checkbox from "../../components/utils/Input/checkbox/InputCheckbox";
import ButtonCategories from "../../components/utils/Button/Categories/Categories";
import InputBtn from "../../components/utils/Button/InputBtn";
import InputProject from "./components/Input";
import SearchBar from "../../components/HeaderPage/Search";
import NavegationBar from "../../components/utils/navegation";
import Projects from "../Projects";
import { useJwt } from "react-jwt";
import api from "../../service";
import jwt from "jwt-decode"
import { ImageProject } from "./components/ImagesProjects";
import { useNavigate } from "react-router-dom";


const CreateProject = () => {


   // const { decodedToken, isExpired }: any = useJwt(userJwt ? userJwt : "");

   const navigate = useNavigate()
   const [project, setProject] = useState({
      name: "",
      description: "",
      value: 0,
      estimated_deadline: "",
      images: [
         {
            url: "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FbaseProjectImage.png?alt=media&token=b270e971-908f-4e2e-8250-fd36fb1f496f"
         },
         {
            url: "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FbaseProjectImage.png?alt=media&token=b270e971-908f-4e2e-8250-fd36fb1f496f"
         },
         {
            url: "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FbaseProjectImage.png?alt=media&token=b270e971-908f-4e2e-8250-fd36fb1f496f"
         },
         {
            url: "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FbaseProjectImage.png?alt=media&token=b270e971-908f-4e2e-8250-fd36fb1f496f"
         }
      ],
      categories: [

      ],
      sub_categories: [

      ],
      user: {
         id: ""
      }

   })

   const [categories, setCategories] = useState([])

   const [imageIndex, setImageIndex] = useState(0)

   const handleChangeImage = (url: any) => {
      let newImagem = project.images

      newImagem[imageIndex] = { url: url }

      setProject({
         ...project,
         images: newImagem
      })

      setImageIndex(imageIndex + 1)
   }

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


   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.name)
      console.log(project.user.id)
      setProject({
         ...project, [event.target.name]: event.target.value
      })
      console.log(project)
   }

   const [caracteres, setCaracteres] = React.useState({
      caracteres: 0
   })

   const numberCaracteres = (event: any) => {
      setCaracteres({
         ...caracteres, caracteres: event.target.value.length
      })
   }

   const addToProject = (id: string, name: "sub_categories" | "categories") => {
      setProject({
         ...project, [name]: [
            ...project[name], { id: id }
         ]
      })
   }

   const removeFromProject = (object: [{}], name: "sub_categories" | "categories") => {
      setProject({ ...project, [name]: object })
   }

   const removeSubcategory = (id: string) => {
      console.log(id)
      const subCategoriesFilter = project.sub_categories.filter((subcategory: any) => subcategory.id !== id)
      setProject({ ...project, sub_categories: subCategoriesFilter })
   }

   const [subcategoriesToRender, setSubCategoriesToRender] = useState<any>([])

   const findSubCategories = (idCategory: string, action: "REMOVE" | "ADD") => {

      const categoryFilter: any = categories.find((category: any) => category.id === idCategory)

      if (action === "ADD") {
         setSubCategoriesToRender([...subcategoriesToRender, categoryFilter])
         addToProject(categoryFilter.id, "categories")
      }
      else {

         const categoryFilter = subcategoriesToRender.filter((category: any) => category.id !== idCategory)
         setSubCategoriesToRender(categoryFilter)
         const categoryToRemove = categoryFilter.map((category: any) => {
            return { id: category.id }
         })
         removeFromProject(categoryToRemove, "categories")
      }
   }


   const [errors, setErrors] = React.useState({})

   const handleErrors = (errorMessage: string, input: string) => {
      setErrors((prevState) => ({ ...prevState, [input]: errorMessage }))
   }

   const validate = () => {
      let validate = true;

      if (!project.name) {
         validate = false;
         //console.log("TITULO EM BRANCO");
         handleErrors('Informe o nome do projeto.', 'name')
      }

      if (!project.description) {
         validate = false;
         //console.log("COMO ASSIM VC NÃO SABE A DESCRIÇÃO");
         handleErrors('Informe o descrição do projeto.', 'description')
      }

      if (!project.value) {
         validate = false;
         //console.log("ISSO AI COLOCA UMA CAPA MSM NÃO");
         handleErrors('Informe um data.', 'value')
      }
   }

   const createProject = async () => {

      const userJwt = await localStorage.getItem('userDetails');

      const user: any = jwt(userJwt ? userJwt : "")
      const userId = user.userDetails.id
      console.log(userId)

      const projectSend = {
         ...project,
         user: {
            id: userId
         }
      }

      api.post("/project", projectSend).then((res) => {
         if (res.data.statusCode !== 201) {
            window.alert("Não foi possível criar o projeto")
            console.log(res.data)
         } else {
            console.log("deu certo")
            window.alert("Projeto criado com sucesso")
            navigate("/projects")
         }
      })

   }

   useEffect(() => {
      api.get("/category").then((res: any) => {
         setCategories(res.data)
      })
   }, [])

   return (
      <>
         <main>
            <NavegationBar />
            <div className="Container">
               <SearchBar />
               <section className="container_page_create_project">
                  <div className="page_create_project">
                     <div className="container">
                        <div className="title_page_project" >
                           <h1>Criação de projeto</h1>
                        </div>

                        <div className="teste">

                           <div className="container_informations">
                              <InputProject value={project.name} onFocus={() => { }} label={"Nome do projeto"} maxLenght={100} name={"name"} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} />

                              <div className="container_description_project">
                                 <label className="subtitulo_projects">Descrição <span> * </span></label>
                                 <div>
                                    <textarea onChangeCapture={(event: React.ChangeEvent<HTMLTextAreaElement>) => { numberCaracteres(event) }} maxLength={800} name={"description"} onChange={({ target }) => { project.description = target.value }} />
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
                                          return <ButtonCategories category={category.name} name={category} icon="" id={category.id} key={category.id} action={() => console.log("")} setSubCategories={findSubCategories} />

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
                                             return <Checkbox nameOption={subCategory.name} onClickFunction={(check) => check ? removeSubcategory(subCategory.id) : addToProject(subCategory.id, "sub_categories")} />
                                          })
                                       })
                                    }
                                 </div>
                              </div>

                              <div className="container_input_project">
                                 <label className="subtitulo_projects">  Prazo estimado de entrega <span> * </span></label>
                                 <div>
                                    <input type="date" maxLength={100} name="estimated_deadline" onChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} />
                                 </div>
                                 <div>
                                    <label className="paragraph_projects">Obs: Sugerimos que essa data seja uma estimativa crível de acordo com seu projeto,
                                       você pode negociá-la com um prestador depois.</label>
                                 </div>
                              </div>

                              <div className="container_input_project">
                                 <label className="subtitulo_projects">Valor estimado (BRL)<span> * </span></label>
                                 <div>
                                    <input className="input_value_project" type="number" min={0} name="value" onChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} />
                                 </div>
                                 <span>
                                    <label className="paragraph_projects">Obs: Sugerimos um valor mínimo de R$15,00. Você pode negociá-lo com um prestador depois.</label>
                                 </span>
                              </div>
                           </div>


                           <div className="container_informations">
                              <div className="container_files">
                                 <label className="subtitulo_projects">Imagens</label>
                                 <div className="container_aligment_images">
                                    <div className="container_text">
                                       <div>
                                          <p className="paragraph_projects">Imagens de referências ao projeto</p>
                                          <span className="paragraph_projects">{imageIndex}/4</span>
                                       </div>
                                    </div>

                                    <div className="container_upload_images">
                                       <ImageProject imageProjects={project.images} setImageProjects={(image: string) => handleChangeImage(image)} maxImage={imageIndex === 4 ? false : true} />
                                    </div>
                                 </div>
                              </div>
                           </div>


                        </div>

                        <div className="aligment_button">
                           <InputBtn typeInput={'submit'} name={'btnCadastrar'} className={'input_btn_publicar_project'} valueBtn={'Publicar'} onClick={() => {
                              createProject()
                           }} />
                        </div>
                     </div>

                  </div>

               </section>
            </div>
         </main>
      </>
   )
}

export default CreateProject
