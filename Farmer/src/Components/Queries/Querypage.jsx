const QueriesPage = () => {
    const [question, setQuestion] = useState("");
    const [image, setImage] = useState(null);
  
    
const Querypage = () => {
  return (
    <div>
      <div className="queries-page">
        <h1>Ask Your Query</h1>
        <form className="query-form">
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
    </div>
  );
};

export default Querypage;
