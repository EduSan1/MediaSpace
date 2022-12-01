import React, { ReactNode} from "react";

interface IInputBtn {
  typeInput: string,
  name: string,
  className: string,
  valueBtn: string,
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void
  enable?: boolean
}

const InputBtn = ({ typeInput, name, className, valueBtn, onClick, enable }: IInputBtn) => {

  return (

    <>

      <input  type={typeInput} className={className} name={name} value={valueBtn} onClick={(event)=> onClick(event)} />

    </>


  );

}

export default InputBtn;