import useForm from '../../../hooks/useForm'
import { dateFormat } from '../../../utilities/dateFormat'

export const FormTransaction = () => {
  const { dataForm, handleChange } = useForm({
    concept: '',
    type: '',
    value: '',
    date: dateFormat(),
    category: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="border border-transparent md:border md:border-gray-300 md:p-2 md:rounded-2xl max-w-3xl w-full flex flex-col items-center justify-center mx-auto">
      <h2 className="text-center font-bold text-blue-600 text-xl">
        Crear transacción
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-full">
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
            <option value="Ingreso">Ingreso</option>
            <option value="Egreso">Egreso</option>
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
            type="date"
          />
        </label>
        <label className="text-gray-600 text-sm">
          categoria:
          <input
            name="category"
            value={dataForm.category}
            onChange={handleChange}
            className="outline-none py-1 px-2 rounded-md focus:border focus:border-gray-400 border border-gray-300 w-full"
            list="list-categories"
            type="text"
          />
          <datalist id="list-categories">
            <option value="algo"></option>
            <option value="algo2"></option>
            <option value="algo3"></option>
          </datalist>
        </label>
        <button className="bg-blue-600 px-4 py-1 my-2 mx-auto rounded-md text-white max-w-[200px] w-full">
          Crear
        </button>
      </form>
    </div>
  )
}
