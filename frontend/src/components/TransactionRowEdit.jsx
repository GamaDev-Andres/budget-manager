/* eslint-disable camelcase */
import propTypes from 'prop-types'

import useTransactionContext from '../context/transactionContext/hook/useTransactionContext'
import useForm from '../hooks/useForm'
import { dateFormatInput } from '../utilities/dateFormatInput'
import IconCancel from './IconCancel'
import IconCheck from './IconCheck'
import IconTrash from './IconTrash'

const TransactionRowEdit = ({
  handleChangeEdit,
  transaction_id,
  value,
  concept,
  type,
  category
}) => {
  const {
    originalTransactions,
    categories,
    updateTransaction,
    deleteTransaction
  } = useTransactionContext()
  const transaction = originalTransactions.find(
    (transaction) => transaction.transaction_id === transaction_id
  )
  const { dataForm, handleChange } = useForm({
    date: dateFormatInput(transaction?.date),
    category: category?.name || 'sin categoria',
    concept,
    value
  })

  const handleSubmit = async () => {
    await updateTransaction(dataForm, transaction_id)
    handleChangeEdit()
  }
  const handleDeleteTransaction = async () => {
    await deleteTransaction(transaction_id)
  }

  return (
    <div className="flex items-center">
      <div className="flex-grow">
        <div className="flex items-center flex-wrap justify-between">
          <input
            type="datetime-local"
            name="date"
            onChange={handleChange}
            value={dataForm.date}
          />
          <input
            className={`outline-none xs:text-right text-left font-bold text-sm ${
              type === 'egreso' ? 'text-red-600' : 'text-green-600'
            }`}
            type="number"
            name="value"
            value={dataForm.value}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center flex-wrap justify-between min-w-0">
          <span className="flex items-center flex-wrap flex-grow text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis">
            <select
              onChange={handleChange}
              name="category"
              value={dataForm.category}
              className="mr-1"
            >
              <option defaultChecked={category?.name === null} value={''}>
                sin categoria
              </option>
              {categories?.map((categoryDb) => (
                <option
                  key={categoryDb.category_id}
                  defaultChecked={category?.name === categoryDb.name}
                  value={categoryDb.name}
                >
                  {categoryDb.name}
                </option>
              ))}
            </select>
            <input
              className="outline-none flex-grow w-full border"
              type="text"
              name="concept"
              value={dataForm.concept}
              onChange={handleChange}
            />
          </span>
          <button
            onClick={handleChangeEdit}
            className="px-2 text-red-600 flex justify-center xs:justify-end w-full"
          >
            <IconCancel />
          </button>
        </div>
      </div>
      <div className="flex flex-col ml-2 pl-2 border-l">
        <button className="p-1 text-green-600" onClick={handleSubmit}>
          <IconCheck />
        </button>
        <button className="p-1 text-red-600" onClick={handleDeleteTransaction}>
          <IconTrash />
        </button>
      </div>
    </div>
  )
}
TransactionRowEdit.propTypes = {
  handleChangeEdit: propTypes.func,
  transaction_id: propTypes.number,
  value: propTypes.any,
  concept: propTypes.string,
  type: propTypes.string,
  category: propTypes.object
}
export default TransactionRowEdit
