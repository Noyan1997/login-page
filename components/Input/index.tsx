import React, { FC } from 'react'
import { IInput } from '../../interfaces/input'

const Input: FC<IInput> = ({ name, icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="input_parent border-2 border-slate-100 h-10 rounded-full justify-start text-right outline-0"
    >
      <input placeholder={name} />
      <img src={icon} alt="" />
    </div>
  )
}

export default Input
