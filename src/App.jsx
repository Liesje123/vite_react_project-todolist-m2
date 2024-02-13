import './App.css'

import { listTasksData, listOptionsData } from './utils/helpers'

import Title from './Title'
import Form from './Form'
import Tasks from './Tasks'

function App() {
  return (
    <div className='bg-red-600'>
      <Title niveau={1} contenu="Todo List" />
      <Title niveau={2} contenu="Gestionnaire des tâches via la technologie React" />
      <Title niveau={3} contenu="Codé par Elisabeth Guitton dans le cadre du module React dirigé par Fabien Canu à ISEN Brest" />
      <Form listOptions={listOptionsData} /> {/* props */}
      <Tasks listTasksData={listTasksData} /> {/* props */}
    </div>
  )
}

export default App
