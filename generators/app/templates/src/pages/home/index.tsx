import { useEffect, useState } from 'react';

const Main = () => {
  const [state, setState] = useState(0);
  const [num] = useState(7);
  useEffect(() => {
    setState((a) => a + num + 1);
  }, [num]);

  return (
    <div>
      hhhh{state}
      <div>hhhh{state}</div>
      <div>hhhh{state}</div>
      <div>hhhh{state}</div>
      <div>hhhh{state}</div>
    </div>
  );
};

export default Main;
