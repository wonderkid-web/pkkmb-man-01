// components/ExtracurricularList.js
import React from "react";

const ekstrakurikuler = [
  "Basketball",
  "Football",
  "Robotics",
  "Drama Club",
  "Music Band",
  // tambahkan daftar lainnya
];

const ExtracurricularList = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Daftar Ekstrakurikuler</h1>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
              Nama Ekstrakurikuler
            </th>
          </tr>
      </thead>
        <tbody>
          {ekstrakurikuler.map((item, index) => (
            <tr key={index}>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                {item}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExtracurricularList;
