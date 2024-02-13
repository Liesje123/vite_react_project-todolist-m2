

function Task({ taskName }) {
    return (
        <li>
            <input type="checkbox" />
            <span>{taskName}</span>
            <button>Supprimer tâche</button>
        </li>
    )
}

export default Task
