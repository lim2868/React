import {useState} from 'react';
export default function App() {
  const [isToggled, setIsToggled] = useState(false);

  return (
      <div>
          <p className={isToggled ? 'active' : undefined} >Style me!</p>
          <button onClick={()=>setIsToggled(!isToggled)}>Toggle style</button>
      </div>
  );
}