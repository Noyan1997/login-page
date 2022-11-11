import React, { FC } from 'react'
import { IInput } from '../../interfaces/input'

const Input: FC<IInput> = ({
  name,
  id,
  icon,
  onClick,
  value,
  onChange,
  ref,
  type,
  style,
}) => {
  return (
    <div
      onClick={onClick}
      className="input_parent border-2 border-slate-100 h-10 rounded-full justify-start text-right outline-0"
      style={style}
    >
      <input
        id={id}
        placeholder={name}
        value={value}
        onChange={onChange}
        ref={ref}
        type={type}
      />
      <img src={icon} alt="" />
    </div>
  )
}

export default Input
