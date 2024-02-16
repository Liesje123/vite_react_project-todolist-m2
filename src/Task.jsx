import { useState } from "react"


export function Task({ taskName }) {
    const [isChecked, setIsChecked] = useState(false)

    const handleClick = () => {
        setIsChecked(!isChecked)
    }

    if (!isChecked) {
        return (
            <li className={`${isChecked ? 'line-through' : ''} w-full bg-white p-4 rounded-lg border border-neutral-300 flex justify-between items-center`}>
                <div className="flex gap-3">
                    <input type="checkbox" onChange={handleClick} />
                    <span className={`${isChecked ? 'line-through' : ''}`}>{taskName}</span>
                </div>
                <span>X</span>
            </li>
        )
    }
}
