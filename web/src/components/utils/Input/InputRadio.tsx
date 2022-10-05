import React, { useEffect } from "react";

interface IInputRadio {
  value : string
  id: string
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,

}

const InputRadio = ({ value, id, name , handleChange }: IInputRadio) => {

   useEffect(() => {

        }, [id])
    return (
      <label>
         <input onChange={(event) => handleChange(event)} type="radio" value={id} name={name} />
              {value}
      </label>

  );
};

export default InputRadio;
