import { Task } from "./Task"

export function Tasks({ listTasksData }) {
    return (
        <div className="text-center my-12 w-2/3 m-auto">
            <ul>
                {
                    listTasksData.map((task, index) => {
                        return (<Task key={`task-${index}`} task={task} />)
                    })
                }
                <Task />
            </ul>
        </div>
    )
}