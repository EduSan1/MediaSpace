import React, { useEffect, useState } from 'react'
import SearchBar from "../../../components/HeaderPage/Search";
import NavegationBar from "../../../components/utils/navegation";
import { formatDate, formatMoney } from '../../../service/Regex/regex';
import InputBtn from "../../../components/utils/Button/InputBtn";
import ButtonCategories from '../../../components/utils/Button/Categories/Categories';
import { CarouselImages } from '../components/carousel';
import { useParams } from 'react-router-dom';
import api from '../../../service';
import jwt from "jwt-decode"

const PreviewProjectFreelancer = () => {
   const { projectId } = useParams()

   const [project, setProject] = useState({
      "id": "",
      "name": "",
      "description": "",
      "value": 0,
      "estimated_deadline": "",
      "finish_project_date": null,
      "start_project_date": null,
      "is_active": true,
      "status": "",
      "create_at": "",
      "update_at": "",
      "user": {
         "id": "",
         "first_name": "",
         "last_name": "",
         "nickname": "",
         "birth_date": "",
         "cpf": "",
         "mail": "",
         "password": "",
         "biography": "",
         "profile_picture": "",
         "is_active": true,
         "is_authenticated": false,
         "create_at": "",
         "update_at": "",
         "gender": {
            "id": "",
            "gender": "",
            "create_at": "",
            "update_at": ""
         },
         "phone": {
            "id": "",
            "ddd": "",
            "phone": "",
            "ddi": null
         },
         "teams": [],
         "project_member": []
      },
      "categories": [
         {
            "id": "",
            "name": "",
            "icon": "",
            "is_active": true,
            "create_at": "",
            "update_at": ""
         }
      ],
      "images": [
         {
            "url": ""
         },
         {
            "url": ""
         },
       

      ]
   }
   )

   const freelancersInterest = async () =>{

      const userJwt = await localStorage.getItem('userDetails');
      const user: any = jwt(userJwt ? userJwt : "")
      const userId = user.userDetails.id
      console.log(userId)

      const freelancersInterestedToSend = {
         freelacerId: userId
      }

      api.post(`/project/registerInterest/${projectId}`, freelancersInterestedToSend).then((res) => {
         if (res.data.statusCode !== 200) {
            window.alert("Não foi possível registrar interesse")
            console.log(res.data)
         } else {
            console.log("deu certo")
            window.alert("Interesse registrado com sucesso")
         }
      })
   }

   useEffect(() => {
      api.get(`/project/${projectId}`).then((res: any) => {
         setProject(res.data.data)
        
      })
   },[])

   return (
      <>
         <main>
            <NavegationBar />
            <div className="Container">
               <SearchBar />
               <section className='container_preview_project'>

                  <div className='preview_project'>
                     <div className='container_images_from_project'>
                        <CarouselImages images={project.images} />
                     </div>

                     <div className='container_dates'>
                        <p><span>Criado em:   </span>{formatDate(project.estimated_deadline)}</p>
                        <p>
                           <span>Prazo de término:  </span>
                           {formatDate(project.estimated_deadline)}
                        </p>
                     </div>
                     <div className='container_creator_value'>
                        <div className='container_profile'>
                           <div className='picture_profile'>
                              <img src={project.user.profile_picture}/>
                           </div>
                           <div>
                              <label>{project.user.first_name}</label>
                              <span>@{project.user.nickname}</span>
                           </div>
                        </div>
                        <div className='container_value'>
                           <p>Valor estimado: <span>R$ {project.estimated_deadline}</span></p>
                        </div>
                     </div>

                     <div className='container_informations_project'>
                        <h1>{project.name}</h1>
                        <p>{project.description}</p>
                     </div>

                     <div className='container_buttons_project'>
                        <InputBtn typeInput={'submit'} name={'btnCadastrar'} className={'input_btn_project'} valueBtn={'Candidatar-se'} onClick={() => {freelancersInterest()}} />
                     </div>

                     <div className='container_categories_project'>
                        {
                           project.categories.map((category: any) => {
                              return <ButtonCategories category={category.name} name={category} icon="" id={category.id} key={category.id} action={() => console.log("")} setSubCategories={() => { }} />
                           })
                        }
                     </div>
                  </div>
               </section>
            </div>

         </main>
      </>
   )
}

export default PreviewProjectFreelancer;