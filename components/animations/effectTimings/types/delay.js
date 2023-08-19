import { useState, memo } from "react";

import DefaultLayout from "../commons/defaultLayout";

function Delay() {
  const configs = [
    {
      name: 500,
    },
    {
      name: 750,
    },
    {
      name: 1000,
    },
    {
      name: 2000,
    },
  ];
  const clicks = [];
  const text = `The number of milliseconds to delay the start of the animation. Defaults to 0.`

  return (
    <>
      <DefaultLayout
        type="delay"
        text={text}
        configs={configs}
        funArray={clicks}
      />
    </>
  );
}
export default memo(Delay);
