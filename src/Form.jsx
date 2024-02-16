import { useState } from "react"

export function Form({ listPreselectedTasksData, handlChangeTasksList }) {
    const [taskName, setTaskName] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        handlChangeTasksList(taskName)
    }


    return (
        <form action="" className="bg-white p-8 rounded-lg border w-2/3 m-auto">
            <label htmlFor="input-task" className="block">Nom de la tâche</label>
            <div className="flex items-center gap-8 justify-between">
                <input onChange={(e) => setTaskName(e.target.value)} value={taskName} placeholder="Indiquer nom de la tâche" type="text" id="input-task" className="border border-neutral-300 p-4 rounded w-1/2" />
                <span>ou</span>
                <select onChange={(e) => setTaskName(e.target.value)} name="" id="" className="border border-neutral-300 p-4 rounded w-full">
                    {
                        listPreselectedTasksData.map((task, index) => {
                            return (<option key={`opt-${index}`} value="">{task.taskName}</option>)
                        })
                    }
                </select>
            </div>
            <button type="submit" onClick={handleSubmit} className="block border border-neutral-500 bg-slate-200 py-4 px-8 my-6">Envoyer</button>
        </form>
    )
}