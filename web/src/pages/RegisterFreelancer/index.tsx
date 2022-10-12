import React from "react";
import ButtonCategories from "../../components/utils/Button/Categories/Categories";
import Checkbox from "../../components/utils/Input/checkbox/InputCheckbox";
import InputBtn from "../../components/utils/Button/InputBtn";


const RegisterFreelancer = () => {
   const [subCategorias, setSubCategoria] = React.useState([]);

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
                  <ButtonCategories category="teste" name="teste" icon="" id="3" action={() => console.log("testando")} />
                  <ButtonCategories category="teste" name="teste" icon="" id="4" action={() => console.log("testando")} />

               </div>
            </div>
            <div className="container_subcategories">
               <div className="subtitulo">
                  <label> Sub-categorias </label>
               </div>

               <div className="sub_categories">
                  <Checkbox nameOption="teste" />
                  <Checkbox nameOption="outroteste" />
                  <Checkbox nameOption="maisumteste" />



               </div>
            </div>
         </div>

         <div className="container_button_finish">
            <InputBtn typeInput={'submit'} name={'btnCadastrar'} className={'input_btn_cadastrar'} valueBtn={'Finalizar'} onClick={() => { }} />
         </div>



      </div>
   )


}

export default RegisterFreelancer;