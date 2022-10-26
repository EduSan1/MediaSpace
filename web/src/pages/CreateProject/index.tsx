import React, { useState } from "react";
import Checkbox from "../../components/utils/Input/checkbox/InputCheckbox";
import ButtonCategories from "../../components/utils/Button/Categories/Categories";
import InputBtn from "../../components/utils/Button/InputBtn";
import BoostButton from "./components/BoostButton";
import InputProject from "./components/Input";
import SearchBar from "../../components/HeaderPage/Search";
import NavegationBar from "../../components/utils/navegation";
import { storage } from "../../constants/firebase";
import { getDownloadURL, ref, uploadBytesResumable, UploadTask } from 'firebase/storage';
import Projects from "../Projects";
import { useJwt } from "react-jwt";


const CreateProject = () => {

   const [project, setProject] = useState({
      name: "",
      description: "",
      estimated_value: 0,
      estimated_deadline: "",
      images: [
         {
            "url": "Jorge"
         },
         {
            "url": "Cleiton"
         },
         {
            "url": "Jordania"
         }
      ],
      categories: [

      ],
      sub_categories: [

      ],
      user: {
         "id": "71e89063-c775-4c13-bd29-7ee9ba2c4847"
      }

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


   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setProject({
         ...project, [event.target.name]: event.target.value
      })
      console.log(project)
   }

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

   const uploadImage = (event: any) => {
      event.preventDefault();
      const file = event.target[0].files[0]

      if (!file) return

      const storageRef = ref(storage, `profilePicture/${file.name}`)
      const uploadTask: UploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
         "state_changed",
         snapshot => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100

         },
         error => { alert(error) },
         () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url: string) => {
               setProject({ ...project, })
            })
         }
      )
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
         handleErrors('Informe o descrição do livro.', 'descricao')
      }

      if (!project.estimated_value) {
         validate = false;
         //console.log("ISSO AI COLOCA UMA CAPA MSM NÃO");
         handleErrors('Informe a capa do livro.', 'capa')
      }
   }


   return (
      <>
         <main>
            <NavegationBar />
            <div className="Container">
               <SearchBar />
               <section className="container_page_create_project">
                  <div className="page_create_project">
                     <div className="container_informations">
                        <div className="title_page_project" >
                           <h1>Criação de projeto</h1>
                        </div>
                        <InputProject label={"Nome do projeto"} maxLenght={100} name={"name"} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} />

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
                              <input className="input_value_project" type="number" min={0} name="estimated_value" onChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} />
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

                           <div className="aligment_button">
                              <InputBtn typeInput={'submit'} name={'btnCadastrar'} className={'input_btn_select_image'} valueBtn={'Selecionar imagem'} onClick={() => { }} />
                           </div>
                        </div>



                     </div>
                  </div>
                  <div className="aligment_button">
                     <InputBtn typeInput={'submit'} name={'btnCadastrar'} className={'input_btn_publicar_project'} valueBtn={'Publicar'} onClick={() => { }} />
                  </div>

               </section>
            </div>
         </main>
      </>
   )
}

export default CreateProject
