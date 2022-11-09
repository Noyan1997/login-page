export interface IInput {
  name: string
  icon: string
  onClick?: () => void
  onChange?: () => void
  type: string
  value?: any
}
