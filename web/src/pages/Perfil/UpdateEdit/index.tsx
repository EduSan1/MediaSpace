import React, { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import {BiEdit} from "react-icons/bi";
import { HiOutlineIdentification } from "react-icons/hi";
import { MdLockOutline, MdOutlineAlternateEmail, MdPersonOutline } from "react-icons/md";
import { RiCalendar2Line } from "react-icons/ri";
import SearchBar from "../../../components/HeaderPage/Search";
import PerfilCard from "../../../components/perfil/PerfilCard/Client";
import InputBtn from "../../../components/utils/Button/InputBtn";
import InputLogin from "../../../components/utils/Input/LoginInput";
import NavegationBar from "../../../components/utils/navegation";



const UpdateEdit = () => {
   const [hasErrors, setHasErros] = React.useState(false);
   return (

      <main id="ContentPage">

         <NavegationBar />
         <div className="Container">
            <SearchBar />
            <section className="section_main_perfil">
               <PerfilCard first_name="" nickname="" profile_picture="" biography=""/>
               <div className="Div_main_Perfil">
                  <span className="title_name "><h2>Suas Informações</h2> <BiEdit/></span>

                  <div className="container_inputs_UpdateEdit">


                     <span className="Upadet_name_nickname">
                        <InputLogin valueLogin={'name'} hasError={hasErrors} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { }} typeInput={""} placeholder={""} icon={''} name={"first_name"} label={"Nome"} className={hasErrors ? "input_register_error" : "input_register"} maxlength={50} />

                        <InputLogin valueLogin={'second name'} hasError={hasErrors} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { }} typeInput={""} placeholder={""} icon={''} name={"last_name"} label={"Sobrenome"} className={hasErrors ? "input_register_error" : "input_register"} maxlength={150} />

                        <InputLogin valueLogin={'nickname'} hasError={hasErrors} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { }} typeInput={""} placeholder={""} icon={''} name={"nickname"} label={"Nickname"} className={hasErrors ? "input_register_error" : "input_register"} maxlength={25} />

                     </span>




                     <span className="Upadet_cell_email">
                        <InputLogin valueLogin={'Cell'} hasError={hasErrors} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { }} typeInput={"cell"} placeholder={""} icon={''} name={"phone"} label={"Celular"} className={hasErrors ? "input_register_error" : "input_register"} maxlength={14} />

                        <InputLogin valueLogin={'Email'} hasError={hasErrors} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { }} typeInput={"email"} placeholder={"Email"} icon={''} name={"mail"} label={"Email"} className={hasErrors ? "input_register_error" : "input_register"} maxlength={250} />

                     </span>


                     <span className="Upadet_Password_cpf">
                        <InputLogin valueLogin={'Alterar'} hasError={hasErrors} handleChange={() => { }} typeInput={"button"} placeholder={"Alterar"} icon={''} name={"senha"} label={"Senha"} className={hasErrors ? "input_register_error" : "input_register"} maxlength={15} />

                        <InputLogin valueLogin={'Cpf'} hasError={hasErrors} handleChange={() => { }} typeInput={"string"} placeholder={"CPF"} icon={''} name={"cpf"} label={"CPF"} className={hasErrors ? "input_register_error" : "input_register"} maxlength={15} />

                        <InputLogin valueLogin={'Data'} hasError={hasErrors} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { }} typeInput={"date"} placeholder={""} icon={<RiCalendar2Line className="IconLogin" />} name={"birth_date"} label={"Data de nascimento"} className={hasErrors ? "input_register_error" : "input_register"} maxlength={8} />


                     </span>


                     <div className="biography_and_btn">


                        <span className="Upadet_biography">

                           <label>biografia</label>


                           <textarea name="biography" className="biography_Upadet" />

                        </span>

                        <span className='Upadet_btn_edit'>
                           <InputBtn className="btn_edit" name="Torne-se um freelancer" onClick={() => { }} typeInput={'button'} valueBtn="Torne-se um freelancer" enable />
                           <InputBtn className="btn_edit" name="Editar" onClick={() => { }} typeInput={'button'} valueBtn="Editar" enable />
                        </span>


                     </div>



                  </div>
               </div>
            </section>
         </div>
      </main>

   )
}


export default UpdateEdit;