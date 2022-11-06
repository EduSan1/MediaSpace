import React from "react"
import { MdSkipNext } from "react-icons/md";

interface IInputProject {
   label: string
   maxLenght: number
   name: string;
   handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
   onFocus: (event: React.ChangeEvent<HTMLInputElement>) => void
   value: string
}

const InputProject = ({ label, maxLenght, name, handleChange, onFocus, value }: IInputProject) => {

   const [caracteres, setCaracteres] = React.useState({
      caracteres: 0
   })

   const numberCaracteres = (event: any) => {
      setCaracteres({
         ...caracteres, caracteres: event.target.value.length
      })
   }

   return (
      <div className="container_input_project">
         <label className="subtitulo_projects">{label}<span> * </span></label>
         <div>
            <input value={value} onFocus={(event: React.ChangeEvent<HTMLInputElement>) => { onFocus(event) }} type="text" maxLength={maxLenght} name={name} onChangeCapture={(event: React.ChangeEvent<HTMLInputElement>) => { numberCaracteres(event) }} onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)} />
            <span>{caracteres.caracteres}/{maxLenght}</span>
         </div>
      </div>
   )
}

export default InputProject;