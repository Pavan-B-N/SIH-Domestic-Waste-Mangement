import "./Message.css";

function Message({ message }) {
  return (
    <p className="message">
      <span role="img">👋</span> {message}
    </p>
  );
}

export default Message;
