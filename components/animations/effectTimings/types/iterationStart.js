import {  memo } from "react";

import DefaultLayout from "../commons/defaultLayout";

function IterationStart() {
  const configs = [
    {
      name: 0.0,
    },
    {
      name: 0.5,
    },
    {
      name: 0.7,
    },
    {
      name: 0.9,
    },
  ];

  const clicks = [];
  const text = `Describes at what point in the iteration the animation should start. 0.5 would indicate starting halfway through the first iteration for example, and with this value set, an animation with 2 iterations would end halfway through a third iteration. Defaults to 0.0.`

  return (
    <>
      <DefaultLayout
        type="iterationStart"
        text={text}
        configs={configs}
        funArray={clicks}
      />
    </>
  );
}
export default memo(IterationStart);
