import { Card } from './Card';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      {/* <Card text={'Hello'} count={0} />
      <Card text={'Hello'} />
      <Card text={'Hello'} /> */}

      {/* ////////////////// */}
      {/* <Card>Hi</Card> */}
      {/* //////////////// */}

      <Card setCount={setCount} />
    </>
  );
}

export default App;
