import React, { useState } from 'react';

const CreateKaryaSeni = ({ onCreateKaryaSeni }) => {
  const [namaKarya, setNamaKarya] = useState('');
  const [kategori, setKategori] = useState('');
  const [pembuat, setPembuat] = useState('');
  const [tahunPembuatan, setTahunPembuatan] = useState('');
  const [harga, setHarga] = useState('');
  const [keterangan, setKeterangan] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const karyaSeni = {
      nama_karya: namaKarya,
      kategori,
      pembuat,
      tahun_pembuatan: parseInt(tahunPembuatan),
      harga: parseInt(harga),
      keterangan,
    };
    onCreateKaryaSeni(karyaSeni);
    setNamaKarya('');
    setKategori('');
    setPembuat('');
    setTahunPembuatan('');
    setHarga('');
    setKeterangan('');
  };

  return (
    <div className="create-karya-seni">
      <h2>Tambah Karya Seni Baru</h2>
      <form onSubmit={handleSubmit}>
      <label htmlFor="namaKarya">Nama Karya:</label>
        <input type="text" id="namaKarya" name="namaKarya" value={namaKarya} onChange={(e) => setNamaKarya(e.target.value)} />

        <label htmlFor="kategori">Kategori:</label>
        <select id="kategori" name="kategori" value={kategori} onChange={(e) => setKategori(e.target.value)}>
          <option value="">Pilih Kategori</option>
          <option value="gambar">Gambar</option>
          <option value="musik">Musik</option>
          <option value="video">Video</option>
        </select>

        <label htmlFor="pembuat">Pembuat:</label>
        <input type="text" id="pembuat" name="pembuat" value={pembuat} onChange={(e) => setPembuat(e.target.value)} />

        <label htmlFor="tahunPembuatan">Tahun Pembuatan:</label>
        <input type="number" id="tahunPembuatan" name="tahunPembuatan" value={tahunPembuatan} onChange={(e) => setTahunPembuatan(e.target.value)} />

        <label htmlFor="harga">Harga:</label>
        <input type="number" id="harga" name="harga" value={harga} onChange={(e) => setHarga(e.target.value)} />

        <label htmlFor="keterangan">Keterangan:</label>
        <textarea id="keterangan" name="keterangan" value={keterangan} onChange={(e) => setKeterangan(e.target.value)} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateKaryaSeni;
