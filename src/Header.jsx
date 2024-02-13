import { useState } from "react"

export function Header() {
    // let title = 'MON SUPER TITRE'
    const [title, setTitle] = useState('MON SUPER TITRE')
    const handleClick = () => {
        //alert('CECI EST UNE ALERTE !!!')
        // titre = 'MON INCROYABLE ET SUPER TITRE'
        setTitle('MON INCROYABLE ET SUPER TITRE')
    }
    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold text-red-600">{title}</h1>
            <h2 className="text-xl font-bold">Sous-titre</h2>
            <button className='bg-red-600 p-4' onClick={handleClick}>Evénement</button>
        </div>
    )
}
