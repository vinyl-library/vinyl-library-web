import { ErrorIcon } from "@icons"

export const ErrorMessage: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="flex items-center text-left text-[10px] md:text-[12px] xl:text-[16px] gap-[4px] text-[#f71e3f]">
      <ErrorIcon size="" />
      {message}
    </div>
  )
}