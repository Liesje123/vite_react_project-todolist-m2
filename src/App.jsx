import './App.css'

import { listTasksData, listOptionsData } from './utils/helpers'

import Title from './Title'
import { Form } from './Form'
import { Tasks } from './Tasks'
import { Header } from './Header'

function App() {
  return (
    <div className='container-sm m-auto bg-neutrale-300 p-6'>
      <Header />
      <Form listPreselectedTasksData={listTasksData} />
      <Tasks listTasksData={listTasksData} />
      {/* "On aurait pu appeler agrument n'importe quoi - toto" */}
    </div>
  )
}

export default App
