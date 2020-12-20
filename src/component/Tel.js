import React from "react";
import "style/Tel.css";
import data from "assets/data/tel.json";

const Tel = () => {
  let tb1 = data.top[0].map((telInfo1, index) => {
    let telInfo2 = data.top[1][index];
    return (
      <tr>
        <th>{telInfo1.name}</th>
        <td>
          <a href={`tel:${telInfo1.tel}`}>{telInfo1.tel}</a>
        </td>
        <th>{telInfo2.name}</th>
        <td>
          <a href={`tel:${telInfo2.tel}`}>{telInfo2.tel}</a>
        </td>
      </tr>
    );
  });

  let tb2 = data.bottom[0].map((telInfo1, index) => {
    let telInfo2 = data.bottom[1][index];
    return (
      <tr>
        <th>{telInfo1.name}</th>
        <td>
          <a href={`tel:${telInfo1.tel}`}>{telInfo1.tel}</a>
        </td>
        <th>{telInfo2.name}</th>
        <td>
          <a href={`tel:${telInfo2.tel}`}>{telInfo2.tel}</a>
        </td>
      </tr>
    );
  });

  return (
    <table border="0" cellPadding="0" cellSpacing="0" className="Tel">
      <colgroup>
        <col width="" />
        <col width="" />
        <col width="" />
        <col width="" />
      </colgroup>
      <thead>
        <tr>
          <th>제목</th>
          <th>문의처</th>
          <th>제목</th>
          <th>문의처</th>
        </tr>
      </thead>
      <tbody>{tb1}</tbody>

      <thead>
        <tr>
          <th colSpan="4">경기도교육청</th>
        </tr>
      </thead>
      <tbody className="last_size_down">{tb2}</tbody>
    </table>
  );
};

export default Tel;
