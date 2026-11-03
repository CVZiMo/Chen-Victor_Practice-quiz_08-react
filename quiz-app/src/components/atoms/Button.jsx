import './Button.css'

export default function Button({ children, onClick, disabled = false }) {
    return (
    <button type="button" className="button" onClick={onClick} disabled={disabled}>
        {children}
    </button>
    )
}