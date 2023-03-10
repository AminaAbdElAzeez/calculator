import { useState } from 'react';
import * as math from "mathjs"
import './App.css';
import Button from './components/Button';
import Input from './components/Input';


const App = () => {

  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setText((text) => [...text , val + " "])
  };

  const resetInput = () => {
    setText("");
    setResult("");
  };

  const calculateResult = () => {
    const input = text.join("");
    setResult(math.evaluate(input))
    console.log(result);
  };

  const btnColor = "#f2a33c";

  return (
    <div className="App">
      <div className='app-wrapper'>
        <Input text={text} result={result}/>
        <div className='row'>
        <Button symbol="7" addToText={addToText} />
        <Button symbol="8" addToText={addToText} />
        <Button symbol="9" addToText={addToText} />
        <Button symbol="/" color={btnColor} addToText={addToText}  />
        </div>
        <div className='row'>
        <Button symbol="4" addToText={addToText} />
        <Button symbol="5" addToText={addToText} />
        <Button symbol="6" addToText={addToText} />
        <Button symbol="*" color={btnColor} addToText={addToText}  />
        </div>
        <div className='row'>
        <Button symbol="1" addToText={addToText} />
        <Button symbol="2" addToText={addToText} />
        <Button symbol="3" addToText={addToText} />
        <Button symbol="+" color={btnColor} addToText={addToText}  />
        </div>
        <div className='row'>
        <Button symbol="0" addToText={addToText} />
        <Button symbol="." addToText={addToText} />
        <Button symbol="=" addToText={calculateResult} />
        <Button symbol="-" color={btnColor} addToText={addToText}  />
        </div>
        <Button symbol="Clear" color="red" addToText={resetInput} />
      </div>
    </div>
  );
}

export default App;
