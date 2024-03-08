import { useState} from 'react';
export default function App() {
  const [clicked, setCliked] = useState(false);

  function clickHandler(b){
    setClicked(b)
    console.log(clicked);
  }
  return (
    <div>
      {clicked} && (
      <div data-testid="alert" id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can't be reverted!</p>
        <button onClick={()}>Proceed</button>
      </div>
      <button>Delete</button>
    </div>    
  );
}