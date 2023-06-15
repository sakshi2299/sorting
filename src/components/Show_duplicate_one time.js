import React from "react";
import { Employee } from "./Array_of_object";
export const DuplicateList = () => {
  const uniqueIds = [...new Set(Employee.map((item) => item.id))];
  const uniqueData = uniqueIds.map((id) =>
    Employee.find((item) => item.id === id)
  );
  return (
    <>
      <th>
        {uniqueData.map((item) => (
          <tr key={item.id}>{item.id}</tr>
        ))}
      </th>
      <th>
        {uniqueData.map((item) => (
          <tr key={item.id}>{item.name}</tr>
        ))}
      </th>
      <th>
        {uniqueData.map((item) => (
          <tr key={item.id}>{item.date}</tr>
        ))}
      </th>
    </>
  );
};
