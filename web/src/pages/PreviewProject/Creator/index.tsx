import React, { useEffect, useReducer, useState } from 'react'
import SearchBar from "../../../components/HeaderPage/Search";
import NavegationBar from "../../../components/utils/navegation";
import { formatDateProject } from '../../../service/Regex/regex';
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
   const [isLoading, setIsLoading] = useState(true)

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
               "nickname": "",
               "description": null,
               "profile_picture": "",
               "general_evaluation": 0,
               "status": true,
               "is_active": true,
               "is_freelancer": true,
               "create_at": "",
               "update_at": ""
            },
            "members": [
               {
                  "id": "",
                  "is_active": null,
                  "accept": true,
                  "is_selected": false
               }
            ]
         }
      ],
      "sub_categories": [
         {
            "id": "",
            "name": "",
            "is_active": true,
            "create_at": "",
            "update_at": ""
         }
      ],
      "requirements": [],
      "management": null,
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
         "is_authenticated": true,
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
            "id": "",
            "url": "",
            "create_at": "",
            "update_at": ""
         }
      ]
   }
   )



   // const dateFormat = (dates: any) => {
   //    dates = project.create_at.split("T")
   //    return dates[0]
   // }



   /********slide */
   useEffect(() => {
      api.get(`/project/${projectId}`).then((res: any) => {
         console.log("a")
         setProject(res.data.data)
         setIsLoading(false)
      })
   }, [])



   return (
      <>
         <main>
            <NavegationBar />
            {
               !isLoading &&
               <div className="Container">
                  <SearchBar />
                  <section className='container_preview_project'>

                     <div className='preview_project'>
                        <div className='container_images_from_project'>

                           <CarouselImages images={project.images} />


                        </div>

                        <div className='container_dates'>
                           <p><span>Criado em:   </span>{formatDateProject(project.create_at)}</p>
                           <p>
                              <span>Prazo de término:  </span>
                              {formatDateProject(project.estimated_deadline)}
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
                           {/* <span onClick={() => { }} > <RiDeleteBinLine /> </span>
                        <span> <FaEdit /> </span> */}

                           <InputBtn typeInput={'submit'} name={'btnCadastrar'} className={'input_btn_project'} valueBtn={'Executar projeto'} onClick={() => { navigation(`/projects/selectFreelancer/${projectId}`) }} />
                        </div>

                        <div className='container_categories_project'>
                           {
                              project.categories.map((category: any) => {
                                 return <CategoryCard category={category.name} icon={category.icon} key={category.id} />
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
                                    return <FreelancerInterest image_profile={interest.team.profile_picture
                                    } name={interest.team.name} nickname={interest.team.nickname} />
                                 })

                              }
                           </div>

                           <p onClick={() => { navigation(`/projects/allfreelancerview/${projectId}`) }}>Ver todos</p>
                        </div>
                     </div>
                  </section>
               </div>
            }

         </main>

      </>
   )
}

export default PreviewProjectCreator;