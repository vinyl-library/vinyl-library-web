import { RatingFilterProps } from './interface'

export const RatingFilter: React.FC<RatingFilterProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-y-2">
      <label>{label}</label>
      <input
        type="range"
        min="0"
        max="5"
        value={value}
        onChange={onChange}
        className="cursor-pointer"
      />
    </div>
  )
}
