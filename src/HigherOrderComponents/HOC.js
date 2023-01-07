import React, { useEffect, useState } from "react";

function HOC(title, Component, source) {
  return function HOC2() {
    const [data, setData] = useState([]);

    const getData = async () => {
      const data = await fetch(`https://jsonplaceholder.typicode.com/${source}`)
        .then((response) => {
          return response;
        })
        .catch((err) => {
          console.log(err);
        });
      setData(await data.json());
    };

    useEffect(() => {
      getData();
    }, []);

    return (
      <div>
        <h2>{title}</h2>
        <Component data={data} />
      </div>
    );
  };
}

export default HOC;
