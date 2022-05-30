import { useState } from 'react'
import useTransactionContext from '../../../context/transactionContext/hook/useTransactionContext'
import useForm from '../../../hooks/useForm'

const FormCategory = () => {
  const { dataForm, handleChange, resetData } = useForm({ category: '' })
  const { createCategory } = useTransactionContext()
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!dataForm.category.trim()) {
      resetData()
      return
    }
    const res = await createCategory(dataForm.category)
    if (res?.error) {
      setError(res.error)
    }
    resetData()
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2"
        autoComplete="off"
      >
        <label className="flex flex-grow flex-col text-blue-600 font-semibold">
          <input
            required
            className="text-black outline-none py-1 px-2 rounded-md focus:border focus:border-gray-400 border border-gray-300 w-full"
            type="text"
            name="category"
            maxLength={25}
            value={dataForm.category}
            onChange={handleChange}
          />
        </label>
        <button
          className="p-1 bg-blue-500 border border-blue-600 rounded-md active:bg-blue-600
        transition-colors duration-300 text-white"
        >
          crear
        </button>
      </form>
      {error && <span className="text-red-600 text-sm">{error}</span>}
    </>
  )
}

export default FormCategory
