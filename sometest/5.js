import React from "react";

function DataList(props) {
  let { data } = props;
  console.log(data);
  return (
    <>
      <h2>code goes here</h2>
      {data.map((v, i) => {
        return (
          <h2 key={i}>
            <span>{v.name}</span> <span>{v.age}</span>
          </h2>
        );
      })}
    </>
  );
}

export default DataList;
