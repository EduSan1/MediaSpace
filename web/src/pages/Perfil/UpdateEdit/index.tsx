import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { SiIfixit } from "react-icons/si";
import { RiCalendar2Line } from "react-icons/ri";
import SearchBar from "../../../components/HeaderPage/Search";
import PerfilCard from "../../../components/perfil/PerfilCard/Client";
import InputBtn from "../../../components/utils/Button/InputBtn";
import InputLogin from "../../../components/utils/Input/LoginInput";
import NavegationBar from "../../../components/utils/navegation";
import { phoneMask } from "../../../service/Regex/regex";
import { useJwt } from "react-jwt";
import jwt from "jwt-decode"




const UpdateEdit = () => {
   const [hasErrors, setHasErros] = React.useState(false);
   const [openEdit, setOpenEdit] = useState(true);
   const [password, setpassword] = useState();

   const [userdetailes,setUserdetailes] = useState({
      nickname: "",
      first_name:"",
      profile_picture:"",
      biography:""
  })


const profileDice = async ()  => {

      const userJwt = await localStorage.getItem('userDetails');
      const user: any = jwt(userJwt ? userJwt : "");
      setUserdetailes(user.userDetails);

  }
   


  useEffect(() => {
   console.log(userdetailes)
  },[userdetailes])

  useEffect(() => {
      profileDice();
          },[])

   const [user, setUser] = React.useState({
      first_name: '',
      last_name: '',
      nickname: '',
      phone: {
         ddd: "11",
         phone: ""
      },
      birth_date: '',
      cpf: '',
      mail: '',
      password: '',
      biography: '',
   })


   useEffect(() => {
      console.log(userdetailes);
   }, [user])


   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUser({
         ...user, [event.target.name]: event.target.value
      })
     

   }

   const handlePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUser({

         ...user, phone: {
            ddd: "",
            phone: phoneMask(event.target.value)


         }

      })
   }
   const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUser({
         ...user,
         [event.target.name]: event.target.value

      })

   }


   const validate = () => {

      if (!user) {
         console.log('consumir api ')
      } else {

         window.alert('pelo menos um campo deve ser preenchido com dados diferentes')
      }

   }


   return (

      <main id="ContentPage">

         <NavegationBar />
         <div className="Container">
            <SearchBar />
            <section className="section_main_perfil">
               <PerfilCard first_name="" nickname="" profile_picture="" biography="" />
               <div className="Div_main_Perfil">
                  <span className="title_name "><h2>Suas Informações</h2> <BiEdit onClick={() => {
                     setOpenEdit(false);
                  }} /></span>

                  <div className="container_inputs_UpdateEdit">


                     <span className="Upadet_name_nickname">
                        <InputLogin disable={false} valueLogin={user.first_name} hasError={hasErrors} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleName(event) }} typeInput={""} placeholder={"nome"} icon={''} name={"first_name"} label={"Nome"} className={hasErrors ? "input_register_error" : "input_register"} maxlength={50} />

                        <InputLogin disable={false} valueLogin={user.last_name} hasError={hasErrors} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleName(event) }} typeInput={""} placeholder={"sobrenome"} icon={''} name={"last_name"} label={"Sobrenome"} className={hasErrors ? "input_register_error" : "input_register"} maxlength={150} />

                        <InputLogin disable={false} valueLogin={user.nickname} hasError={hasErrors} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} typeInput={""} placeholder={"nickname"} icon={''} name={"nickname"} label={"Nickname"} className={hasErrors ? "input_register_error" : "input_register"} maxlength={25} />

                     </span>




                     <span className="Upadet_cell_email">
                        <InputLogin disable={false} valueLogin={user.phone.phone} hasError={hasErrors} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handlePhone(event) }} typeInput={"cell"} placeholder={"cell"} icon={''} name={"phone"} label={"Celular"} className={hasErrors ? "input_register_error" : "input_register"} maxlength={14} />


                        <InputLogin disable={false} valueLogin={user.mail} hasError={hasErrors} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} typeInput={"email"} placeholder={"Email"} icon={''} name={"mail"} label={"Email"} className={hasErrors ? "input_register_error" : "input_register"} maxlength={250} />
                        <SiIfixit className="sgv_noEmail" />


                     </span>


                     <span className="Upadet_Password_cpf">
                        <InputLogin disable={false} valueLogin={'Alterar'} hasError={hasErrors} handleChange={() => { }} typeInput={"button"} placeholder={"Alterar"} icon={''} name={"senha"} label={"Senha"} className={hasErrors ? "input_register_error" : "input_register"} maxlength={15} />


                        {/* <div className="not_input"> */}
                        <InputLogin disable={false} valueLogin={'Cpf'} hasError={hasErrors} handleChange={() => { }} typeInput={"string"} placeholder={"CPF"} icon={''} name={"cpf"} label={"CPF"} className={hasErrors ? "input_register_error" : "input_register"} maxlength={15} />
                        <SiIfixit className="sgv_no" />
                        <InputLogin valueLogin={'2002-09-09'} hasError={hasErrors} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event)}} typeInput={"date"} placeholder={""} icon={<RiCalendar2Line className="IconLogin" />} name={"birth_date"} label={"Data de nascimento"} className={hasErrors ? "input_register_error" : "input_register"} maxlength={8} disable={true} />
                        <SiIfixit className="sgv_no" />
                        {/* </div> */}




                     </span>


                     <div className="biography_and_btn">


                        <span className="Upadet_biography">

                           <label>biografia</label>


                           <textarea name="biography" className="biography_Upadet" />

                        </span>

                        <span className='Upadet_btn_edit'>
                           <InputBtn className="btn_edit" name="Torne-se um freelancer" onClick={() => { }} typeInput={'button'} valueBtn="Torne-se um freelancer" enable />
                           <InputBtn className="btn_edit" name="Editar" onClick={() => { validate() }} typeInput={'button'} valueBtn="Editar" enable />
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