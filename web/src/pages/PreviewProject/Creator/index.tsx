import React from 'react'
import SearchBar from "../../../components/HeaderPage/Search";
import NavegationBar from "../../../components/utils/navegation";
import { formatDate, formatMoney } from '../../../service/Regex/regex';
import InputBtn from "../../../components/utils/Button/InputBtn";
import { RiDeleteBinLine, RiEditBoxLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import ButtonCategories from '../../../components/utils/Button/Categories/Categories';


const PreviewProject = () => {

   const project = {
      "name": "dasdasd",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat vel dui hendrerit feugiat. Vivamus ut enim sit amet est euismod accumsan sit amet sed arcu. Etiam luctus rutrum turpis vitae pharetra. Suspendisse massa libero, efficitur eu rhoncus id, consectetur ac nisl. In tempor lectus ex, sed eleifend augue mattis ac. In hac habitasse platea dictumst. Nulla neque neque, iaculis ut magna sed, gravida hendrerit ligula. Ut sodales suscipit molestie. Maecenas ligula odio, interdum eget venenatis ac, hendrerit at odio. Fusce rhoncus consequat mi, vitae ornare ex convallis sit amet. Suspendisse elementum ligula augue, nec interdum ipsum placerat at. Etiam bibendum porta urna, sed auctor diam luctus vitae. Nam a tellus nec ligula lobortis accumsan in sit amet nisl. Phasellus consectetur facilisis ligula quis lacinia. Sed bibendum ornare diam.",
      "estimated_value": 250.0,
      "estimated_deadline": "2022-07-10",
      "images": [
         {
            "url": "Jorge"
         },
         {
            "url": "Cleiton"
         },
         {
            "url": "Jordania"
         }
      ],
      "categories": [
         {
            "id": "859c7fb7-9c8e-4bb2-88ef-605502ebbeaa"
         },
         {
            "id": "4b99388f-1f15-4dca-a2e1-33e6f5d9a69b"
         },
         {
            "id": "56dd13ae-7f62-4c35-8e65-d44f374f747c"
         }
      ],
      "sub_categories": [
         {
            "id": "4b99388f-1f15-4dca-a2e1-33e6f5d9a69b"
         },
         {
            "id": "56dd13ae-7f62-4c35-8e65-d44f374f747c"
         }
      ],
   }

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
                              <img src="" />
                           </div>
                           <div>
                              <label>Cardamon</label>
                              <span>@CardamonViolet</span>
                           </div>
                        </div>
                        <div className='container_value'>
                           <p>Valor estimado: <span>R$ {project.estimated_value}</span></p>
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
                              return <ButtonCategories category={category.name} name={category} icon="" id={category.id} key={category.id} action={() => console.log("")} setSubCategories={() => { }} />
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