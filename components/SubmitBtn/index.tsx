import React, { FC } from 'react'
import { ISubmitBtn } from '../../interfaces/button'

const SubmitBtn: FC<ISubmitBtn> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    >
      <span>ثبت نام</span>
    </button>
  )
}

export default SubmitBtn
