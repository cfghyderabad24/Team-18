import "./Messages.css";

const messages = [
  {
    id: 1,
    title: "Weather change",
    content:
      "There is going to be a weather change its going to have a heavy rain for 2 days",
    timestamp: "2 hours ago",
  },
  {
    id: 3,
    title: "New fertilizer available",
    content:
      "A new organic fertilizer is available in the market at the lowest prices. Farmers can go and purchase it",
    timestamp: "2024-06-20 10:00 AM",
  },
  {
    id: 2,
    title: "Survey report",
    content: "The survey report is generated. Please go and check",
    timestamp: "2 hours ago",
  },
];

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
