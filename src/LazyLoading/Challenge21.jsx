import React, { Suspense } from "react";
// import Home from "./Home";
// import Lorem from "./Lorem";

// before Lazy Loading -> Lorem Comp -> 358 kB size, ~ 81 ms
// after Lazy Loading -> Lorem Comp -> 302 kB, ~ 7 ms

const Lorem = React.lazy(() => import("./Lorem"));
const Home = React.lazy(() => import("./Home"));

function Challenge21() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
        <Lorem />
      </Suspense>
    </div>
  );
}

export default Challenge21;
