import Review from './Review';
import {useState} from 'react';

// don't change the Component name "App"
function App() {
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');

  function feedbackHandler(event){
    setFeedback(event.target.value);
  }

  function nameHandler(event){
    setName(event.target.value);
  }

  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea value={feedback} onChange={feedbackHandler} />
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" value={name} onChage={nameHandler} />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review feedback={feedback} student={name} />

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

export default App;