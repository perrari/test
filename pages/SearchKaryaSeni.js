import React, { useState } from 'react';

const SearchKaryaSeni = ({ dataKaryaSeni, setDataKaryaSeni }) => {
  const [kategori, setKategori] = useState('');

  const handleSearch = async () => {
    const response = await fetch(`http://localhost:3000/App/search?kategori=${kategori}`);
    const data = await response.json();
    setDataKaryaSeni(data);
  };

  return (
    <div className="search-karya-seni">
      <h2>Cari Karya Seni</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="kategori">Kategori:</label>
        <select id="kategori" name="kategori" value={kategori} onChange={(e) => setKategori(e.target.value)}>
          <option value="">Semua Kategori</option>
          <option value="gambar">Gambar</option>
          <option value="musik">Musik</option>
          <option value="video">Video</option>
        </select>
        <button type="button" onClick={handleSearch}>Cari</button>
      </form>
    </div>
  );
};

export default SearchKaryaSeni;