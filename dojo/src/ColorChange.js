import React, {useState, useEffect} from 'react';

export const ColorChange = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const background = count > 255 ? 0 : 255 - count;
    const color = count > 255 ? 255 : 0 + count;

    document.body.style = `
      background: rgb(${background}, ${background}, ${background});
      color: rgb(${color}, ${color}, ${color});
    `
  }, [count])
  return (
    <div>
      <strong>Valor atual {count}</strong> <br/>
      <button onClick={() => setCount(count+5)}>+5</button>
      <button onClick={() => setCount(count-5)}>-5</button>
    </div>
  )
}

export default ColorChange;