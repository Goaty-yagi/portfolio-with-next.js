import { memo } from "react";

import DefaultLayout from "../commons/defaultLayout";

function Iterations() {
  const configs = [
    {
      name: 1,
    },
    {
      name: 2,
    },
    {
      name: 3,
    },
    {
      name: Infinity,
    },
  ];
  const clicks = [];
  const text = `The number of times the animation should repeat. Defaults to 1, and can also take a value of Infinity to make it repeat for as long as the element exists.`

  return (
    <>
      <DefaultLayout
        type="iterations"
        text={text}
        configs={configs}
        funArray={clicks}
      />
    </>
  );
}
export default memo(Iterations);
