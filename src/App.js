import React from 'react';
import { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Message from './components/Message/Message';
import IO from './components/IO/IO';
import Buttons from './components/Buttons/Buttons';

function App() {

  const [state, setState] = useState("prompt"); // prompt <-> result
  const [words, setWords] = useState({
    word1: "",
    word2: ""
  })

  return (
    <div className="App">
      <Header/>
      <div className="main">
        <Message 
          state={state}
          words={words}
        />
        <IO
          state={state}
          words={words}
          setWords={setWords}
        />
        <Buttons 
          state={state}
          setState={setState}
          words={words}
          setWords={setWords}
        />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
