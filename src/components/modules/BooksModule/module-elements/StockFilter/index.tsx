import { useBooksContext } from '@contexts'
import { useState } from 'react'
import { StockFilterProps } from './interface'

export const StockFilter: React.FC<StockFilterProps> = ({ value, label }) => {
  const [stockInput, setStockInput] = useState<string>('available')
  const { setStock } = useBooksContext()

  const handleStockRadioChange = (value: string) => {
    setStockInput(value)
    setStock(value)
  }

  return (
    <div className="flex items-center gap-x-2">
      <input
        type="radio"
        value={value}
        checked={stockInput === value}
        onChange={() => handleStockRadioChange(value)}
        className="cursor-pointer"
      />
      <label>{label}</label>
    </div>
  )
}
