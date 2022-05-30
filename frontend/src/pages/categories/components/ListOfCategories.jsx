import IconTrash from '../../../components/IconTrash'
import useTransactionContext from '../../../context/transactionContext/hook/useTransactionContext'

const ListOfCategories = () => {
  const { categories, deleteCategory } = useTransactionContext()

  const handleDeleteCategory = async (id) => {
    await deleteCategory(id)
  }
  return (
    <ul className="flex flex-wrap gap-1">
      {categories?.map((category) => (
        <li
          onClick={() => handleDeleteCategory(category.category_id)}
          className="cursor-pointer hover:border-red-600 rounded-lg border p-2 flex flex-col items-center"
          key={category.category_id}
        >
          {category.name}
          <span className="text-red-600">
            <IconTrash />
          </span>
        </li>
      ))}
    </ul>
  )
}

export default ListOfCategories
