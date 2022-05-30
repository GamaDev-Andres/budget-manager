import FormCategory from './components/FormCategory'
import ListOfCategories from './components/ListOfCategories'

const Categories = () => {
  return (
    <div className="max-w-6xl mx-auto w-full px-4">
      <h1 className="text-2xl font-bold text-blue-600 text-center">
        Categorias
      </h1>
      <h2 className="text-blue-600 font-semibold"> crear categoria:</h2>
      <FormCategory />
      <h2 className="text-blue-600 font-semibold">Lista de categorias:</h2>
      <ListOfCategories />
    </div>
  )
}

export default Categories
