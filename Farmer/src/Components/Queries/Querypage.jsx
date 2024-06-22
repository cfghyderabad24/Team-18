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
              placeholder="Type your question here..."
              required
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Querypage;
