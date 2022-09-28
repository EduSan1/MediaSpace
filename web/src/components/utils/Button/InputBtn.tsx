import React, { } from "react";
import "../../../styles/components/utils/Button/btnInput.scss"

interface IInputBtn {
  typeInput: string,
  name: string,
  className: string,
  valueBtn: string,
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void


}

const inputBtn = ({ typeInput, name, className, valueBtn, onClick }: IInputBtn) => {

  return (

    <>

      <input type={typeInput} className={className} name={name} value={valueBtn} onClick={(event: React.MouseEvent<HTMLInputElement>) => onClick(event)} />

    </>


  );

}

export default inputBtn;