const TransactionRow = () => {
  return (
    <li className="py-2 px-4 grid border-b border-gray-200 last:border-none">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-black">fecha</span>
        <span className={`font-bold text-green-600`}>Monto</span>
      </div>
      <div className="flex items-center justify-between min-w-0">
        <span className="text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis">
          Lorem ipsum dolor sit amet frfrfr frfrfr frfr frf frfrfrf frfrfr
          frfrfr frfr frfr
        </span>
        <button className="px-2 text-black">edit</button>
      </div>
    </li>
  )
}

export default TransactionRow
