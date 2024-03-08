import { useState } from 'react';
export default function App() {
  // let price = 100;
  const [price, setPrice] = useState(100);

  function buttonHandler(){
    setPrice(75)
    console.log(price);
  }
  return (
      <div>
          <p data-testid="price">${price}</p>
          <button onClick={buttonHandler}>Apply Discount</button>
      </div>
  );
}