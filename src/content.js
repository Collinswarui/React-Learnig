export const Content = () => {
    const handleNameChange = () => {
        const names = ['Wakori', 'Ngahu', 'Kiumi', 'Thade']
        const rand = Math.floor(Math.random() * 4)
        return names[rand]
    }
    return (
        <div>
            {handleNameChange()}
        </div>
    )
}