import "./Button.css";

function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${"btn"} ${[type]}`}>
      {children}
    </button>
  );
}

export default Button;
