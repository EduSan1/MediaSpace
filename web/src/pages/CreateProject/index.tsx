import React from "react";
import InputLogin from "../../components/utils/Input/LoginInput";
import Checkbox from "../../components/utils/Input/checkbox/InputCheckbox";
import ButtonCategories from "../../components/utils/Button/Categories/Categories";
import InputBtn from "../../components/utils/Button/InputBtn";
import { RiCalendar2Line } from "react-icons/ri";



const CreateProject = () => {
   return (
      <>
         <div className="testeTeste">
            <div className="page_create_project">
               <div className="container_informations">
                  <div className="title_page_project" >
                     <h1>Criação de projeto</h1>
                  </div>
                  <div>
                     <InputLogin valueLogin={""} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { }} typeInput={"text"} placeholder={"Nome"} icon={""} name={"first_name"} label={"Nome"} className={"input_register"} maxlength={50} />
                  </div>


                  <div className="container_text_area">
                     <div className="container_label">
                        <label>Descrição</label>
                     </div>
                     <div>
                        <textarea className="description_project" />
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
                     <InputLogin valueLogin={""} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { }} typeInput={"date"} placeholder={""} icon={<RiCalendar2Line className="IconLogin" />} name={"deadline_project"} label={"Prazo estimado de entrega"} className={"input_register"} maxlength={8} />
                     <p className="paragraph_projects">Obs: Sugerimos que essa data seja uma estimativa crível de acordo com seu projeto, você pode negociá-la com um prestador depois.</p>

                  </div>

                  <div className="inputs_projects">
                     <div>
                        <InputLogin valueLogin={""} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { }} typeInput={"number"} placeholder={""} icon={""} name={"value_project"} label={"Valor estimado (BRL)"} className={"input_register"} maxlength={8} />
                        <p className="paragraph_projects">Obs: Sugerimos um valor mínimo de R$15,00. Você pode negociá-lo com um prestador depois.</p>
                     </div>
                  </div>

               </div>

               <div className="container_informations teste">
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
                  <div className="container_impulsionamento"></div>
               </div>
            </div> </div>

         {/* 
            <div className="aligment_button">
               <InputBtn typeInput={'submit'} name={'btnCadastrar'} className={'input_btn_cadastrar'} valueBtn={'Cadastrar'} onClick={() => { }} />
            </div>
         */}
      </>
   )
}

export default CreateProject
