import React, { useState } from 'react';
import Calculator from './Calculator';
import Counter from './Counter';

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-400">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl text-center font-bold mb-6 text-teal-600">Hisab Qitab</h1>
        <Calculator />
        <Counter />
      </div>
    </div>
  );
}

export default App;
