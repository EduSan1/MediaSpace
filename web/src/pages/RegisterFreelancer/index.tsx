import React, { useEffect, useState } from "react";
import ButtonCategories from "../../components/utils/Button/Categories/Categories";
import Checkbox from "../../components/utils/Input/checkbox/InputCheckbox";
import InputBtn from "../../components/utils/Button/InputBtn";
import api from "../../service";
import { useNavigate, useParams } from "react-router-dom";


const RegisterFreelancer = () => {
   // const [subCategorias, setSubCategoria] = React.useState([]);
   const [categories, setCategories] = useState([])

   const { userId } = useParams()

   const navigate = useNavigate()

   const [freelancer, setFreelancer] = useState({
      categories: [

      ],
      sub_categories: [

      ],
      userId: ""
   })

   const addToFreelancer = (id: string, name: "sub_categories" | "categories") => {
      setFreelancer({
         ...freelancer, [name]: [
            ...freelancer[name], { id: id }
         ]
      })
   }

   const removeFromFreelancer = (object: [{}], name: "sub_categories" | "categories") => {
      setFreelancer({ ...freelancer, [name]: object })
   }

   const removeSubcategory = (id: string) => {
      console.log(id)
      const subCategoriesFilter = freelancer.sub_categories.filter((subcategory: any) => subcategory.id !== id)
      setFreelancer({ ...freelancer, sub_categories: subCategoriesFilter })
   }

   const [subcategoriesToRender, setSubategoriesToRender] = useState<any>([])

   const findSubCategories = (idCategory: string, action: "REMOVE" | "ADD") => {
      const categoryFilter: any = categories.find((category: any) => category.id === idCategory)

      if (action === "ADD") {
         setSubategoriesToRender([...subcategoriesToRender, categoryFilter])
         addToFreelancer(categoryFilter.id, "categories")
      }
      else {

         const categoryFilter = subcategoriesToRender.filter((category: any) => category.id !== idCategory)
         setSubategoriesToRender(categoryFilter)
         const categoryToRemove = categoryFilter.map((category: any) => {
            return { id: category.id }
         })
         removeFromFreelancer(categoryToRemove, "categories")
      }
   }

   const registerFreelancer = () => {
      api.post("/freelancer", freelancer).then((res: any) => {
         if (res.data.statusCode === 200) {
            navigate("/register/registered")
         } else {
            window.alert("Não foi possivel cadastrar o prestador")
         }
      })
   }

   useEffect(() => {
      api.get("/category").then((res: any) => {
         setCategories(res.data)
      })

      setFreelancer({ ...freelancer, userId: userId ? userId : "" })
   }, [])

   return (
      <div className="page_register_freelancer">

         <div className="title_page_register_freelancer" >
            <h1>Com quais tipos de serviço você deseja trabalhar?</h1>
         </div>


         <div className="container_categories_subcategories">
            <div className="container_categories">
               <div className="subtitulo">
                  <label> Categorias </label>
               </div>
               <div className="categories">
                  {
                     categories.map((category: any) => {
                        return <ButtonCategories category={category.name} name={category} icon="" id={category.id} key={category.id} action={() => console.log("")} setSubCategories={findSubCategories} />

                     })
                  }
               </div>
            </div>
            <div className="container_subcategories">
               <div className="subtitulo">
                  <label> Sub-categorias </label>
               </div>

               <div className="sub_categories">
                  {
                     subcategoriesToRender.map((category: any) => {
                        return category.sub_categories.map((subcategory: any) => {
                           return <Checkbox onClickFunction={(check) => check ? removeSubcategory(subcategory.id) : addToFreelancer(subcategory.id, "sub_categories")} key={subcategory.id} nameOption={subcategory.name} />
                        })
                     })
                  }

               </div>
            </div>
         </div>

         <div className="container_button_finish">
            <InputBtn enable={freelancer.categories.length < 1} typeInput={'submit'} name={'btnCadastrar'} className={'input_btn_cadastrar'} valueBtn={'Finalizar'} onClick={() => registerFreelancer()} />
         </div>



      </div>
   )


}

export default RegisterFreelancer;