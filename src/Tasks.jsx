import { useState } from "react"
import Task from "./Task"

function Tasks({ listTasksData }) {
    const [listeTasks, setListTasks] = useState(listTasksData)
    return (
        <ul className="list-todo">
            {listeTasks.map((items, index) => {
                return (<Task key={`task-${index}`} taskName={items.taskName} />)
            })}
        </ul>
    )
}

export default Tasks
