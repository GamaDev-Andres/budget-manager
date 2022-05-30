import { useState } from 'react'
import Spinner from '../../../components/Spinner'
import useTransactionContext from '../../../context/transactionContext/hook/useTransactionContext'
import useForm from '../../../hooks/useForm'
import { dateFormat } from '../../../utilities/dateFormat'

export const FormTransaction = () => {
  const { createTransaction, categories } = useTransactionContext()
  const { dataForm, handleChange, resetData } = useForm({
    concept: '',
    type: 'ingreso',
    value: '',
    date: dateFormat(),
    category: ''
  })
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const res = await createTransaction({
      ...dataForm,
      category: dataForm.category.trim() ? dataForm.category : undefined
    })
    setLoading(false)
    resetData()
    if (res?.error) {
      setError(res.error)
    }
  }

  return (
    <div className="border border-transparent md:border md:border-gray-300 px-4 md:p-2 md:rounded-2xl max-w-3xl w-full flex flex-col items-center justify-center mx-auto">
      <h2 className="text-center font-bold text-blue-600 text-xl">
        Crear transacción
      </h2>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="flex flex-col w-full"
      >
        <label className="text-gray-600 text-sm">
          concepto:
          <input
            name="concept"
            value={dataForm.concept}
            onChange={handleChange}
            required
            className="outline-none py-1 px-2 rounded-md focus:border focus:border-gray-400 border border-gray-300 w-full"
            type="text"
          />
        </label>
        <label className="text-gray-600 text-sm">
          tipo:
          <select
            name="type"
            value={dataForm.type}
            onChange={handleChange}
            className="py-1 px-2 focus:border focus:border-gray-400 border border-gray-300 rounded-md outline-none w-full"
          >
            <option defaultChecked value="ingreso">
              Ingreso
            </option>
            <option value="egreso">Egreso</option>
          </select>
        </label>
        <label className="text-gray-600 text-sm">
          monto:
          <input
            name="value"
            value={dataForm.value}
            onChange={handleChange}
            required
            className="outline-none py-1 px-2 rounded-md focus:border focus:border-gray-400 border border-gray-300 w-full"
            type="number"
          />
        </label>
        <label className="text-gray-600 text-sm">
          fecha:
          <input
            name="date"
            value={dataForm.date}
            onChange={handleChange}
            required
            className="outline-none py-1 px-2 rounded-md focus:border focus:border-gray-400 border border-gray-300 w-full"
            type="datetime-local"
          />
        </label>
        <label className="text-gray-600 text-sm">
          categoria:
          <input
            name="category"
            value={dataForm.category}
            onChange={handleChange}
            maxLength={25}
            className="outline-none py-1 px-2 rounded-md focus:border focus:border-gray-400 border border-gray-300 w-full"
            list="list-categories"
            type="text"
          />
          <datalist id="list-categories">
            {categories?.map((category) => (
              <option key={category.category_id}>{category.name}</option>
            ))}
          </datalist>
        </label>
        {error && (
          <span className="text-red-600 text-sm text-center">{error}</span>
        )}
        <button
          disabled={loading}
          className="bg-blue-600 px-4 py-1 my-2 mx-auto rounded-md text-white max-w-[200px] w-full"
        >
          {loading ? <Spinner /> : 'Crear'}
        </button>
      </form>
    </div>
  )
}
