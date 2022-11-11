import { ChangeEventHandler } from 'react'

export interface IInput {
  name: string
  icon: string
  onClick?: () => void
  onChange?: ChangeEventHandler | undefined
  type: string
  value?: any
  ref?: any
  id: string
  onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined
}
