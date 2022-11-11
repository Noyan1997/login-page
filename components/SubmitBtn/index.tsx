import React, { FC } from 'react'
import { ISubmitBtn } from '../../interfaces/button'

const SubmitBtn: FC<ISubmitBtn> = ({ onClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={
        !disabled
          ? 'bg-blue-500 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full'
          : 'px-8 py-3 text-white bg-blue-300 rounded-full focus:outline-none'
      }
    >
      <span>ثبت نام</span>
    </button>
  )
}

export default SubmitBtn
