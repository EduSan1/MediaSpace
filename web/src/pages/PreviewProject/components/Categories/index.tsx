import React from 'react'
import ButtonCategories from '../../../../components/utils/Button/Categories/Categories'

interface ICategoriesProjects {
   categories: string[]
}


const CategoriesProject = ({ categories }: ICategoriesProjects) => {

   return (
      <>
         <div>
            {
               categories.map((category: any) => {
                  return <ButtonCategories category={category.name} name={category} icon="" id={category.id} key={category.id} action={() => console.log("")} setSubCategories={() => { }} />
               })
            }
         </div>
      </>)

}

export default CategoriesProject;