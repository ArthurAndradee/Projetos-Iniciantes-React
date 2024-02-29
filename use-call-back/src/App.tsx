import React from 'react';
import './App.css';

import { useState } from 'react';
import search from './search';

function shuffle(array) {
  let  currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function App() {
  return (
    <div>
    </div>
  );
}

export default App;
