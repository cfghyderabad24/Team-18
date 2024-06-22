
import { useState } from "react";
import "../styles/query.css";

const QueriesPage = () => {
  const [question, setQuestion] = useState("");
  const [image, setImage] = useState(null);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Question:", question);
    console.log("Image:", image);
  };

  return (
    <>
    <div className="queries-page">
      <h1>Ask Your Query</h1>
      <form className="query-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="question">Your Question:</label>
          <textarea
            id="question"
            name="question"
            value={question}
            onChange={handleQuestionChange}
            placeholder="Type your question here..."
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="image">Upload an Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
};

export default QueriesPage;
