import Messages from "./Components/Messages/Messages.jsx";
import Queries from "./Components/Queries/Querypage.jsx";
import "./index.css";

const App = () => {
  return (
    <div className="app">
      <Queries />
      <Messages />
    </div>
  );
};

export default App;
