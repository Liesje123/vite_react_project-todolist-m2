import './App.css'

import { listTasksData, listOptionsData } from './utils/helpers'

import Title from './Title'
import { Form } from './Form'
import { Tasks } from './Tasks'
import { Header } from './Header'
import { useEffect, useState } from 'react'

function App() {
  const [listTasksDataState, setListTasksDataState] = useState(listTasksData)

  const handleChangeTasksList = (task) => {
    setListTasksDataState([...listTasksDataState, { todo: task }])
  }

  useEffect(() => {

    setTimeout(() => {
      fetch('http://dummyjson.com/todos')
        .then(res => res.json())
        .then(res => setListTasksDataState(res.todos))
    }, 300)
  }, [])

  return (
    <div className='container-sm m-auto bg-neutrale-300 p-6'>
      <Header />
      <Form listPreselectedTasksData={listOptionsData} handlChangeTasksList={handleChangeTasksList} />
      <Tasks listTasksData={listTasksDataState} />
      {/* "On aurait pu appeler agrument n'importe quoi - toto" */}
    </div>
  )
}

export default App
