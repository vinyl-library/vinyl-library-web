import { useBooksContext } from '@contexts'
import { StockFilterProps } from './interface'

export const StockFilter: React.FC<StockFilterProps> = ({ value, label }) => {
  const { setStock, stock } = useBooksContext()

  const handleStockRadioChange = (newValue: string) => {
    if (stock !== newValue) {
      setStock(newValue)
    } else {
      setStock('')
    }
  }

  return (
    <div className="flex items-center gap-x-2">
      <input
        type="radio"
        value={value}
        checked={stock === value}
        onChange={() => handleStockRadioChange(value)}
        className="cursor-pointer"
      />
      <label>{label}</label>
    </div>
  )
}
