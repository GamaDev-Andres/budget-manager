import { useState } from 'react'

const useForm = (initialData) => {
  const [dataForm, setDataForm] = useState(initialData)

  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value })
  }
  const resetData = () => {
    setDataForm(initialData)
  }
  return { dataForm, handleChange, resetData }
}

export default useForm
