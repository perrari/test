import React from 'react';

const KaryaSeni = ({ dataKaryaSeni, onDeleteKaryaSeni }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nama Karya</th>
          <th>Kategori</th>
          <th>Pembuat</th>
          <th>Tahun</th>
          <th>Harga</th>
          <th>Keterangan</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {dataKaryaSeni.map((karyaSeni) => (
          <tr key={karyaSeni.id}>
            <td>{karyaSeni.id}</td>
            <td>{karyaSeni.nama_karya}</td>
            <td>{karyaSeni.kategori}</td>
            <td>{karyaSeni.pembuat}</td>
            <td>{karyaSeni.tahun_pembuatan}</td>
            <td>{karyaSeni.harga}</td>
            <td>{karyaSeni.keterangan}</td>
            <td>
              <button onClick={() => onDeleteKaryaSeni(karyaSeni.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default KaryaSeni;
