import React from "react";
import { useLoaderData } from "react-router-dom";

function Data() {
  const dogUrl = useLoaderData();

  return (
    <div>
      <img src={dogUrl} />
    </div>
  );
}

export default Data;

export const dataLoader = async () => {
  const res = await fetch("https://random.dog/woof.json");
  const dog = await res.json();

  return dog.url;
};
