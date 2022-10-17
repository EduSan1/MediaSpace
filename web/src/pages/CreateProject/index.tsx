import React from "react";
import InputLogin from "../../components/utils/Input/LoginInput";
import Checkbox from "../../components/utils/Input/checkbox/InputCheckbox";
import ButtonCategories from "../../components/utils/Button/Categories/Categories";
import HeaderPages from "../../components/HeaderPage";
import InputBtn from "../../components/utils/Button/InputBtn";


const CreateProject = () => {
   return (
      <>
         <HeaderPages />
         <div className="testeTeste">

            <div>
               <input type="file" name="files[]" multiple />
            </div>
            {/* <div className="page_create_project">
               <div className="container_informations">
                  <div className="title_page_project" >
                     <h1>Criação de projeto</h1>
                  </div>

                  <div className="inputs_projects">
                     <label className="subtitulo_projects">
                        Nome do projeto
                     </label>

                     <div>
                        <input type="text" />
                     </div>
                  </div>
                  <div className="inputs_projects">
                     <label className="subtitulo_projects">
                        Descrição
                     </label>
                     <div>
                        <textarea></textarea>
                     </div>
                  </div>

                  <div className="container_categories  container_projects">
                     <div className="subtitulo_projects">
                        <label> Categorias </label>
                        <p className="paragraph_projects">Selecione a categoria do projeto</p>
                     </div>
                     <div className="categories projects">
                        <ButtonCategories category="teste" name="teste" icon="" id="3" action={() => console.log("testando")} />


                     </div>
                  </div>

                  <div className="container_subcategories container_projects">
                     <div className="subtitulo_projects">
                        <label> Sub-categorias </label>
                        <p className="paragraph_projects">Selecione a sub-categoria do projeto</p>
                     </div>
                     <div className="sub_categories">
                        <Checkbox nameOption="teste" />
                        <Checkbox nameOption="outroteste" />
                        <Checkbox nameOption="maisumteste" />
                     </div>
                  </div>

                  <div className="inputs_projects">
                     <label className="subtitulo_projects">
                        Prazo estimado de entrega
                     </label>
                     <div>
                        <input type="date" />
                        <p className="paragraph_projects">Obs: Sugerimos que essa data seja uma estimativa crível de acordo com seu projeto, você pode negociá-la com um prestador depois.</p>
                     </div>
                  </div>

                  <div className="inputs_projects">
                     <label className="subtitulo_projects">
                        Valor estimado (BRL)
                     </label>
                     <p className="paragraph_projects">Defina seu orçamento</p>
                     <div>

                        <input type="date" name="" id="" />
                        <p className="paragraph_projects">Obs: Sugerimos um valor mínimo de R$15,00. Você pode negociá-lo com um prestador depois.</p>
                     </div>
                  </div>

               </div>
               <div className="container_informations teste">
                  <div className="container_imagens"></div>
                  <div className="container_anexos"></div>
                  <div className="container_impulsionamento"></div>
               </div>
            </div> */}
            {/* <div className="aligment_button">
               <InputBtn typeInput={'submit'} name={'btnCadastrar'} className={'input_btn_cadastrar'} valueBtn={'Cadastrar'} onClick={() => { }} />
            </div> */}

         </div>
      </>
   )
}

export default CreateProject
