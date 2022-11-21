import React, { useEffect, useReducer, useState } from 'react'
import SearchBar from "../../../components/HeaderPage/Search";
import NavegationBar from "../../../components/utils/navegation";
import { formatDate, formatMoney } from '../../../service/Regex/regex';
import InputBtn from "../../../components/utils/Button/InputBtn";
import { RiDeleteBinLine, RiEditBoxLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { useParams, Link, Route, useNavigate } from 'react-router-dom';
import api from '../../../service';
import CategoryCard from '../../../components/utils/CategoryCard';
import { CarouselImages } from '../components/carousel';
import FreelancerInterest from '../components/FreelancersInterest/index';



const PreviewProjectCreator = () => {

   const navigation = useNavigate();
   const { projectId } = useParams()
   const [project, setProject] = useState({
      "name": "",
      "description": "",
      "value": 0,
      "estimated_deadline": "",
      "finish_project_date": null,
      "start_project_date": null,
      "is_active": true,
      "status": "AWAITING_START",
      "create_at": "2022-11-06T19:53:48.395Z",
      "update_at": "2022-11-06T19:53:48.395Z",
      "interest": [
         {
            "id": "",
            "all_members_accept": true,
            "is_selected": false,
            "team": {
               "id": "",
               "name": "",
               "nickname": "123131",
               "description": null,
               "profile_picture": "teste",
               "general_evaluation": 0,
               "status": true,
               "is_active": true,
               "is_freelancer": true,
               "create_at": "2022-11-16T22:59:40.702Z",
               "update_at": "2022-11-16T22:59:40.702Z"
            },
            "members": [
               {
                  "id": "b014933b-04fe-47a9-ac0e-086b06ff9bf5",
                  "is_active": null,
                  "accept": true,
                  "is_selected": false
               }
            ]
         }
      ],
      "sub_categories": [
         {
            "id": "e0b772b1-c6a5-4e8e-bd4f-7836d9271c44",
            "name": "outrotesteobrigatorio",
            "is_active": true,
            "create_at": "2022-11-06T19:49:08.421Z",
            "update_at": "2022-11-06T19:49:08.421Z"
         }
      ],
      "requirements": [],
      "management": null,
      "user": {
         "id": "78af51cf-da66-4b4d-809a-3e9f4b024a3f",
         "first_name": "Laise",
         "last_name": "Silva",
         "nickname": "1231312",
         "birth_date": "2022-10-10T03:00:00.000Z",
         "cpf": "11122233345",
         "mail": "132laise@gmail.com",
         "password": "$2b$10$MG1iPGNdickwr.2FS/n9cuyR403NRyxNiHr92QdXaOtj.zUiicV5G",
         "biography": "",
         "profile_picture": "teste",
         "is_active": true,
         "is_authenticated": true,
         "create_at": "2022-11-06T19:50:17.804Z",
         "update_at": "2022-11-07T00:38:05.000Z",
         "gender": {
            "id": "572f76e9-2940-4de1-8154-090ff7ec8ab4",
            "gender": "Teste",
            "create_at": "2022-11-06T19:47:46.123Z",
            "update_at": "2022-11-06T19:47:46.123Z"
         },
         "phone": {
            "id": "721a6f4f-5e15-4e97-9592-437c7a2c30d8",
            "ddd": "11",
            "phone": "912345678",
            "ddi": null
         },
         "teams": [],
         "project_member": []
      },
      "categories": [
         {
            "id": "a10fd9ab-7dd7-4b24-977b-291fba62de6f",
            "name": "obrigatóerio",
            "icon": "aaaaaa",
            "is_active": true,
            "create_at": "2022-11-06T19:48:24.139Z",
            "update_at": "2022-11-06T19:48:24.139Z"
         }
      ],
      "images": [
         {
            "id": "f86c28c2-a555-4199-bf50-ab2616bf2f5a",
            "url": "https://cdn.dribbble.com/userupload/3859445/file/original-d0324ddd20a4faca55d1cb44c66d239f.jpg?compress=1&resize=1024x768",
            "create_at": "2022-11-06T19:53:48.408Z",
            "update_at": "2022-11-06T19:53:48.408Z"
         }
      ]
   }
   )

   console.log(project)

   const dateFormat = (dates: any) => {
      dates = project.create_at.split("T")
      return dates[0]
   }



   /********slide */
   const [currentIndex, setCurrent] = useState(0)
   useEffect(() => {
      api.get(`/project/${projectId}`).then((res: any) => {
         setProject(res.data.data)

      })
   }, [])

 

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
                        <p><span>Criado em:   </span>{dateFormat(project.create_at)}</p>
                        <p>
                           <span>Prazo de término:  </span>
                           {dateFormat(project.estimated_deadline)}
                        </p>
                     </div>
                     <div className='container_creator_value'>
                        <div className='container_profile'>
                           <div className='picture_profile'>
                              <img src={project.user.profile_picture} />
                           </div>
                           <div>
                              <label>{project.user.first_name}</label>
                              <span>@{project.user.nickname}</span>
                           </div>
                        </div>
                        <div className='container_value'>
                           <p>Valor estimado: <span>R$ {project.value}</span></p>
                        </div>
                     </div>

                     <div className='container_informations_project'>
                        <h1>{project.name}</h1>
                        <p>{project.description}</p>
                     </div>

                     <div className='container_buttons_project'>
                        <span onClick={() => { }} > <RiDeleteBinLine /> </span>
                        <span> <FaEdit /> </span>

                        <InputBtn typeInput={'submit'} name={'btnCadastrar'} className={'input_btn_project'} valueBtn={'Executar projeto'} onClick={() => { navigation(`/projects/selectFreelancer/${projectId}`) }} />
                     </div>

                     <div className='container_categories_project'>
                        {
                           project.categories.map((category: any) => {
                              return <CategoryCard category={category.name} icon="" key={category.id} />
                           })
                        }
                     </div>

                     <div className='container_freelancers_interested'>
                        <h1>Prestadores que se candidataram
                           <span><RiEditBoxLine /></span>
                        </h1>
                        <div className='freelancers_interested'>
                           {

                              project.interest.map((interest: any) => {
                                 console.log(interest)
                                 return <FreelancerInterest image_profile={interest.team.picture_profile} name={interest.team.name} nickname={interest.team.nickname} />
                              })

                           }
                        </div>

                        <p onClick={() => { navigation(`/projects/allfreelancerview/${projectId}`) }}>Ver todos</p>
                     </div>
                  </div>
               </section>
            </div>

         </main>
      </>
   )
}

export default PreviewProjectCreator;