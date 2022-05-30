/* eslint-disable camelcase */
import propTypes from 'prop-types'
import { useState } from 'react'
import IconPencil from './IconPencil'
import TransactionRowEdit from './TransactionRowEdit'

const TransactionRow = ({
  date,
  value,
  concept,
  type,
  category,
  transaction_id
}) => {
  const [edit, setEdit] = useState(false)

  const handleChangeEdit = () => {
    setEdit(!edit)
  }

  return (
    <li className="py-2 px-4 grid border-b border-gray-200 last:border-none text-xs">
      {!edit ? (
        <>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-black">{date}</span>
            <span
              className={`font-bold text-sm ${
                type === 'egreso' ? 'text-red-600' : 'text-green-600'
              }`}
            >
              {type === 'egreso' ? '-$' + value : '$' + value}
            </span>
          </div>
          <div className="flex items-center justify-between min-w-0">
            <span className="text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis">
              <strong className="mr-1">
                {category?.name || 'sin categoria'}:
              </strong>
              {concept}
            </span>
            <button onClick={handleChangeEdit} className="px-2 text-black">
              {<IconPencil />}
            </button>
          </div>
        </>
      ) : (
        <TransactionRowEdit
          {...{ date, value, concept, type, category, transaction_id }}
          handleChangeEdit={handleChangeEdit}
        />
      )}
    </li>
  )
}
TransactionRow.propTypes = {
  date: propTypes.string,
  value: propTypes.number,
  concept: propTypes.string,
  category: propTypes.any,
  type: propTypes.string,
  transaction_id: propTypes.number
}
export default TransactionRow
