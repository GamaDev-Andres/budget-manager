import { Link, useNavigate } from 'react-router-dom'
import useTransactionContext from '../../../context/transactionContext/hook/useTransactionContext'

const FiltersBy = () => {
  const { categories } = useTransactionContext()
  const navigate = useNavigate()

  const handleChangeCategory = (e) => {
    if (e.target.value === '') {
      navigate('.')
      return
    }
    navigate('.?category=' + e.target.value)
  }

  return (
    <div className="flex flex-wrap items-center gap-2 px-4 py-2 mt-4 w-full">
      <span>Filtra por:</span>
      <div className="flex flex-wrap items-center border border-gray-200 md:border-none md:gap-2">
        <Link
          to=".?type=ingresos"
          className="text-center flex-grow px-2 py-1 md:rounded-md border-r md:border border-gray-200"
        >
          ingresos
        </Link>
        <Link
          to=".?type=egresos"
          className="text-center flex-grow px-2 py-1 md:rounded-md border-r md:border border-gray-200"
        >
          egresos
        </Link>
        <Link
          to="."
          className="text-center flex-grow px-2 py-1 md:rounded-md border-r md:border border-gray-200"
        >
          todas
        </Link>
        <select
          onChange={handleChangeCategory}
          className="cursor-pointer flex-grow px-2 py-1 rounded-md md:border md:border-gray-200 outline-none"
        >
          <option defaultChecked value="">
            categorias
          </option>
          {categories?.map((category) => (
            <option key={category.category_id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default FiltersBy
