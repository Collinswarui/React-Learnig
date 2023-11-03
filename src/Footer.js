export const Footer = () => {
    const today = new Date()
    return (
        <p>Copyright &copy; {today.getFullYear()}</p>
    )
}