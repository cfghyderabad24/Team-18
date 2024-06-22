import "./Messages.css";

const Messages = () => {
  return (
    <div className="messages-page">
      <h1>Notifications</h1>
      <div className="messages-list">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <h2>{message.title}</h2>
            <p>{message.content}</p>
            <span>{message.timestamp}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
