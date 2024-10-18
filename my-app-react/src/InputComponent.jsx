import { useState } from 'react';

const InputComponent = () => {
  const [inputText, setInputText] = useState('Hello, World!');

  function handleChange(e) {
    setInputText(e.target.value);
  }

  return (
    <>
      <input value={inputText} onChange={handleChange} />
      <p>you typed: {inputText}</p>
      <button onClick={() => setInputText('RESET')}>RESET</button>
    </>
  );
};

export default InputComponent;
