import React from "react"
import { MdSkipNext } from "react-icons/md";

interface IInputProject {
   label: string
   maxLenght: number
   name: string;

}

const InputProject = ({ label, maxLenght, name }: IInputProject) => {

   const [caracteres, setCaracteres] = React.useState({
      caracteres: 0
   })

   const numberCaracteres = (event: any) => {
      setCaracteres({
         ...caracteres, caracteres: event.target.value.length
      })
      console.log(caracteres.caracteres)
   }

   return (
      <div className="container_input_project">
         <label className="subtitulo_projects">{label}<span> * </span></label>
         <div>
            <input type="text" maxLength={maxLenght} name={name} onChange={(event: React.ChangeEvent<HTMLInputElement>) => { numberCaracteres(event) }} />
            <span>{caracteres.caracteres}/{maxLenght}</span>
         </div>
      </div>
   )
}

export default InputProject;