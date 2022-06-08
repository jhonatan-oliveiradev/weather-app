/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import fetchData from './services/api.js';
import Card from './components/Card';
import initialData from './helpers/initialData';
import './index.css';

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchData(city).then((response) => {
      setData(response);
    });
  };

  return (
    <div className="flex flex-col w-full h-screen items-center sm:justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="fixed bottom-0 w-full flex p-4 sm:relative justify-center"
      >
        <input
          type="text"
          name="cidade"
          placeholder="Cidade"
          className="p-3 rounded-lg outline-none w-full sm:max-w-[18.75rem] flex-1"
          value={city}
          onChange={({ target: { value } }) => setCity(value)}
        />
        <button
          className="bg-[#623cea] p-3 rounded-lg ml-3 text-[#fff] font-bold hover:bg-[#3512b6]"
          type="submit"
        >
          Pesquisar
        </button>
      </form>

      <Card data={data} />
    </div>
  );
}

export default App;
