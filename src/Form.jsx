function Form({ listOptionsData }) {
    // const handleClick
    return (
        <>
            <form>
                <label>Ajouter une tâche</label>
                <div>
                    <input placeholder="Intitulé de la tâche" />
                    <span>ou</span>
                    <select>
                    </select>
                </div>
                <button>Ajouter ou mettre à jour la tâche</button>
            </form>
        </>
    )

}

export default Form