import { useState } from "react";
import "../styles/query.css";
import MainEditForm from "./MainEditFormPage";
import { ReactMediaRecorder } from "react-media-recorder";

const QueriesPage = () => {
  const [question, setQuestion] = useState("");
  const [image, setImage] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleAudioStop = (blobUrl, blob) => {
    setAudioBlob(blob);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Question:", question);
    console.log("Image:", image);
    console.log("Audio Blob:", audioBlob);

    const formData = new FormData();
    formData.append("question", question);
    if (image) formData.append("image", image);
    if (audioBlob) formData.append("audio", audioBlob, "voice-message.webm");

    // Example: Send the form data to the server
    // axios.post('/api/submit-query', formData)
    //   .then(response => console.log(response))
    //   .catch(error => console.error(error));
  };

  return (
    <>
      <MainEditForm />
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
          <div className="form-group">
            <label htmlFor="audio">Record a Voice Message:</label>
            <ReactMediaRecorder
              audio
              onStop={handleAudioStop}
              render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
                <div>
                  <p>{status}</p>
                  <button type="button" onClick={startRecording}>
                    Start Recording
                  </button>
                  <button type="button" onClick={stopRecording}>
                    Stop Recording
                  </button>
                  {mediaBlobUrl && <audio src={mediaBlobUrl} controls />}
                </div>
              )}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default QueriesPage;
