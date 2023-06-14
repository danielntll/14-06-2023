import { useEffect, useState } from 'react'
import './index.css'
import Button from '../button/Button'

const InputTodo = ({ callback }) => {
  // VARIABLES ------------------------
  const [input, setInput] = useState("");
  const [canPush, setCanPush] = useState(false);
  const [buttonColor, setButtonColor] = useState("#22ffa3");
  // CONDITIONS -----------------------
  const handleAddTodo = () => {
    if (canPush) {
      setInput("");
      callback(input);
    } else {
      alert("Il campo non può essere vuoto.")
    }
  }

  useEffect(() => {
    if (input.length > 0) {
      setCanPush(true)
    } else {
      setCanPush(false)
    };
  }, [input]);

  useEffect(() => {
    if (canPush) {
      setButtonColor("#22ffa3");
    } else {
      setButtonColor("#ff566c");
    }
  }, [canPush])
  // RETURN ---------------------------
  return (
    <>
      <div className='InputTodo'>
        <input onChange={(ev) => { setInput(ev.target.value) }}
          value={input} className='InputTodo__input' type="text" name="" placeholder='Cosa vuoi ricordare di fare?' />
        <Button
          text='Aggiungi'
          color={buttonColor}
          onClickCallback={() => handleAddTodo()}
        />
      </div>
    </>
  )
}

export default InputTodo
