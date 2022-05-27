import Balance from './components/Balance'
import ListOfTransactions from './components/ListOfTransactions'

const Home = () => {
  return (
    <div>
      <Balance />
      <div>
        <h2 className="text-center text-blue-600 font-bold text-2xl my-2">
          Ultimas transacciones
        </h2>
        <ListOfTransactions />
      </div>
    </div>
  )
}

export default Home
