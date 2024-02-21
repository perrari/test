import React, { useState, useEffect } from 'react';
import './App';
import KaryaSeni from './KaryaSeni';
import CreateKaryaSeni from './CreateKaryaSeni';
import SearchKaryaSeni from './SearchKaryaSeni';

function App() {
  const [dataKaryaSeni, setDataKaryaSeni] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('./karyaSeni');
      const data = await response.json();
      setDataKaryaSeni(data);
    };
    fetchData();
  }, []);

  const handleCreateKaryaSeni = async (karyaSeni) => {
    const response = await fetch('./karyaSeni', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(karyaSeni),
    });
    const data = await response.json();
    setDataKaryaSeni([...dataKaryaSeni, data]);
  };

  const handleDeleteKaryaSeni = async (id) => {
    await fetch(`./karyaSeni/${id}`, {
      method: 'DELETE',
    });
    setDataKaryaSeni(dataKaryaSeni.filter((karyaSeni) => karyaSeni.id !== id));
  };

  return (
    <div className="App">
      <h1>Galeri Karya Seni Digital</h1>
      <SearchKaryaSeni dataKaryaSeni={dataKaryaSeni} setDataKaryaSeni={setDataKaryaSeni} />
      <CreateKaryaSeni onCreateKaryaSeni={handleCreateKaryaSeni} />
      <KaryaSeni dataKaryaSeni={dataKaryaSeni} onDeleteKaryaSeni={handleDeleteKaryaSeni} />
    </div>
  );
};

export default App;
