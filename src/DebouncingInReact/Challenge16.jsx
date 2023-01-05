import React, { useEffect, useState } from "react";
import axios from "axios";

// https://api.postalpincode.in/pincode/110001
const pinAPI = `https://api.postalpincode.in/pincode/`;

function Challenge16() {
  const [pin, setPin] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      axios
        .get(pinAPI + pin)
        .then((res) => {
          setData(res.data[0].PostOffice);
        })
        .catch((err) => console.log(err));
    }, 2000);

    return () => clearTimeout(debounce);
  }, [pin]);

  return (
    <div>
      <input
        placeholder="Enter the pin code"
        onChange={(e) => setPin(e.target.value)}
      />
      {data && data.map((item, idx) => <p key={idx}>{item.Name}</p>)}
    </div>
  );
}

export default Challenge16;
