import "./Button.css"

function Button({ children, variant = "primary", onClick }) {
  return (
    <button className={`boton boton--${variant}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
