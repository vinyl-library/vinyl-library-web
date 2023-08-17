export interface RatingFilterProps {
  label: string
  value: number
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
