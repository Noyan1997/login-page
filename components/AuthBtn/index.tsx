import React, { FC } from 'react'
import { IAuthBtn } from '../../interfaces/button'

const AuthBtn: FC<IAuthBtn> = ({ title, icon }) => {
  return (
    <div
      onClick={() => console.log('first')}
      className="btn_parent border-2 border-slate-100 h-10 rounded-full justify-start text-right outline-0"
    >
      <span>{title}</span>
      <img src={icon} alt="" />
    </div>
  )
}

export default AuthBtn
