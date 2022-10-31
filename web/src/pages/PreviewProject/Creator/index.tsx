import React, { useEffect, useReducer, useState } from 'react'
import SearchBar from "../../../components/HeaderPage/Search";
import NavegationBar from "../../../components/utils/navegation";
import { formatDate, formatMoney } from '../../../service/Regex/regex';
import InputBtn from "../../../components/utils/Button/InputBtn";
import { RiDeleteBinLine, RiEditBoxLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import ButtonCategories from '../../../components/utils/Button/Categories/Categories';
import { useParams } from 'react-router-dom';
import api from '../../../service';
import CategoryCard from '../../../components/utils/CategoryCard';
import CarouselItem from '../components/carousel/carouselItem';


const PreviewProject = () => {



   const { projectId } = useParams()
   // console.log(projectId)

   const [project, setProject] = useState({
      "id": "bc028552-017b-48e1-a5dc-cf4709fe41a5",
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
         "id": "4b408f96-8b6c-4126-b0a7-89aa80ac10a8",
         "first_name": "Eduardo",
         "last_name": "Santos",
         "nickname": "1231312",
         "birth_date": "2022-10-10T03:00:00.000Z",
         "cpf": "12341231901",
         "mail": "edusan3456@gmail.com",
         "password": "$2b$10$CpMtEbCWE40bejsW6m3unO38s2GkBKhHj01Jd/tpyDC8n84tPh6v2",
         "biography": "",
         "profile_picture": "teste",
         "is_active": true,
         "is_authenticated": false,
         "create_at": "2022-10-24T19:15:57.396Z",
         "update_at": "2022-10-24T19:15:57.396Z",
         "gender": {
            "id": "e6217fb3-6ee2-4f1e-8987-51e6622d9445",
            "gender": "teste",
            "create_at": "2022-09-27T17:03:18.918Z",
            "update_at": "2022-09-27T17:03:18.918Z"
         },
         "phone": {
            "id": "84464cf1-0d47-474c-99dd-df0bffd50bf9",
            "ddd": "11",
            "phone": "912345678",
            "ddi": null
         },
         "teams": [],
         "project_member": []
      },
      "categories": [
         {
            "id": "92997090-f960-45b9-9f7a-4cb9f0e430a1",
            "name": "Jorge",
            "icon": "aaaaaa",
            "is_active": true,
            "create_at": "2022-10-24T19:16:34.763Z",
            "update_at": "2022-10-24T19:16:34.763Z"
         }
      ],
      "images": []
   }
   )


   //console.log(project.images)

   useEffect(() => {
      api.get(`/project/${projectId}`).then((res: any) => {
         setProject(res.data.data)
         //console.log(res.data.data)
      })
   })

   return (
      <>
         <main>
            <NavegationBar />
            <div className="Container">
               <SearchBar />
               <section className='container_preview_project'>

                  <div className='preview_project'>
                     <div className='container_images_from_project'></div>

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
                        <span > <RiDeleteBinLine /> </span>
                        <span> <FaEdit /> </span>

                        <InputBtn typeInput={'submit'} name={'btnCadastrar'} className={'input_btn_project'} valueBtn={'Executar projeto'} onClick={() => { }} />
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
                        <div>
                           <div className='teste'></div>
                           <div className='outroTeste'></div>
                           <div className='teste'></div>
                           <div className='outroTeste'></div>
                        </div>

                        <p>Ver todos</p>
                     </div>
                  </div>
               </section>
            </div>

         </main>
      </>
   )
}

export default PreviewProject;