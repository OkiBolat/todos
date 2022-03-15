import React, { useState } from 'react';
import './Home.css';
import logo from "../../assets/image/logo.png"

function Home() {
  const [todos, setTodos] = useState([])
  const [textInput, setTextInput] = useState('')
  const [orderInput, setOrderInput] = useState('') 

  const addTodos = () => {
    if(!textInput.length || !orderInput.length) return;

    setTodos((curTodos) => [
      ...curTodos,
      {
        order: orderInput,
        text: textInput,
      }
    ].sort((a,b) => a.order - b.order));

    setOrderInput('')
    setTextInput('')
  }

  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="logo" />
      </header>
      <main className="main">
        <div className="main-container">
          <h1 className="main-text">Приветствую!</h1>
          <h3 className="main-down-text">Давай обновим список и начнем обучение</h3>
          <p>Записи</p>
          <div id="todos-container" className="main-list">
          {todos.map((todo, i) => 
            <p key={i}>{todo.order}){todo.text}</p>
          )}
        </div>
        
        </div>
        <div className="main__input">
          <label htmlFor="order-input">Номер записи</label>
          <input onChange={(e) => setOrderInput(e.target.value)} value={orderInput} type="number" id="order-input" />
          <label htmlFor="text-input" >Название записи</label>
          <input onChange={(e) => setTextInput(e.target.value)} value={textInput} type="text" id="text-input" />
          <button onClick={() => addTodos()} id="add-button" className="add-button">Добавить запись</button>
        </div>
      </main>
      <footer className="footer">
        <img src={logo} alt="logo" />
      </footer>
    </div>
  );
}

export default Home;