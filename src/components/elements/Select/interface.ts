export interface SelectProps {
  className?: string
  options: SelectOption[]
  onChange: (value: string) => void
}

export type SelectOption = {
  name: string
  value: string
}
