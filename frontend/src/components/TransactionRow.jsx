/* eslint-disable camelcase */
import propTypes from 'prop-types'

const TransactionRow = ({ createdAt, value, concept, type }) => {
  return (
    <li className="py-2 px-4 grid border-b border-gray-200 last:border-none">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-black">{createdAt}</span>
        <span
          className={`font-bold ${
            type === 'egreso' ? 'text-red-600' : 'text-green-600'
          }`}
        >
          {type === 'egreso' ? '-$' + value : '$' + value}
        </span>
      </div>
      <div className="flex items-center justify-between min-w-0">
        <span className="text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis">
          {concept}
        </span>
        <button className="px-2 text-black">edit</button>
      </div>
    </li>
  )
}
TransactionRow.propTypes = {
  createdAt: propTypes.string,
  value: propTypes.number,
  concept: propTypes.string,
  type: propTypes.string
}
export default TransactionRow
